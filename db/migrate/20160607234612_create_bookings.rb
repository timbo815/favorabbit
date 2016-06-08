class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :request_id
      t.integer :offer_id
      t.timestamps null: false
    end
  end
  remove_column :users, :picture, :string
end
