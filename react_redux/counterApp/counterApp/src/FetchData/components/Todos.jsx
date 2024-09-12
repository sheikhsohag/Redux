import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodods } from '../action/TodoAction';

export default function Todos() {
const {isLoading, todos, error} = useSelector((state) => state);
    
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllTodods())
    },[])

    

    return (
        <div>
            <h1>React Redux Tutorial</h1>
            <h3>Todos</h3>
            {isLoading && <p>Loading .... </p>}
            {error && <h3>{error.message}</h3>}
            <section>
                {
                    todos&&todos.map((todo)=>{
                        return <article key={todo.id}><h4>{todo.title}</h4></article>
                    })
                }
            </section>
        </div>
    );
}
