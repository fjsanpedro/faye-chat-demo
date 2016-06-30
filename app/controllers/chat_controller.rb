class ChatController < ApplicationController
  def dashboard
    @messages = Message.all
  end
end
