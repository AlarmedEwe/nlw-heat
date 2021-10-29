defmodule TagsCloud.Tags.Count do
  alias TagsCloud.Message.Get

  def call do
    Get.today_messages()
    |> Task.async_stream(&count_words(&1.message))
    # Same as: |> Task.async_stream(fn messages -> count_words(messages.message) end)
    |> Enum.reduce(%{}, &sum_values(&1, &2))
    # Same as: |> Enum.reduce(%{}, fn elem, accumulator -> sum_values(elem, accumulator) end)
    |> IO.inspect()
  end

  defp count_words(message) do
    message
      |> String.split()
      |> Enum.frequencies()
  end

  defp sum_values({:ok, map1}, map2) do
    Map.merge(map1, map2, fn _key, value1, value2 ->
      value1 + value2
    end)
  end
end
