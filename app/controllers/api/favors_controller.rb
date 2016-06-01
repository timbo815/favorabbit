class Api::FavorsController < ApplicationController

  def create
    @favor = Favor.new(favor_params)
    if @favor.save
      render json: @favor
    else
      render json: @bench.errors, status: 422
    end
  end

  def index

  end


  private

  def favor_params
    params.require(:favor).permit(:title, :description, :date, :time, :location, :category_id, :doer_id, :completed)
  end

end
