class HomesController < ApplicationController
  require 'net/http'
  require 'uri'
  require 'json'
  def search
    gon.keyid = ENV['HOTPEPPER_API']
    keyid = ENV['HOTPEPPER_API']
    count = 100
    lat = "35.658"
    lng = "139.7016"
    format = "json"
    params = {"key":keyid, "count":count, "lat":lat, "lng":lng,"format":format}
    @restaurants = [["名称"]]
    uri = URI.parse("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/")
    uri.query = URI.encode_www_form(params)  
    json_res = Net::HTTP.get uri
    
    @response = JSON.load(json_res)
    
    if @response == nil or @response["results"].has_key?("error") then
        puts "エラーが発生しました！"
    end
    for @restaurant in @response["results"]["shop"] do
      @rest_info = [@restaurant["name"], @restaurant["access"], @restaurant["photo"]["pc"]["l"]]

       @restaurants.append(@rest_info)
    end

  end

  def create

  end
end
