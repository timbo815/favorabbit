class Api::OffersController < ApplicationController

  def create
    offer = Offer.new(offer_params)
    if offer.save
      render json: offer
    end
  end

  def show
  end

  def index
    
  end

  def destroy
  end

  private

  def offer_params
    params.require(:offer).permit(:message, :request_id, :accepted)
  end

end
