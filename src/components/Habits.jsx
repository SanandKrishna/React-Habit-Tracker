import React from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

const Habits = ({
    habits,OnIncrement,OnDecrement,
    OnDelete,OnAdd,OnReset,

}) => {
    return (
        <div>
            <HabitAddForm onAdd={OnAdd} />
            <ul className= "habits">
                {habits.map((habit)=>(
                    <Habit
                    key={habit.id}
                    habit={habit}
                    OnIncrement={OnIncrement}
                    onDecrement={OnDecrement}
                    OnDelete={OnDelete} 
                    />
                ))}
            </ul>
            <button className="habit-reset" onClick={OnReset}>
            Reset All
            </button>
        </div>

    );
};

export default Habits;
