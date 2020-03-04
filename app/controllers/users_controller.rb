class UsersController < ApiController

  before_action :authorize_request, only: [:update_user, :delete_user]

  def index
    render json: User.all, status: :ok
  end

  def show
    begin
    user = User.find(params[:id])
      if request.query_parameters.key?("email")
        render json: user.email, status: :ok
      else
        render json: user, status: :ok
      end
  rescue ActiveRecord::RecordNotFound
    render json: { errors: "#{params[:id]} doesn't exist" }, status: :not_found
  end
  end
  
  def create
    userParams = params.require(:user)
      .permit(:email, :password, :password_confirmation)
    user = User.new(userParams)
    
    if user.save()
   
      render json: user, status: :created
    else

      render json: { errors: user.errors.full_messages },
             status: :unprocessable_entity
    end
   
  end

  def update
    user = User.find_by(id: params[:user_id])
    if user
      userParams = params.require(:user)
        .permit(:email, :password, :password_confirmation)

      user.email = userParams["email"]
      user.password = userParams["password"]
      user.password_confirmation = userParams["password_confirmation"]

      if user.save()
        render json: user, status: :ok
      else
        render json: { errors: "update failed" }, status: :bad_request
      end
    else
      render json: { errors: "User not found" }, status: :not_found
    end
  end

  def delete
    user = User.find_by(id: params[:user_id])
    if user
      if user.destroy()
        render json: { message: "user deleted" }, status: :ok
      else
        render json: { errors: "delete failed" }, status: :bad_request
      end
    else
      render json: { errors: "User not found" }, status: :not_found
    end
  end

  def login
    
    user = User.find_by_email(params[:email])

    if !user
      render json: { error: "unauthorized" }, status: :unauthorized
      return
    end

    if !user.authenticate(params[:password])
      
      render json: { error: "unauthorized" }, status: :unauthorized
      return
    end

    token = jwt_encode({ user_id: user.id }, 24.hours.from_now)

    render json: { token: token, exp: 24, username: user.email, userId: user.id },
           status: :ok
  end


  @@JWT_SECRET_KEY = 'to something else'

  def authorize_request
    header = request.headers['Authorization']

    # The Authorization header is in the format of "Bearer <jwt>"
    # we split by space to get the token
    token = header.split(' ')[1]      
    begin         
        @user_jwt = jwt_decode(token)
        @current_user = User.find(@user_jwt[:user_id])
        rescue ActiveRecord::RecordNotFound => e
            render json: { errors: e.message }, status: :unauthorized
        rescue JWT::DecodeError => e
            render json: { errors: e.message }, status: :unauthorized
    end
  end

  protected 

    def jwt_encode(payload, exp = 24.hours.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, @@JWT_SECRET_KEY)
    end
    
    def jwt_decode(token)
        decoded = JWT.decode(token, @@JWT_SECRET_KEY)[0]
        HashWithIndifferentAccess.new decoded
    end
end
