require 'net/https'

class GamesController < ApiController 
  
  def index
    http = Net::HTTP.new('api-v3.igdb.com', 80)
    request = Net::HTTP::Get.new(URI('https://api-v3.igdb.com/games'), {'user-key' => '943aec2336c7d82c5084fbaffa761249'})
    request.body = 'fields cover.*, screenshots.*,platforms.*,age_ratings,aggregated_rating,artworks,bundles,category,collection,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,websites; 
    sort popularity desc; limit 50;'
    render json:http.request(request).body
  end

  def rpg
    http = Net::HTTP.new('api-v3.igdb.com', 80)
    request = Net::HTTP::Get.new(URI('https://api-v3.igdb.com/games'), {'user-key' => '943aec2336c7d82c5084fbaffa761249'})
    request.body = 'fields cover.*,age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;
    sort popularity desc; where genres = 12; limit 50;'
    render json:http.request(request).body
  end

end
