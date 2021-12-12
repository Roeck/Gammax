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

        Comment.submitComment(commentText, commentList, gameId)
        e.target.reset()
    }

    renderComment(commentList) {

        const p = document.createElement('p')
        p.dataset.id = this.id
        p.innerText = "- " + this.text + " "

        commentList.appendChild(p)
    }

    static submitComment(commentText, commentList, gameId) {

        fetch(commentsURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    text: commentText,
                    game_id: gameId,
                })
            })
            .then(response => response.json())
            .then(comment => {
                let newComment = new Comment(comment)
                newComment.renderComment(commentList)
            })

    }

}