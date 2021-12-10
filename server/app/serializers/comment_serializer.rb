class CommentSerializer
  include JSONAPI::Serializer
  attributes :text, :game_id, :game
end