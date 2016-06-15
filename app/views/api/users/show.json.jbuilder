json.id @user.id
json.username @user.username
json.image_url asset_path(@user.image.url)
json.offers @user.offers
json.requests @user.requests
