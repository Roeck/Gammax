class GamesController < ApplicationController

    def index
        games = Game.all

        render json: GameSerializer.new(games)
    end

    def create
        game = Game.new(game_params)

        if game.save
            render json: GameSerializer.new(game)           
        else
            render json: {errors: game.errors.full_messages}
        end
    end

    def destroy
        game = Game.find(params[:id])
        game.destroy
    end

    private
    
    def game_params
        params.require(:game).permit(:name, :producer, :score, :image)
    end
end