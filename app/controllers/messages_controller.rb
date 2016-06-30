class MessagesController < ApplicationController
  def create
    @message = Message.create(msg_params)
  end

  private

  def msg_params
    params.require(:message).permit(:content, :user_name, :user_color)
  end
end
