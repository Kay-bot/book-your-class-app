class Schedule < ApplicationRecord

  belongs_to :lesson, optional: true
  accepts_nested_attributes_for :lesson
  
  has_many :bookings, :inverse_of => :schedule
  accepts_nested_attributes_for :bookings
  
end 
