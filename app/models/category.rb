class Category < ActiveRecord::Base
  validates :title, :photo_url, :description, presence: true, uniqueness: true
end
