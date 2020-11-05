export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO'; 

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ?
                    {
                        ...todo,
                        completed: !todo.completed,
                    }
                    : todo)
        case REMOVE_TODO:
            return state.filter(todo => todo.completed === false)
        default:
            return (state)
    }
}

export default reducer;

// export const initialState = {
//     inputVal: '', todos: [{
//         item: 'Learn about reducers',
//         completed: false,
//         id: 3892987589
//     }]
// }
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'add':
//             return {
//                 ...state,
//                 inputVal: '',
//                 todos: [
//                     ...state.todos,
//                     {
//                         item: state.inputVal,
//                         completed: false,
//                         id: Date.now(),
//                     }
//                 ]
//             }
//         case 'updateVal':
//             return { ...state, inputVal: action.payload.value }
//         default:
//             return state
//     }
// }

// export default reducer;
