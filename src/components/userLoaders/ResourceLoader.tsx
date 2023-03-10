import axios from "axios"
import React, { ReactNode, useEffect, useState, ReactElement } from "react"


function ResourceLoader({ children, resourceUrl, resourceName }: { children: ReactNode, resourceUrl: string, resourceName: string }) {
    const [state, setState] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            setState(response.data)
        })()
    }, [resourceUrl])



    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement<{ [resourceName: string]: typeof state }>, { [resourceName]: state })
                }

                return child
            })}
        </>
    )
}

export default ResourceLoader