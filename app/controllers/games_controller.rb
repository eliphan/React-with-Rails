require 'net/https'
class GamesController < ApiController 
  def index
    http = Net::HTTP.new('api-v3.igdb.com', 80)
    request = Net::HTTP::Get.new(URI('https://api-v3.igdb.com/games'), {'user-key' => '943aec2336c7d82c5084fbaffa761249'})
    request.body = 'fields *; sort popularity desc; limit 50;'
    render json:http.request(request).body
  end
end