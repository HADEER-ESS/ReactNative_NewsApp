import React, { createContext, useState } from "react";

export const searchContext  = createContext()

export const SearchProvider = ({children}) => {
    const [SearchInput , setSearchInput] = useState(null)
    return(
        <searchContext.Provider value={{SearchInput , setSearchInput}}>
            {children}
        </searchContext.Provider>
    )
}