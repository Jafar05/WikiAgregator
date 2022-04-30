import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/action/todoAction";
import {Button, Input, Toolbar} from "@mui/material";

const Todo = () => {

    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

    useEffect(() => {
        dispatch(addTodo)
    })
    return (
        <Toolbar>
            <header>
                <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
                    <div className="mb-3">
                        <Input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            className="form-control mt-5"
                            id="exampleInputItem1"
                        />
                    </div>
                    <Button type="submit" className="btn btn-primary">Добавить</Button>
                </form>
            </header>

            <ul className="list-group">
                {todo.map((todo,index) => {
                    return(  <ul>
                        <h2 key={todo.id}>{index}</h2>
                        {/*<Link to={`/onetodo/${todo.id}`}>*/}
                        <div key={todo.id}>
                            <h1>{todo.text}</h1></div>
                        {/*</Link>*/}
                        {/*<button onClick={() => remove(todo.id)} type="button" className="btn btn-danger">Danger</button>                   <button onClick={() => remove(todo.id)} type="button" className="btn btn-danger">Danger</button>*/}
                        {/*<button onClick={() => change(todo.id, todo.title)} type="button" className="btn btn-info">Redactirovanie</button>*/}
                    </ul> )
                })}
            </ul>
        </Toolbar>
    );
};

export default Todo;
