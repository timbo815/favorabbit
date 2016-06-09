class Offer < ActiveRecord::Base
  validates :message, :request_id, :doer_id, presence: true

  belongs_to :requests

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :doer_id,
    primary_key: :id
  )
end
