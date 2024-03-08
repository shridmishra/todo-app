import { useState } from "react"
import axios from 'axios';

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

        
    return <div>
        <input style={{ padding:10,margin: 10}} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value)
            }}/> <br />
        <input style={{ padding:10,margin: 10}} type="text" placeholder="description" onChange={function(e){
             const value = e.target.value;
             setDescription(value)
        }}/> <br />

        <button style={{ padding:10,margin: 10}} onClick={()=>{


        axios.post("http://localhost:3000/todo",{ title: title,
              description:description})
              .then(response => {
                console.log('Response:', response.data);
                alert("Todo added");
                // Optionally, you can do something with the response here if needed
              })
              .catch(error => {
                console.error('Error adding todo:', error);
                alert("Error adding todo");
              });
            
        }}>Add a Todo</button>
    </div>
}