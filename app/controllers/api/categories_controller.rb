class Api::CategoriesController < ApplicationController
  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category
    else
      render json: @category.errors, status: 422
    end
  end

  def show
    @category = Category.find(params[:id])
    if @category.save
      render json: @category
    else
      render json: @category.errors
    end
  end

  def index
    @categories = Category.all
    render json: @categories
  end

  def update
    @category = Category.find(params[:id])
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: 422
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    render json: @category 
  end

  private

  def category_params
    params.require(:category).permit(:title, :photo_url, :description)
  end

end
