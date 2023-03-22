import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


export function MemoryUpdate(props) {

    const URI_COLLECTION = "http://145.24.222.134:8000/"

    const params = useParams()

    const [memory, setMemories] = useState({
        title: "",
        memory: "",
        points: "",
        date: "",
        author: ""
    })

    const loadMemory = () => {
        fetch(URI_COLLECTION + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((result) => setMemories(result))
        .catch(error => console.log("ERROR" + error))
    }

    useEffect( () => {loadMemory()}, [])

    const onChangeHandler = (event) => {
        setMemories({
            ...memory,
            [event.target.name]: event.target.value
        })
    }

    const updateMemory = (event) => {
        event.preventDefault()
        fetch(URI_COLLECTION + params.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memory)
        })
        .then((response) => response.json())
        .then((result) => setMemories(result))
        .catch(error => console.log("ERROR" + error))
        .then((response) => props.memoriesRefreshHandler())
        console.log("UPDATE")
    }


   return <section>
       <h1>Hola</h1>

       <label>Title</label>
       <input type="text" name="title" value={memory && memory.title} onChange={onChangeHandler}/> 
      
       <label>Memory</label>
       <input type="text" name="memory" value={memory && memory.memory} onChange={onChangeHandler} />
      
       <label>points</label>
       <input type="text" name="points" value={memory && memory.points} onChange={onChangeHandler}/> 
      
       <label>Date</label>
       <input type="text" name="date" value={memory && memory.date} onChange={onChangeHandler} />
     
       <label>Author</label>
       <input type="text" name="author" value={memory && memory.author} onChange={onChangeHandler} />
  
        <button onClick={updateMemory}>Update Memory</button>
   </section>
  }