class RemoveTitleColumnFromOffers < ActiveRecord::Migration
  def change
    remove_column :offers, :title
  end
end
