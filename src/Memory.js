import { useState } from "react";
import { Link } from "react-router-dom";

export function Memory(props) {
    console.log(props);

    const deleteMemory = () => {
        fetch(props.memory._links.self.href, {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then((response) => props.memoriesRefreshHandler())
    }

   return <section>

       <h2>{props.memory.title}</h2>
       <Link to={"memories/" + props.memory._id}>Read More...</Link>
       <Link to={"memories/" + props.memory._id + "/update"}>Update</Link>
        <button onClick={deleteMemory}>Delete</button>

   </section>
  }