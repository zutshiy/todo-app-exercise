import React from 'react';
import OnOutsiceClick from 'react-outclick';
import './ListItemInput.scss';


const ListItemInput = ({itemValue, checked, editable, onChange, onEdit}: {
    itemValue: string, checked: boolean, editable: boolean,
    onChange: (newVal: string) => void,
    onEdit: (isStart: boolean, newVal?: string ) => void
}) =>
{
    let className = 'input-item list-item-input';
    className += checked ? ' checked' : '';
    className += editable ? ' editable' : '';

    return (
        <div className='list-item-input-container'>
            <OnOutsiceClick onOutsideClick={() => onEdit(false)} display={'contents'}>
                <input value={itemValue} readOnly={!editable} className={className} type='text'
                       onChange={(e) => onChange(e.currentTarget.value)}
                       onDoubleClick={() => onEdit(true)}
                       onKeyPress={(e) => handleKeyPress(e, onEdit)}/>
            </OnOutsiceClick>
        </div>
    )
}

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, onEnter: (isStart: boolean, newVal?: string) => void) =>
{
    if (e.key === 'Enter')
    {
        onEnter(false, e.currentTarget.value);
    }
}

export default ListItemInput;