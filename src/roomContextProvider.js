import React, { useState } from "react"
import rawdata from "./data"


    const RoomContext = React.createContext()

function RoomContextProvider({children}){

    const [data,setData] = useState(rawdata)

 

    function handleHover(e){
        e.currentTarget.classList.add("dark-bg")
       e.currentTarget.children[0].style.display ="inline"
    }

    function handleHoverOut(e){
        e.currentTarget.classList.remove("dark-bg")
        e.currentTarget.children[0].style.display ="none"
    }




    return(
        <RoomContext.Provider value={{data,handleHover,handleHoverOut}}>  

            {children}
        </RoomContext.Provider>
    )
}

export  {RoomContext,RoomContextProvider}