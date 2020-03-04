class LessonPaymentsController < ApplicationController
  before_action :set_lesson_payment, only: [:show, :update, :destroy]

  # GET /lesson_payments
  def index
    @lesson_payments = LessonPayment.all

    render json: @lesson_payments
  end

  # GET /lesson_payments/1
  def show
    render json: @lesson_payment
  end

  # POST /lesson_payments
  def create
    @lesson_payment = LessonPayment.new(lesson_payment_params)

    if @lesson_payment.save
      render json: @lesson_payment, status: :created, location: @lesson_payment
    else
      render json: @lesson_payment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lesson_payments/1
  def update
    if @lesson_payment.update(lesson_payment_params)
      render json: @lesson_payment
    else
      render json: @lesson_payment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lesson_payments/1
  def destroy
    @lesson_payment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lesson_payment
      @lesson_payment = LessonPayment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def lesson_payment_params
      params.require(:lesson_payment).permit(:payment_number, :status, :date, :cost, :service, :booking_id, :user_id)
    end
end
