require 'bcrypt'
class User < ApplicationRecord
    
    has_secure_password 

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
    
    has_many :schedules, dependent: :destroy, :inverse_of => :account
    accepts_nested_attributes_for :schedules
    
    has_many :bookings, dependent: :destroy, :inverse_of => :account
    accepts_nested_attributes_for :bookings
    
    has_many :lesson_payments, dependent: :destroy, :inverse_of => :account
    accepts_nested_attributes_for :lesson_payments

end
