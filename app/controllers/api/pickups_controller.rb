class Api::PickupsController < ApplicationController

  def show
    pickup = Pickup.find_by_tracking_number(params[:id])
    if pickup
      render json: { status: pickup.status }
    else
      head :not_found
    end
  end

end
