class Api::RequestsController < ApplicationController

  def create
    @request = Request.new(request_params)
    if @request.save
      render json: @request
    else
      render json: @bench.errors, status: 422
    end
  end

  def index
    @requests = Request.all
    render json: @requests
  end

  def update
    @request = Request.find(params[:id])
    if @request.update
      render json: @request
    else
      render @request.errors, status: 422
    end
  end

  def destroy
    @request = Request.find(params[:id])
    @request.destroy
    render json: @request
  end


  private

  def request_params
    params.require(:request).permit(:title, :description, :date, :time, :location, :category_id, :requester_id)
  end

end
