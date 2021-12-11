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

    static renderGames() {
        for(let game of this.allGames) {
            game.renderGame()
        }
    }

    static fetchGames() {
        fetch(gamesURL)
            .then(response => response.json())
            .then(games => {
                for(let game of games.data) {
                    let newGame = new Game(game)
                }
                this.renderGames()
            })
    }

    renderGame() {

        const gameLi = document.createElement('card')
        gameLi.dataset.id = this.id 
        gameList.appendChild(gameLi)

        const h3 = document.createElement('h3')
        h3.className = ("h3")
        h3.innerText = this.name 

        const p = document.createElement('h6')
        p.className = ("card-text")
        p.innerText = "Producer: " + this.producer + " | " + "Score: " + this.score

        const img = document.createElement('img')
        img.src = this.image
        img.width=130
        
        const deleteButton = document.createElement('button')
        deleteButton.className = "btn btn-outline-secondary"
        deleteButton.innerText = "Remove"
        deleteButton.addEventListener("click",this.deleteGame)

        gameLi.append(h3, img, p, deleteButton)

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

    deleteGame() {
        const gameId = this.parentElement.dataset.id

        fetch(`${gamesURL}/${gameId}`,{
            method: "DELETE"
        })
        // .catch(err => alert(err))
        this.parentElement.remove()
    }
}