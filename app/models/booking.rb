class Booking < ActiveRecord::Base
  validates :request_id, :offer_id, null: false

  
end
