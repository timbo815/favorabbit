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

  # def show
  # end
  #
  def index
    @offers = Offer.all
    render json: @offers
  end
  # def destroy
  # end

  private

  def offer_params
    params.require(:offer).permit(:message, :request_id, :accepted)
  end

end
