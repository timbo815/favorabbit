class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.date :date, null: false
      t.datetime :time, null: false
      t.string :location, null: false
      t.integer :category_id, null: false
      t.integer :requester_id, null: false
    end

    add_index :requests, :category_id
    add_index :requests, :requester_id
  end
end
