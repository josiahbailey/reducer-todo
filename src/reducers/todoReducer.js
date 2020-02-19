export const initialState = {
    data: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'NEW_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                data: [...state.data, newTodo]
            }
        case 'TOGGLE_COMPLETED':
            const toggle_arr = [...state.data]
            toggle_arr.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
            })
            return {
                ...state,
                data: toggle_arr
            }
        case 'CLEAR_COMPLETED':
            const clear_arr = state.data.filter(todo => todo.completed === false)
            return {
                ...state,
                data: clear_arr
            }

        default:
            return state;
    }
}