defmodule TagsCloud.Repo do
  use Ecto.Repo,
    otp_app: :tags_cloud,
    adapter: Ecto.Adapters.Postgres
end
