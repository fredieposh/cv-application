import { useState } from 'react'
import '../styles/RightSide.css'
import sections from '../section'

export default function RightSide() {
    const [divList, setDivList] = useState(sections);
    const root = divList[0];
    const containersIdList = root.childIds;

    return (
        <div className = 'right-side'>
            <h2>Your CV</h2>
            {containersIdList.map(id => (
                <PlaceTree
                key={id}
                id={id}
                elementById={divList} />
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
                        <p>{elementById[childId].name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') + ': '}</p>
                        <p></p>
                    </div>
                ))}
            </div>
        )
}