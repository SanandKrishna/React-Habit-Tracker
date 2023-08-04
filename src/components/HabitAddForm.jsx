import React, { memo } from 'react';

const HabitAddForm = memo((props)=>{
    const inputRef = React.createRef();

    const handleAdd = (event) =>{
        event.preventDEfault();
        const name = inputRef.current.value;
        name && props.OnAdd(name);
        inputRef.current.Value = '';

    };
    return(
        <form className = "add-form" onSubmit={handleAdd}>
        <input 
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
        />


    <button className="add-button" type="Submit">
    Add
    </button>
    </form>
);
});

export default HabitAddForm;