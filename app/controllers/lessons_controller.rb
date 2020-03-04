class LessonsController < ApiController

  LESSONS_PER_PAGE = 6

  def index
    @lesson_count = Lesson.count.to_i
    @page = params.fetch(:page, 0).to_i
    @lessons = Lesson.offset(@page * LESSONS_PER_PAGE).limit(LESSONS_PER_PAGE)
    render json: {lessons: @lessons, page: @page, count: @lesson_count}, status: :ok
  end

  def show
    @lesson = Lesson.find(params[:id])
    render json: {lesson: @lesson}, status: :ok
  end

  def create
    @lesson = Lesson.new(lesson_params)

    if @lesson.save
      render json: @lesson, status: :created
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  def update
    @lesson = Lesson.find params[:id]
    if @lesson.update(lesson_params)
      render json: @lesson
    else
      render json: @lesson.errors, status: :unprocessable_entity
    end
  end

  def delete
    @lesson = Lesson.find(params[:id])
    @lesson.destroy
    render json: { message: "lesson deleted" }, status: :ok
  end

  private
  
  def lesson_params
    params.require(:lesson).permit(:title, :duration, :cost, :category, :language, :level, :description, :url)
  end
end
