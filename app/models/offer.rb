class Offer < ActiveRecord::Base
  validates :message, :request_id, :doer_id, presence: true

  belongs_to :requests
end
