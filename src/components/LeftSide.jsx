import {useState} from 'react';
import '../styles/LeftSide.css'
import sections from '../section.js'

export default function LeftSide() {
    const [divList, setDivList] = useState(sections);
    console.log(divList);
    const root = divList[0];
    const containersList = root.childIds;
    return (
        <div className="left-side">
            {containersList.map(id => (
                <PopulateDiv
                    key={id}
                    id={id}
                    divList={divList}
                />
            ))}
        </div>
    )
}

function PopulateDiv({id, divList}) {
    const container = divList[id];
    const childList = container.childIds;
    return (
        <div className={container.name + '-input-container'}>
            {childList.map(childId => (
                <div className={divList[childId].name} key={divList[childId].id}>
                    <label>
                        {divList[childId].name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
                        <input
                        type={divList[childId].type}/>
                    </label>
                </div>
            ))}
        </div>
    )
}