
import { useState, useEffect } from "react"

import PageContent from "../components/PageContent"
import UpdateButtonComponent from "../components/UpdateButtonComponent"

const Pages = () => {

    const [pages, setPages] = useState([])
    const [updatedTitle, setUpdatedTitle] = useState('')
    const [updatedContent, setUpdatedContent] = useState('')
    
    useEffect( () => {
        const fetchPages = async () => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/page/')
                const data = await res.json()
                setPages(data)
            }
            catch (error) {
                console.log('Error fetching pages', error)
            }
        }
            
        fetchPages()
    },[])

    const updateTitleHandler = (e, pageId) => {

        e.preventDefault();
        const confirm = window.confirm('Уверен, что хочешь обновить заголовок?')
        if(!confirm){
            return
        }

        const updateTitle = async (pageId, updatedTitle) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/page/', {
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
                console.log('Возникла ошибка во время обновления заголовка', error)
            }
        }

        updateTitle(pageId, updatedTitle)
    }

    const updateContentHandler = (e, pageId) => {

        e.preventDefault();
        const confirm = window.confirm('Уверен, что хочешь обновить текст страницы?')
        if(!confirm){
            return
        }

        const updateContent = async (pageId, updatedContent) => {
            try {
                const res = await fetch('https://gumastro-server.onrender.com/api/page/', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id:pageId,
                        content: updatedContent                    
                    })
                })
            }
            catch (error) {
                console.log('Возникла ошибка во время обновления текста страницы', error)
            }
        }

        updateContent(pageId, updatedContent)
    }

    return (
        <PageContent>
            <div>
                {
                    pages.map( (page) => (
                            <div className="page__content--separate" key={page._id}>
                                <h1>
                                    Заголовок: 
                                    <br></br>
                                    {page.title}
                                </h1>
                                <form onSubmit={ (e) => updateTitleHandler(e, page._id) }>
                                    <input
                                        placeholder="Введи новый заголовок"
                                        onChange={(e) => setUpdatedTitle(e.target.value)}
                                    >
                                    </input>
                                    <UpdateButtonComponent text='обновить заголовок' />
                                </form>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h2>Текст:</h2> 
                                <br></br>
                                <p>{page.content}</p>
                                <form onSubmit={ (e) => updateContentHandler(e, page._id) }>
                                    <input
                                        placeholder="Введи новый текст страницы"
                                        onChange={(e) => setUpdatedContent(e.target.value)}
                                    >
                                    </input>
                                    <UpdateButtonComponent text='обновить текст страницы' />
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

export default Pages