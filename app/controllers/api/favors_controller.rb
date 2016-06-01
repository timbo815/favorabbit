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
    @favors = Favor.all
    render json: @favors
  end

  def update
    @favor = Favor.find(params[:id])
    if @favor.update
      render json: @favor
    else
      render @favor.errors, status: 422
    end
  end

  def destroy
    @favor = Favor.find(params[:id])
    @favor.destroy
    render json: @favor
  end


  private

  def favor_params
    params.require(:favor).permit(:id, :title, :description, :date, :time, :location, :category_id, :doer_id, :completed)
  end

end
