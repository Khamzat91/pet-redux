

export function createStore (rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subscribe = []

    return {
        dispatch(action){
            state = rootReducer(state, action)
            subscribe.forEach(sub => sub())
        },
        subscribe(callback){
            subscribe.push(callback)
        },
        getState(){
            return state
        }
    }
}