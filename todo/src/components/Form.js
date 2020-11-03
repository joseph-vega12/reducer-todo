import React, { useReducer, useRef } from 'react';
import reducer from '../reducers';
import { initialState } from '../reducers';

function Form() {
    const [{ inputVal, todos }, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Enter Your Todo:</h1>
            <input type="text" value={inputVal} onChange={e => dispatch({ type: 'updateVal', payload: e.target })} />
            <button onClick={() => dispatch({ type: 'add' })}>Submit</button>
            {todos.map(item => 
                <li key={item.id}>{item.item}</li>
            )}
        </div>
    )
}

export default Form;