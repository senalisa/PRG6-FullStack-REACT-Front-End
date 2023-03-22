import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Layout } from "./Layout"
import { Memory } from "./Memory";
import { NewMemory } from "./NewMemory";
import { Error } from "./Error";
import { MemoryDetail } from "./MemoryDetail";
import { MemoryUpdate } from "./MemoryUpdate";

const URI_COLLECTION = "http://145.24.222.134:8000/"

export function App() {
    const [memories, setMemories] = useState([]);

    //Load JSON
    const loadMemories = () => {
        fetch(URI_COLLECTION, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setMemories(result.items))
            .catch(error => console.log("ERROR") + error)
    }

    const showMemories = memories.map((value, key) => 
                            <Memory key={value.id} memory={value} memoriesRefreshHandler = {loadMemories}/>)


    useEffect( () => {loadMemories()}, [])

    return <BrowserRouter>

        <Routes>

            <Route path='/' element={<Layout />}>
                <Route index element={showMemories}></Route>
                <Route path="create" element={<NewMemory memoriesRefreshHandler = {loadMemories}/>}> </Route>
                <Route path="memories/:id" element={<MemoryDetail />}></Route>
                <Route path="memories/:id/update" element={<MemoryUpdate memoriesRefreshHandler = {loadMemories}/>}></Route>
                <Route path="*" element={<Error />}></Route>
            </Route>
            {/* {showMemories}
            <NewMemory memoriesRefreshHandler = {loadMemories}/> */}

        </Routes>

        </BrowserRouter>
  }