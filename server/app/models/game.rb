class Game < ApplicationRecord
    has_many :comments, dependent: :destroy
end