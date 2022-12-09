import { useReducer } from "react";
import MessageContext from "../context/MessageContext"
import { initialMessage, messReducer } from "../reducer/MessageReducer";


// create message provider
const MessProvider = ({children}) => {

    // create reducer
    const [msg, dispatch] = useReducer(messReducer, initialMessage)
    return(
        <MessageContext.Provider value={{msg, dispatch}}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessProvider;