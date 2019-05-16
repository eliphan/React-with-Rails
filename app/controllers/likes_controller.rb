class LikesController < ApiController
  
  def index
    @likes = Like.order("id")
    render json: @likes 
  end

  def create
    @like = Like.create(like_params)
    render json: @like
  end

  private
    def like_params
      params.require(:like).permit(:game_id, :like_count)
    end
end