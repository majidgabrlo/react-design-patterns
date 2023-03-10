import axios from "axios"
import React, { ReactNode, useEffect, useState, ReactElement } from "react"


function UserLoader({ children, userId }: { children: ReactNode, userId: string }) {
    const [user, serUser] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`)
            serUser(response.data)
        })()
    }, [userId])



    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement<{ person: typeof user }>, { person: user })
                }

                return child
            })}
        </>
    )
}

export default UserLoader