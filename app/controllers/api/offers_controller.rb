class Api::OffersController < ApplicationController

  def create
    @offer = Offer.new(offer_params)
    @offer.doer_id = current_user.id
    if @offer.save
      render "api/offers/show"
    else
      render json: @offer.errors, status: 422
    end
  end


  def index
    @offers = Offer.all
    render json: @offers
  end

  def update
    @offer = Offer.find(params[:id])
    if @offer.update_attributes(offer_params)
      render json: @offer
    else
      render json: @offer.errors, status: 422
    end
  end

  def destroy
    @offer = Offer.find(params[:id])
    @offer.destroy
    render json: @offer
  end


  private

  def offer_params
    params.require(:offer).permit(:message, :request_id, :accepted)
  end

end
