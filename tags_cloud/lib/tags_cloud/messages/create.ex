defmodule TagsCloud.Message.Create do
  alias TagsCloud.{Message, Repo}

  def call(params) do
    params
    |> Message.changeset()
    |> Repo.insert()
    |> handle_insert()
  end

  # Private function (defp)
  # Using one line function
  defp handle_insert({:ok, %Message{}} = result), do: result
  # Same as
    # defp handle_insert({:ok, %Message{}} = result), do
    #   result
    # end

  # Using "pattern matching"
  defp handle_insert({:error, result}), do: {:error, %{result: result, status: :bad_request}}
end
