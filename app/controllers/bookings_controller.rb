class BookingsController < ApiController
  
  before_action :set_booking, only: [:show, :update, :destroy]

  # GET /bookings
  def index
    @bookings = Booking.all

    render json: @bookings
  end

  # GET /bookings/1
  def show
    begin
    booking = Booking.find(params[:id])
      if request.query_parameters.key?("id")
        render json:{booking: booking.title, booking_id: booking.id}, status: :ok
        
      else
        render json: booking, status: :ok
      end
  rescue ActiveRecord::RecordNotFound
    render json: { errors: "#{params[:id]} doesn't exist" }, status: :not_found
  end
  end

  # POST /bookings
  def create
    puts params.inspect
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: @booking, status: :created, location: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
  end

  private
    def set_booking
      @booking = Booking.find(params[:id])
    end

    def booking_params
      params.require(:booking).permit(:status, :title, :cost, :start, :user_id, :lesson_id)
    end
end
