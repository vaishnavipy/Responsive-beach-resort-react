import React from "react"


    const RoomContext = React.createContext()

function RoomContextProvider({children}){

    return(
        <RoomContext.Provider value="">  

            {children}
        </RoomContext.Provider>
    )
}

export  {RoomContext,RoomContextProvider}