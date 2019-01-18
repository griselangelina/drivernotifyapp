const initialState={
    show: false,
    id:'',
    message:''
}

const Counter = (state = {...initialState},action) =>{ /* initialstate nila default */
    switch (action.type){
        case 'SHOW_MODAL':
            return{
                ...state,
                show:true,
                id:action.payload
            }

        case 'CLOSE_MODAL':
            return{
                ...state,
                show:false,
                id:'',
                message:''
            }
        case 'SEND_MODAL':
            return{
                ...state,
                show:false,
                message:action.payload
            }
        default:
        return state
    }
}

export default Counter;