import axios from "axios"
import React, { ReactNode, useEffect, useState ,ReactElement} from "react"


function CurrentUserLoader({ children }: { children: ReactNode }) {
    const [user, serUser] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await axios.get('/current-user')
            serUser(response.data)
        })()
    }, [])



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

export default CurrentUserLoader