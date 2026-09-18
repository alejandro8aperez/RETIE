import React, { createContext, useContext, useMemo } from "react"

// avoid clash with @radix-ui/react-dialog's DialogOpenContext in duplicated trees
const DialogContext = createContext({})
DialogContext.displayName = "DialogContextClub"

function DialogProvider({ children }) {
  const value = useMemo(() => ({}), [])
  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
}

function useDialog() {
  return useContext(DialogContext)
}

export { DialogProvider, useDialog }