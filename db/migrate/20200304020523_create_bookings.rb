class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :status
      t.string :title
      t.integer :cost
      t.string :start
      t.integer :user_id
      t.integer :lesson_id

      t.timestamps
    end
    add_index :bookings, :user_id
    add_index :bookings, :lesson_id
  end
end
