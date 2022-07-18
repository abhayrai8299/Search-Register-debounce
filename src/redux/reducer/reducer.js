const initialState={
    carts:[],
};
export const cartreducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case "Add_To_Cart":
            const temp={...action.payload}
            if(1)
            {

            }
            else
            {
            return {
            
            ...state,
            carts:[...state.carts,temp]
           
            }
        }

            // eslint-disable-next-line no-fallthrough
            case "REMOVE_CART":
              const data=state.carts.filter((el)=>el.id!==action.payload)
             return {
              ...state,
              carts:data
             }
          
              case "REMOVE_IND":
                const itemIndex_dec=state.carts.findIndex((item)=>item.id===action.payload.id)
                if(state.carts[itemIndex_dec].qnty>=1)
                { 
                     state.carts[itemIndex_dec].qnty-=1;
                     return {
                      ...state,carts:[...state.carts]
                     }
                }
            default: return state;
    }
    
}
