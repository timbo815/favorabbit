class Request < ActiveRecord::Base
  validates :title, :description, :date, :time, :location, :category, :requester_id, presence: true

  has_many :offers

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :requester_id,
    primary_key: :id
  )


end
