import React, {useState, useEffect} from 'react';

const TodoCard = ({todo, toggleCompleted}) => {
    const { item, completed, id} = todo
    const [toggle, setToggle] = useState('')
    
    const changeToggle = e => {
        toggleCompleted(id)
    }

    useEffect(() => {
        completed ? setToggle('completed') : setToggle('')
    }, [completed])

    return (  
        <div onClick={changeToggle} className={toggle}>
            {item}
        </div>
    );
}
 
export default TodoCard;

