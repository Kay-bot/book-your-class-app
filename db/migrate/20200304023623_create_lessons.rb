class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.string :url
      t.string :title
      t.string :duration
      t.integer :cost
      t.string :category
      t.string :language
      t.string :level
      t.text :description

      t.timestamps
    end
  end
end
