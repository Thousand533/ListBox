import {useState} from "react";
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Create from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function TodoForm({addTodo}){
    const [text, setText] = useState("");
    const handleChange = (e) =>{
        setText(e.target.value);
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        addTodo(text);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <ListItem>
                <TextField 
                id="outlined-basic" 
                label="Text New Todo List" 
                variant="outlined" 
                onChange={handleChange} 
                value={text}
                slotProps={{
                    input:{
                        endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="create todo" edge="end" onClick={handleSubmit}>
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    },
                }}
                />
            </ListItem>
        </form>
    )
}

export default TodoForm;

{/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /> */}

