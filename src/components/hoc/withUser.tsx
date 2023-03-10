import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import SmallPersonListItem from "../people/SmallPersonListItem";

const withUser = <P extends {}>(
    component: {
        (props: P): ReactNode;
    }, 
    userId: number
): {
    (props: P): JSX.Element;
} => {
    return (props: P) => {
        const [user, setUser] = useState({})
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`)
                setUser(response.data)
            })()
        }, [])
        
        return component({...props,person:{...user}}) as JSX.Element;
    }
};

// Example
const UserInfoWrapped = withUser(SmallPersonListItem,2)

function App() {
  return <UserInfoWrapped />
}

export default withUser




