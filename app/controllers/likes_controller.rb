class LikesController < ApiController 

  def new
    @like = Like.new
  end

  def create
    @game = Game.find_or_create_by(id: params[:game_id])
    @like = @game.likes.create(like_params)
    @like.save

  end

  private
    def like_params
      params.require(:like).permit(:game_id, :count)
    end
end