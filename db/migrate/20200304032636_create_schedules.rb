class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.string :title
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
