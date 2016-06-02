class RemoveFavorsTable < ActiveRecord::Migration
  def change
    drop_table :favors
  end
end
