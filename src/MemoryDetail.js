import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


export function MemoryDetail() {

    const URI_COLLECTION = "http://145.24.222.134:8000/"

    const params = useParams()

    const [memory, setMemories] = useState(null)

//Load JSON
function loadMemory() {
    fetch(URI_COLLECTION + params.id, {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    })
        .then((response) => response.json())
        .then((result) => setMemories(result))
        .catch(error => console.log("ERROR") + error)
}
useEffect( () => {loadMemory()}, [])

   return <section>
        <h1>{memory && memory.title}</h1>
        <p>{memory && memory.memory}</p>
        <p>{memory && memory.points}</p>
        <p>{memory && memory.date}</p>
        <p>{memory && memory.author}</p>
   </section>
  }