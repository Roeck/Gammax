class Game {

    static allGames = []

    constructor(game) {
        this.id = game.id
        this.name = game.attributes.name
        this.producer = game.attributes.producer
        this.score = game.attributes.score
        this.image = game.attributes.image
        this.comments = game.attributes.comments

        Game.allGames.push(this)
    }

    static fetchGames() {
        fetch(gamesURL)
            .then(response => response.json())
            .then(games => {
                for(let game of games.data) {
                    let newGame = new Game(game)
                }
                // this.renderGames()
            })
    }

    static submitGame(s) {
        s.preventDefault()
        fetch(gamesURL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: gameName.value,
                producer: gameProducer.value,
                score: gameScore.value,
                image: gameImage.value,
            })
        })
            .then(response => response.json())
            .then(game => {
                let newGame = new Game(game.data)
                // console.log(newGame)
                newGame.renderGame()
                gameForm.reset()
            })
    }

}