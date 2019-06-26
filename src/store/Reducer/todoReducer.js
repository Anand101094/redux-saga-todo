const todoReducer = (state={},action) => {
    switch(action.type){
        case 'ADD_TODO':
            console.log('added')
            break

        case 'DELETE_TODO':
            console.log('deleted')
            break

        case 'MARK_COMPLETE_TODO':
            console.log('completed')
            break

        default:
            return state
    }
}

export default todoReducer