class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :session_token, :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token

  has_attached_file :image, default_url: "default_image.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many(
    :offers,
    class_name: "Offer",
    foreign_key: :doer_id,
    primary_key: :id
  )

  has_many(
    :requests,
    class_name: "Request",
    foreign_key: :requester_id,
    primary_key: :id
  )

def password= password
  self.password_digest = BCrypt::Password.create(password)
  @password = password
end

def self.find_by_credentials username, password
  user = User.find_by(username: username)
  return nil unless user
  user.password_is?(password) ? user : nil
end

def self.find_or_create_from_auth_hash(auth_hash)
   if auth_hash[:provider] == "facebook"
     user = User.find_by(facebook_uid: auth_hash[:uid])
     if user.nil?
       user = User.create!(
       facebook_uid: auth_hash[:uid],
       username: auth_hash[:info][:name],
       password: SecureRandom.urlsafe_base64(8)
       )

       avatar_url = URI.parse(auth_hash[:info][:image])
       avatar_url.scheme = 'https'

       user.image = avatar_url.to_s
       user.save!
     end
   end

   user
 end

def password_is? password
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def reset_session_token!
  self.session_token = SecureRandom.urlsafe_base64(16)
  self.save!
  self.session_token
end

private

def ensure_session_token
  self.session_token ||= SecureRandom.urlsafe_base64(16)
end

end
