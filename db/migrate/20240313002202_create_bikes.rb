class CreateBikes < ActiveRecord::Migration[7.1]
  def change
    create_table :bikes do |t|
      t.string :brand
      t.integer :wheels
      t.string :usage

      t.timestamps
    end
  end
end
