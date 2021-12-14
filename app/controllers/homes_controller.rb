class HomesController < ApplicationController
  require 'net/http'
  require 'uri'
  require 'json'
  def search
    keyid = ENV['HOTPEPPER_API']
    count = 100
    lat = "34.7606787"
    lng = "135.6235744"
    format = "json"
    params = {"key":keyid, "count":count, "lat":lat, "lng":lng,"format":format}
    @restaurants = [["名称","アクセス","画像"]]
    uri = URI.parse("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/")
    uri.query = URI.encode_www_form(params)  
    json_res = Net::HTTP.get uri
    
    @response = JSON.load(json_res)
    
    if @response == nil or @response["results"].has_key?("error") then
        puts "エラーが発生しました！"
    end
    for @restaurant in @response["results"]["shop"] do
      @rest_info = [@restaurant["name"], @restaurant["access"], @restaurant["photo"]["pc"]["l"]]
      puts @rest_info
      @restaurants.append(@rest_info)
    end
  end

  def create

  end
end
