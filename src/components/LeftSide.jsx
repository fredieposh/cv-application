import '../styles/LeftSide.css'

export default function LeftSide( {elementsList, handleChange} ) {

    const root = elementsList[0];
    const containersList = root.childIds;
    return (
        <div className="left-side">
            <h2>Edit your Details here</h2>
            {containersList.map(id => (
                <PopulateDiv
                    key={id}
                    id={id}
                    divList={elementsList}
                    handleChange = {handleChange}
                />
            ))}
        </div>
    )
}

function PopulateDiv({ id, divList, handleChange }) {
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
                        id={divList[childId].name+'-input'}
                        value={divList[childId].innerText}
                        onChange={(e) => handleChange(childId ,e)}/>
                </div>
            ))}
        </div>
    )
}