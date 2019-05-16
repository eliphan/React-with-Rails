class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :game_id
      t.integer :like_count
      t.string :name
    end
  end
end
