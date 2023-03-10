function SmallPersonListItem({ person }: { person?: { age: number, name: string } }) {
    if (!person) return <div>loading</div>
    const { age, name } = person

    return (
        <div>Name: {name}, Age: {age}</div>
    )
}

export default SmallPersonListItem