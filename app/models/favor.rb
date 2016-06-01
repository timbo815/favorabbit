class Favor < ActiveRecord::Base
  validates :title, :description, :date, :time, :location, :asker_id, presence: true
end
