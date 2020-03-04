class SchedulesController < ApiController
  before_action :set_schedule, only: [:show, :update, :destroy]

  # GET /schedules
  def get
    render json: Schedule.all.as_json, status: 200
  end

  # GET /schedules/1
  def show
    @schedule = Schedule.find(params[:id])
    render json: @schedule
  end

  # POST /schedules
  def create
    @schedule = Schedule.new(schedule_params)

    if @schedule.save
      render json: @schedule, status: :created, location: @schedule
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /schedules/1
  def update
    if @schedule.update(schedule_params)
      render json: @schedule
    else
      render json: @schedule.errors, status: :unprocessable_entity
    end
  end

  # DELETE /schedules/1
  def destroy
    @schedule.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_schedule
      @schedule = Schedule.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def schedule_params
      params.require(:schedule).permit(:title, :start, :end, :trainer_id, :account_id)
    end
end
