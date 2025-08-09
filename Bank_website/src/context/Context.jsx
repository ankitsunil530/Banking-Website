import { createContext, useState } from "react";

export const FormData=createContext();


export const FormDataProvider=({children})=>{
    const [formData,setFormData]=useState({})

    return(
        <FormData.Provider value={{formData,setFormData}}>
            {children}
        </FormData.Provider>
    )
}