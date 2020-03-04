class CreateLessonPayments < ActiveRecord::Migration[6.0]
  def change
    create_table :lesson_payments do |t|
      t.string :payment_number
      t.string :status
      t.date :date
      t.integer :cost
      t.string :service
      t.integer :booking_id
      t.integer :user_id

      t.timestamps
    end
    add_index :lesson_payments, :booking_id
    add_index :lesson_payments, :user_id
  end
end
