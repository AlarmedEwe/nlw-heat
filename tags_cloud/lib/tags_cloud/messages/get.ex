defmodule TagsCloud.Message.Get do
  import Ecto.Query

  alias TagsCloud.{Message, Repo}

  # Parentesis are not required
  def today_messages do
    today = Date.utc_today()
    query = from message in Message, where: type(message.inserted_at, :date) == ^today

    Repo.all(query)
  end
end
