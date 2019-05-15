class AddCountToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :count, :integer
  end
end
