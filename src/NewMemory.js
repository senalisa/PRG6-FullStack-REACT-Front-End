import { useState } from "react";

const URI_COLLECTION = "http://145.24.222.134:8000/"

export function NewMemory(props) {
    console.log(props);

    const [memory, setMemory] = useState({
        title: "",
        memory: "",
        points: "",
        date: "",
        author: ""
    })

    const saveMemory = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(memory)
        })
            .then((response) => props.memoriesRefreshHandler())
    }

    const onChangeHandler = (event) => {
        setMemory({
            ...memory,
            [event.target.name]: event.target.value
        })
    }

   return <section>

       <h2>New Note</h2>
       <form>
        <input type="text" value={memory.title} name="title" onChange={onChangeHandler}/><br></br>
        <input type="text" value={memory.memory} name="memory" onChange={onChangeHandler}/><br></br>
        <input type="text" value={memory.points} name="points" onChange={onChangeHandler}/><br></br>
        <input type="text" value={memory.date} name="date" onChange={onChangeHandler}/><br></br>
        <input type="text" value={memory.author} name="author" onChange={onChangeHandler}/><br></br>

       <button onClick={saveMemory}>Save</button>
       </form>

   </section>
  }