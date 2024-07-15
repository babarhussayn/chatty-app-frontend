import  io  from "socket.io-client";
import { createContext,useMemo,useContext } from "react";



const SocketContext = createContext();

const getSocket=()=> useContext(SocketContext)


const SocketProvider=({children})=>{
    const socket =useMemo(()=> io('http://localhost:3001',{withCredentials:true}),[])

 return(

    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
 )

}

export {SocketProvider,getSocket}