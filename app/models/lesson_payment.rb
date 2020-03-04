class LessonPayment < ApplicationRecord
    belongs_to :user, optional: true
    accepts_nested_attributes_for :user
  
    belongs_to :booking, optional: true
    accepts_nested_attributes_for :booking
end
