import React, {useState, useEffect} from 'react';

const TodoCard = ({todo, toggleCompleted}) => {
    const { item, completed, id} = todo
    const [toggle, setToggle] = useState('card')
    
    const changeToggle = e => {
        toggleCompleted(id)
    }

    useEffect(() => {
        completed ? setToggle('card completed') : setToggle('card')
    }, [completed])

    const renderCard = () => {
        if (todo.item !== undefined && todo.item !== '') {
            return (
                <div onClick={changeToggle} className={toggle}>
                     <h2 className='todo-h2'>{item}</h2>
                </div>
            )
        }
    }

    return (  
        <>
            {renderCard()}
        </>
    );
}
 
export default TodoCard;

