class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors, status: 422
		end
	end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors
    end
  end

	private

	def user_params
		params.require(:user).permit(:username, :password, :image)
	end

end
