class CreateFavors < ActiveRecord::Migration
  def change
    create_table :favors do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.date :date, null:false
      t.datetime :time, null: false
      t.string :location, null: false
      t.integer :category_id
      t.integer :doer_id
      t.integer :asker_id, null:false
      t.boolean :completed, default: false

      t.timestamps null: false
    end

    add_index :favors, :category_id
    add_index :favors, :doer_id
    add_index :favors, :asker_id
  end
end
