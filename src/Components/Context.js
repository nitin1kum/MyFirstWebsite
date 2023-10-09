import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "./Reducer"
const AppContext = React.createContext()
const InitialState = {
    name: "",
    image: "",
    scope: "",
    sources: []
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState)

    const getSources = async () => {
        try {
            const res = await axios.get("https://picsum.photos/v2/list")
            dispatch({
                type: "SERVICES_PAGE",
                payload: {
                    sources: res.data
                }
            })

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getSources()
    }, [])

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_PAGE",
            payload: {
                name: "Nitin kumar",
                image: "https://c8.alamy.com/comp/2JJYK60/happy-confident-indian-or-arabian-male-student-of-university-in-stylish-casual-wear-with-backpack-and-laptop-stands-in-a-library-against-the-background-of-bookshelves-looks-to-the-camera-smiles-2JJYK60.jpg",
                scope: "a Student"
            }
        })
    }

    const updateAboutPage = () => {
        return dispatch({
            type: "ABOUT-SECTION1",
            payload: {
                name: "Nitin kumar",
                image: "https://www.northcentralcollege.edu/sites/default/files/styles/full_image_large/public/2019-02/engineering-student-liberal-arts-college.jpg?h=2013c5d2&itok=B9JfrfZb",
                scope: "an Engineer"
            }
        })
    }
    const updateContactPage = () => {
        return dispatch({
            type: "CONTACT-SECTION1",
            payload: {
                name: "Nitin ",
                image: "https://www.northcentralcollege.edu/sites/default/files/styles/full_image_large/public/2019-02/engineering-student-liberal-arts-college.jpg?h=2013c5d2&itok=B9JfrfZb",
                scope: "an LIST"
            }
        })
    }


    return <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage, updateContactPage,getSources }}>
        {children}
    </AppContext.Provider>

}
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };