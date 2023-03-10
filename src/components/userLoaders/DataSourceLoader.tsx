import React, { ReactNode, useEffect, useState, ReactElement } from "react"


function DataSourceLoader<T,>({ children, resourceName,getDataFunc }: { children: ReactNode, resourceName: string,getDataFunc:()=>Promise<T> | T }) {
    const [state, setState] = useState<null | T>(null)
    useEffect(() => {
        (async () => {
            const data = await getDataFunc()
            setState(data)
        })()
    }, [getDataFunc])



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

export default DataSourceLoader