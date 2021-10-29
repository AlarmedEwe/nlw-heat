defmodule TagsCloudWeb.MessagesView do
  use TagsCloudWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
