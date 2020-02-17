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
                todo: newTodo,
                data: [...state.data, newTodo]
            }
        case 'TOGGLE_COMPLETED':
            const arr = [...state.data]
            arr.forEach(todo => {
                if (todo.id === action.payload) {
                    console.log(todo)
                    todo.completed = !todo.completed
                } 
            })
            return {
                ...state,
                data: arr
            }

        default: 
            return state;
    }
}