import React, { useState } from "react"
import rawdata from "./data"


    const RoomContext = React.createContext()

function RoomContextProvider({children}){

    const [data,setData] = useState(rawdata)

    function handleFilters(input){
        let temp;

        if(input.roomType == "all"){

            temp = rawdata
        }else{
       
            temp =rawdata.filter(obj => obj.fields.name.split(" ")[0] == input.roomType )
        }

         
        temp =temp.filter(obj => Number(obj.fields.capacity) >= Number(input.guests))


        temp = temp.filter(obj => Number(obj.fields.price) <= Number(input.price) )

        temp = temp.filter(obj => Number(obj.fields.size) >= Number(input.minSize))

        temp = temp.filter(obj => Number(obj.fields.size) <= Number(input.maxSize))

        if(input.bfchecked){

            temp = temp.filter(obj => obj.fields.breakfast)
        }
        if(input.petschecked){
            temp = temp.filter(obj => obj.fields.pets)  
        }

        setData(temp)
        

    }

    function handleHover(e){
        e.currentTarget.classList.add("dark-bg")
       e.currentTarget.children[0].style.display ="inline"
    }

    function handleHoverOut(e){
        e.currentTarget.classList.remove("dark-bg")
        e.currentTarget.children[0].style.display ="none"
    }




    return(
        <RoomContext.Provider value={{data,handleHover,handleHoverOut,handleFilters}}>  

            {children}
        </RoomContext.Provider>
    )
}

export  {RoomContext,RoomContextProvider}