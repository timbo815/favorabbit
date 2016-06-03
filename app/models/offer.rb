class Offer < ActiveRecord::Base
  validates :title, :message, :request_id, :doer_id, presence: true

  def create
  end

  def show
  end

  def index
  end

  def destroy
  end

  private

  def offer_params
    params.require(:offer).permit(:title, :message, :request_id, :accepted)
  end
end
