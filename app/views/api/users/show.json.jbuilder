json.id @user.id
json.username @user.username
json.image_url asset_path(@user.image.url)
json.offers @user.offers
json.requests @user.requests



#index
# json.array!(@users) do |user|
#   json.partial! "users/user", user: user
# end

#show
# json.partial! "users/user", user: @user

# _user partial:
# json.id user.id
# json.username user.username
# json.image_url asset_path(user.image.url)
