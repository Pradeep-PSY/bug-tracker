import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export const RequiredAuth = ({ children }) => {
    const {isAuth} = useSelector((state) => state.app)
   
    
    if(isAuth ){
        return children
    }
    return <Navigate  to="/login" /> 
}

