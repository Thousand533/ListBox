// import * as React from 'react';
import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const getInitialData =()=>{
    const data = JSON.parse(localStorage.getItem("todos"))
    if(!data){
        return [];
    }else{
        return data;
    }
}  

function TodoList(){
    const [todos, setTodos] = useState(getInitialData);     
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) =>{
        setTodos(preTodos =>{
            return preTodos.filter(t => t.id !== id);
        })
    }
    const toggleTodo = (id) =>{
        setTodos(preTodos =>{
            return preTodos.map((todo) => {
                    if(todo.id ===id) {
                        return {...todo, completed: !todo.completed}
                    }else{
                        return todo;
                    }
            })
        })
    }
    const addTodo = (text) =>{
        setTodos(preTodos =>{
            return [...preTodos, {text: text, id: crypto.randomUUID(), completed: false}]
        })
    }
    return (
        <Box 
            sx={{
                display:"flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center", 
                m: 3, 
            }}
        >
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            Todo List
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo)=>{
                    return <TodoListItem key={todo.id} todo={todo} remove={removeTodo} toggle={()=>{toggleTodo(todo.id)}}/>
                })}
                <TodoForm addTodo={addTodo}/>
            </List>
        </Box>
    
    );
}

export default TodoList;

