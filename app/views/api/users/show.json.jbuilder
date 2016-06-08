json.id @user.id
json.username @user.username
json.image_url asset_path(@user.image.url)



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
