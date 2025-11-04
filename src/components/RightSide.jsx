import '../styles/RightSide.css'

export default function RightSide( {elementsList} ) {
    const root = elementsList[0];
    const containersIdList = root.childIds;

    return (
        <div className = 'right-side'>
            <h2>Your CV</h2>
            {containersIdList.map(id => (
                <PlaceTree
                key={id}
                id={id}
                elementById={elementsList} />
            ))}
        </div>
    )
};

function PlaceTree({ id, elementById}) {
    const containerName = elementById[id].name
    const childIds = elementById[id].childIds
    return (
            <div className = {containerName}>
                {childIds.map(childId => (
                    <div key={childId} className={elementById[childId].name}>
                        <p>{elementById[childId].name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') + ': ' + elementById[childId].innerText}</p>
                        <p></p>
                    </div>
                ))}
            </div>
        )
}