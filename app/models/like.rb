class Like < ApplicationRecord
  belongs_to :game
  
  def game_id
    self.try(:game).try(:id)
  end

  def game_id=(id)
    game = Game.find_or_create_by(id: id)
    self.game = game
  end

end
