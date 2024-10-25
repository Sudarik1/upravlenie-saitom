
import { useState, useEffect } from "react"

import PageContent from "../components/PageContent"
import DeleteButtonComponent from "../components/DeleteButtonComponent"

const Comments = () => {
    const [comments, setComments] = useState([])
    
    useEffect( () => {
        const fetchComments = async () => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/comment/')
                const data = await res.json()
                setComments(data)
            }
            catch (error) {
                console.log('Error fetching comments', error)
            }
        }
            
        fetchComments()
    }, [])

    const deleteCommentHandler = (commentId) => {
        const confirm = window.confirm('Уверен, что хочешь удалить комментарий?')
        if(!confirm){
            return
        }

        const deleteComment = async (commentId) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/comment/', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({_id:commentId})
                })
            }
            catch (error) {
                console.log('Во время удаления комментария произошла ошибка', error)
            }
        }

        deleteComment(commentId)
    }

    return (
        <PageContent>
            <div>
                {comments.map( (comment) => (
                    <div key={comment._id}>
                        <h1>Имя пользователя: {comment.userName}</h1>
                        <p>Комментарий: {comment.comment}</p>
                        <DeleteButtonComponent onClick={() => deleteCommentHandler(comment._id)} text='удалить комментарий'/>
                        <br></br>
                    </div>
                ))}
            </div>
        </PageContent>
    )
}

export default Comments