class CreatePickups < ActiveRecord::Migration[7.0]
  def change
    create_table :pickups do |t|

      t.date "pickup_date", null: false

      t.string "address1", null: false
      t.string "address2", default: ""
      t.string "city", null: false
      t.string "state", null: false
      t.string "zip", null: false

      t.string "tracking_number", null: false

      t.integer "status", default: 0

      t.timestamps
    end

    add_index :pickups, :tracking_number, unique: true
  end
end
