class Game {

    static allGames=[]

    constructor(game) {
        this.id = game.id
        this.name = game.attributes.name
        this.producer = game.attributes.producer
        this.score = game.attributes.score
        this.image = game.attributes.image
        this.comments = game.attributes.comments

        Game.allGames.push(this)
    }
}