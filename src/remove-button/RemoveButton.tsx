import React from 'react';
import './RemoveButton.scss'

const RemoveButton = ({onBtnClick}: { onBtnClick: () => void }) =>
{
    return (
        <button className='remove-button' onClick={onBtnClick}>
            <i className='fa fa-times-circle'/>
        </button>
    )
}

export default RemoveButton;
