class Player < ActiveRecord::Base

    has_many :games
    has_many :competition, through: :games

end