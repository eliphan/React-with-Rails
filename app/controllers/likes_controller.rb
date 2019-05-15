class LikesController < ApiController 

  def create
    game = Game.find_or_create_by(id: params[:game_id])
    like = game.likes.create(like_params)
    like.save
    render json: like
  end

  private
    def like_params
      params.require(:like).permit(:game_id, :count)
    end
end