import React from 'react';
import './EntryInput.scss';

const EntryInput = ({userInput, onAction, onEnter}: { userInput: string, onAction: (val: string) => void, onEnter: () => void }) =>
{
    return (
        <input className='input-item list-item-input' type='text' value={userInput} onChange={e => onAction(e.target.value)}
               onKeyPress={e => handleKeyPress(e, onEnter)}/>
    )
}

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, onEnter: () => void) =>
{
    if (e.key === 'Enter')
    {
        onEnter();
    }
}


export default EntryInput;
