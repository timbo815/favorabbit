class Request < ActiveRecord::Base
  validates :title, :description, :date, :time, :location, :category, :requester_id, presence: true

  has_many :offers



end
