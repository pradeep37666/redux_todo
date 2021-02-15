
const initialState ={
    data:[]
}

export const todos = (state=initialState ,action) =>{
     switch(action.type)
    {
        case 'ADD_TODO':
            return{
                ...state,
                data:[...state.data,action.message]
            }
        case 'DELETE_TODO':
            return{
                ...state,
                data:[...state.data.filter( c=> c.id!==action.id)]
            }
        case 'UPDATE_TODO':
            return{
                ...state,
                data:[...state.data.filter( c=> c.id!==action.id),
                     {task:action.message,id:action.id}
                    ],
               
            }  
        default:return state      
    }
   

}