class CreateBots < ActiveRecord::Migration[5.2]
  def change
    create_table :bots do |t|
      t.string :name
      t.integer :power
      t.integer :defense
      t.string :image_url

      t.timestamps
    end
  end
end
