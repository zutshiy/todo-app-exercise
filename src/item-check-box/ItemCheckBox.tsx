import React, {ChangeEvent} from 'react';

const ItemCheckBox = ({checked, onCheck}: {checked: boolean, onCheck: (e: ChangeEvent) => void}) =>
{
    return (
        <input type='checkbox' checked={checked} onChange={e => onCheck(e)}/>
    )
}

export default ItemCheckBox;
