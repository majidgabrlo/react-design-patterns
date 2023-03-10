// import SmallPersonListItem from "../people/SmallPersonListItem"

function RegularList<T,>({ itemContent: ItemContent, items, resourceName }: {
    items: T[]
    resourceName: string
    itemContent: (...args: any) => JSX.Element
}) {
    return (
        <>
            {items.map((item, i) => (
                <ItemContent {...{ [resourceName]: item }} />
            ))}
        </>
    )
}

// Usage
// {/* <RegularList<Sen> items={people} resourceName="person" itemContent={SmallPersonListItem} />  */}

export default RegularList