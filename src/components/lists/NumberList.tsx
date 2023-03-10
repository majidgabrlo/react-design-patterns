// import SmallPersonListItem from "../people/SmallPersonListItem"

function NumberedList<T,>({ itemContent: ItemContent, items, resourceName }: {
    items: T[]
    resourceName: string
    itemContent: (...args: any) => JSX.Element
}) {
    return (
        <>
            {items.map((item, i) => (
                <>
                    <h4>{i + 1}</h4>
                    <ItemContent {...{ [resourceName]: item }} />
                </>
            ))}
        </>
    )
}

// Usage
// {/* <RegularList<Sen> items={people} resourceName="person" itemContent={SmallPersonListItem} />  */}

export default NumberedList