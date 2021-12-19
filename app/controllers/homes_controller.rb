class HomesController < ApplicationController
  def search
    gon.hotpepper_key = ENV['HOTPEPPER_API']
  end

  def show
    
  end
end
