class GameSerializer
  include JSONAPI::Serializer
  attributes :name, :producer, :score, :image, :comments
end