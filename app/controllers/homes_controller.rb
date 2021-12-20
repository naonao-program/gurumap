class HomesController < ApplicationController
  before_action :hotpepper_key, only:[:search, :show]
  def search
  end

  def show
    
  end
  
  private
  def hotpepper_key
    gon.hotpepper_key = ENV['HOTPEPPER_API']
  end
end
