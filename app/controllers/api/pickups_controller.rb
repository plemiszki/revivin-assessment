class Api::PickupsController < ApplicationController

  def show
    pickup = Pickup.find_by_tracking_number(params[:id])
    if pickup
      render json: { status: pickup.status }
    else
      head :not_found
    end
  end

  def create
    pickup = Pickup.new(pickup_params)
    if pickup.save
      render json: { tracking_number: pickup.tracking_number }, status: 200
    else
      render json: { errors: pickup.errors.full_messages }, status: 422
    end
  end

  private

  def pickup_params
    params[:pickup].permit(:pickup_date, :address1, :address2, :city, :state, :zip).merge(tracking_number: rand(10_000))
  end

end
