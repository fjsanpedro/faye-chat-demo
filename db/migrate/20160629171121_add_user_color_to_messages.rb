class AddUserColorToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :user_color, :string
  end
end
