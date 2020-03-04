class Booking < ApplicationRecord
    belongs_to :user, :inverse_of => :bookings
    accepts_nested_attributes_for :user
    
    belongs_to :lesson, :inverse_of => :bookings
    accepts_nested_attributes_for :lesson
    
    belongs_to :schedule, :inverse_of => :bookings
    accepts_nested_attributes_for :schedule
    
    has_many :lesson_payments, dependent: :destroy, :inverse_of => :booking
    accepts_nested_attributes_for :lesson_payments
    
    # validates :schedule_id, presence: true
  end
  