import React, { useReducer, useState } from 'react';
import action from '../actions/index';
import reducer, { ADD_TODO } from '../reducers/index';
import { initialState } from '../reducers';

function Form() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState('');

    const handleChanges = (e) => {
        setInputValue(e.target.value);
    }

    const addDispatch = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: inputValue })
        setInputValue('')
    }

    return (
        <div>
            <h1>Todo List:</h1>
            <form>
                <input type="text" onChange={handleChanges} name="todo" value={inputValue} />
                <button onClick={addDispatch}>Submit</button>
            </form>
            {state.map(item =>
                <li onClick={() => {dispatch({ type: "TOGGLE_TODO", payload: item.id })}}key={item.id}>{item.item}</li>
                // <li key={item.id}>{ item.item }</li>
            )
            }
        </div >
    );
}

export default Form;