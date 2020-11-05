import reducer, { ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from '../reducers/index';

const addTodo = (todo) => {
    return({type: ADD_TODO, payload: todo});
}

const toggle = (id) => {
    return({type: TOGGLE_TODO, payload: id})
}

const remove = (id) => {
    return({type: REMOVE_TODO, payload: id})
}

export default {
    addTodo:addTodo,
    toggle:toggle,
    remove:remove,
}