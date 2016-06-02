class Request < ActiveRecord::Base
  validates :title, :description, :date, :time, :location, :category_id, :requester_id, presence: true
end
