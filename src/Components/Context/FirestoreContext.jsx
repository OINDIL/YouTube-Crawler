import { createContext, useContext, useEffect, useState } from "react";

const FireStoreContext = createContext()

export const useFirestore = () => useContext(FireStoreContext)

export function FirestoreProvider({ children }) {
    const [firestoreApiKey, setFirestoreApiKey] = useState([])


    const fetchApiKeys = async () => {
        const querySnapShot = await getDocs(collection(db, "apiKeys"))
        const data = []
        querySnapShot.forEach((docs) => {
            data.push({ id: docs.id, ...docs.data() })
        })
        setFirestoreApiKey(data)
    }

    const value = {
        firestoreApiKey,
        fetchApiKeys,
    }

    return (
        <FireStoreContext.Provider value={value} >
            {children}
        </FireStoreContext.Provider>
    )
}