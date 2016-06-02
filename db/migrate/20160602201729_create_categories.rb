class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title, null: false 
      t.string :photo_url, null: false
      t.text :description, null: false
      t.timestamps null: false
    end
  end
end
