class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.create(booking_params)
    if @booking.save
      render json: @booking
    else
      render json: @booking.errors
  end

  def index
    @bookings = current_user.bookings
  end


  private

  def booking_params
    params.require(:booking).permit(:request_id, :offer_id)
  end
end
