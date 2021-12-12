class Comment {

    constructor(comment) {

        this.id = comment.id
        this.text = comment.text
        this.game_id = comment.game_id
            // console.log(comment.id)
    }

    static createComment(e) {
        e.preventDefault()
        const commentText = e.target.children[0].value
        const commentList = e.target.previousElementSibling
        const gameId = e.target.parentElement.dataset.id
    }
}