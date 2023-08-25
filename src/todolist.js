import React from "react";
import { useState } from "react";
import './todo.css'

export const Todo =()=>{

const [inputTodo,setinputTodo]=useState("");
const [todoArray,settodoArray] =useState([]);
const [filterTD,setFilterTD]=useState("")
const setInput =(event)=>{
    
    setinputTodo(event.target.value)
}


const updateTodo =()=>{
    if(inputTodo ==="" || inputTodo[0]===" ")alert("Please Enter your work");
    else{
        const inputObj ={
            id : todoArray.length+1,
            todoName :inputTodo,
            completed:false
        }

    settodoArray([...todoArray,inputObj])
    }
}

const deleteTodo =(id)=>{

    let UpdatedArray=todoArray.filter((task)=>{
       if(task.id===id)return false;
       return true;
    })
    
    settodoArray(UpdatedArray)
}

const filterInput =(event) =>{

   setFilterTD(event.target.value)
  

    
}
const btnfilter =()=>{
    let arr=todoArray.filter((task)=>{
        if(task.todoName===filterTD)return true;
        return false;
    })
    settodoArray(arr)
}

const markDone = (id)=>{
    
        let updatedArry = todoArray.map((task)=>{                    // id name completed.....
            if(task.id===id)return {...task,completed:true }
            return task;
        })
        settodoArray(updatedArry)
}
    return (
        < >
        <div className="main">
        <div className="main_todo">
            <div className="srch">
            <h1 className="h1_todo ">Todo List</h1>
            <div className="search--div">

            <input  onChange={filterInput} id="inpt1" placeholder="Search Your Work"/>
            <button onClick={btnfilter} id="fltrbtn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            </div>

            <div className="src1">
            <input  onChange={setInput} id="input" placeholder="Enter your Work"/>
            
            <button className="button-33" role="button" onClick={updateTodo}><i class="fa-solid fa-plus fa-lg"></i></button>
            </div>
            {todoArray.map((task)=>{
                return (
                    <div style={{backgroundColor: task.completed ? "rgb(33, 200, 33)" :"pink"}}  >
                    <h2 id="h3"> {task.id} {task.todoName}</h2>
                    <div className="edit--buttons">
                        

                    <button className="button-7" onClick={()=>{deleteTodo(task.id)}}><i class="fa-solid fa-trash-can"></i></button>
                    <button className="button-7 btn2 "    onClick={()=>markDone(task.id)}><i class="fa-sharp fa-solid fa-circle-check"></i></button>
                    
                    </div>
                    </div>
                )
            })}
</div>
</div>
        </>
    )


}