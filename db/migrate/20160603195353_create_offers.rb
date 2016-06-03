class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
      t.string :title, null: false
      t.text :message, null: false
      t.integer :request_id, null: false
      t.integer :doer_id, null: false
      t.boolean :accepted, default: false
      t.timestamps null: false
    end
    add_index :offers, :request_id
    add_index :offers, :doer_id
  end
end
