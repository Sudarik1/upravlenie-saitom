
import { useState, useEffect } from "react"

import PageContent from "../components/PageContent"
import UpdateButtonComponent from "../components/UpdateButtonComponent"

const Notes = () => {

    const [notes, setNotes] = useState([])
    const [updatedTitle, setUpdatedTitle] = useState('')
    const [updatedBody, setUpdatedBody] = useState('')
    
    useEffect( () => {
        const fetchNotes = async () => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/note/')
                const data = await res.json()
                setNotes(data)
            }
            catch (error) {
                console.log('Error fetching notes', error)
            }
        }
            
        fetchNotes()
    },[])

    const updateTitleHandler = (e, pageId) => {

        e.preventDefault();
        const confirm = window.confirm('Уверен, что хочешь обновить название заметки?')
        if(!confirm){
            return
        }

        const updateTitle = async (pageId, updatedTitle) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/note/', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id:pageId,
                        title: updatedTitle                    
                    })
                })
            }
            catch (error) {
                console.log('Возникла ошибка во время обновления названия заметки', error)
            }
        }

        updateTitle(pageId, updatedTitle)
    }

    const updateBodyHandler = (e, pageId) => {

        e.preventDefault();
        const confirm = window.confirm('Уверен, что хочешь обновить текст заметки?')
        if(!confirm){
            return
        }

        const updateBody = async (pageId, updatedContent) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/note/', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id:pageId,
                        body: updatedBody                    
                    })
                })
            }
            catch (error) {
                console.log('Возникла ошибка во время обновления текста страницы', error)
            }
        }

        updateBody(pageId, updatedBody)
    }

    return (
        <PageContent>
            <div>
                {
                    notes.map( (note) => (
                            <div className="page__content--separate" key={note._id}>
                                <h1>
                                    Заголовок: 
                                    <br></br>
                                    {note.title}
                                </h1>
                                <form onSubmit={ (e) => updateTitleHandler(e, note._id) }>
                                    <input
                                        placeholder="Введи новый заголовок заметки"
                                        onChange={(e) => setUpdatedTitle(e.target.value)}
                                    >
                                    </input>
                                    <UpdateButtonComponent text='обновить заголовок заметки' />
                                </form>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h2>Текст:</h2> 
                                <br></br>
                                <p>{note.body}</p>
                                <form onSubmit={ (e) => updateBodyHandler(e, note._id) }>
                                    <input
                                        placeholder="Введи новый текст заметки"
                                        onChange={(e) => setUpdatedBody(e.target.value)}
                                    >
                                    </input>
                                    <UpdateButtonComponent text='обновить текст заметки' />
                                </form>
                                <br></br>
                                <hr className="line"></hr>
                            </div>
                        )
                    )
                } 
            </div>
        </PageContent>
    )
}

export default Notes