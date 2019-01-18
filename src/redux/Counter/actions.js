export const showModal = (payload) =>{
    return{
        type:'SHOW_MODAL',
        payload
    }
}


export const closeModal = () =>{
    return{
        type:'CLOSE_MODAL'
        
    }
}

export const sendModal = (payload) =>{
    return{
        type:'SEND_MODAL',
        payload
        
    }
}