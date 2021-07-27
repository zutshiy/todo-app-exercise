import React from 'react';
import './RemoveButton.scss'

const RemoveButton = ({onBtnClick, hovered}: { onBtnClick: () => void, hovered: boolean }) =>
{
    let className = 'remove-button';
    className += !hovered ? ' hidden' : '';
    return (
        <button className={className} onClick={onBtnClick}>
            <i className='fa fa-times-circle'/>
        </button>
    )
}

export default RemoveButton;
