
import { useState, useEffect } from "react"

import PageContent from "../components/PageContent"
import UpdateButtonComponent from "../components/UpdateButtonComponent"

const Motto = () => {

    const [motto, setMotto] = useState([])
    const [updatedMotto, setUpdatedMotto] = useState('')

    useEffect( () => {
        const fetchMotto = async () => {
            try{
                const res = await fetch('http://localhost:8000/api/motto/')
                const data = await res.json()
                setMotto(data)
            }
            catch(error){
                console.log(`During fetching the motto the following error occured: ${error}`)
            }
        }

        fetchMotto()

    }, [])

    const updateMottoHandler = (e, mottoId) => {
        e.preventDefault();
        const confirm = window.confirm('Уверен, что хочешь обновить слоган?')
        if(!confirm){
            return
        }

        console.log(mottoId, updatedMotto)

        const updateMotto = async(mottoId, updatedMotto) => {
            try{
                const res = await fetch('http://localhost:8000/api/motto/', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id: mottoId,
                        motto: updatedMotto
                    })
                })                
            }
            catch(error){
                console.log(`Во время обновления слогана произошла ошибка: ${error}`)
            }
        }
        updateMotto(mottoId, updatedMotto)
        console.log(updatedMotto)
    }

    return (
        <PageContent>
            <div>
                {motto.map ( (motto)=> (
                    <div key={motto._id}>
                        <p>Твой слоган выглядит так: <span className="font--bold">{motto.motto}</span>. 
                        <br></br> 
                        Если хочешь обновить слоган используй поле для ввода ниже
                        </p>
                        
                        <form onSubmit={ (e) => updateMottoHandler(e, motto._id)}>
                            <input
                                onChange={(e) => setUpdatedMotto(e.target.value)}
                                placeholder="Введи новый слоган"
                            />
                            <UpdateButtonComponent text='обновить слоган'/>
                        </form>
                    </div>
                ))}
            </div>
        </PageContent>
    )
}

export default Motto