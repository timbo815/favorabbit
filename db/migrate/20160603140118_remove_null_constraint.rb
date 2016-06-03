class RemoveNullConstraint < ActiveRecord::Migration
  def change
    remove_column :requests, :category_id
    add_column :requests, :category, :string
  end
end
