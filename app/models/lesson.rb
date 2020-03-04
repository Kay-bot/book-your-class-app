class Lesson < ApplicationRecord

    has_many :users, :through => :bookings

    has_many :schedules, :through => :bookings
  
    has_many :bookings, :inverse_of => :lessons
    accepts_nested_attributes_for :bookings

end
