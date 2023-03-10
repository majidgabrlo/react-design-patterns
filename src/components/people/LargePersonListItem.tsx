function LargePersonListItem({ person }: { person?: { age: number, name: string, hairColor: string, hobbies: string[] } }) {
    if (!person) return <div>Loading</div>
    const { age, name, hairColor, hobbies } = person
    return (
        <div>
            <div>Name {name}</div>
            <div>Age {age}</div>
            <div>Hair Color {hairColor}</div>
            <div>Hobbies:</div>
            <ul>
                {hobbies.map(hobbie => <li>{hobbie}</li>)}
            </ul>
        </div>
    )
}

export default LargePersonListItem