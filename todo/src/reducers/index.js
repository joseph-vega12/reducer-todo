export const initialState = {
    inputVal: '', todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }]
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                inputVal: '',
                todos: [
                    ...state.todos,
                    {
                        item: state.inputVal,
                        completed: false,
                        id: Date.now(),
                    }
                ]
            }
        case 'updateVal':
            return { ...state, inputVal: action.payload.value }
        default:
            return state
    }
}

export default reducer;
