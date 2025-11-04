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
            <h2>Edit your Details here</h2>
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
            <h3>{divList[id].name[0].toUpperCase() +  divList[id].name.slice(1) + ' Info'}</h3>
            {childList.map(childId => (
                <div 
                className={divList[childId].name} 
                key={divList[childId].id}
                style={{display:'flex', flexDirection:'column', width:'40%',}}>
                    <label htmlFor={divList[childId].name+'-input'}>
                        {divList[childId].name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') + ':'}
                    </label>
                        <input
                        type={divList[childId].type}
                        id={divList[childId].name+'-input'}/>
                </div>
            ))}
        </div>
    )
}