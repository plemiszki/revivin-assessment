class Pickup < ActiveRecord::Base

  enum status: [:pending, :accepted, :scheduled, :complete]

  validates :pickup_date, :address1, :city, :state, :zip, :tracking_number, presence: true
  validates :tracking_number, uniqueness: true

end
