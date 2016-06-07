class Offer < ActiveRecord::Base
  validates :message, :request_id, :doer_id, presence: true
  # 
  # def doer_photo(doer_id)
  #   user = User.find_by(id: doer_id)
  #   user.image_url
  # end
end
