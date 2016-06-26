class DropBookings < ActiveRecord::Migration
  def change
    drop_table :bookings 
  end
end
