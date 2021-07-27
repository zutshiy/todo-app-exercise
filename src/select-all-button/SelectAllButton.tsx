import React from 'react';
import './SelectAllButton.scss'

const SelectAllButton = ({isToShow, isAllComplete, onBtnClick}: { isToShow: boolean, isAllComplete: boolean, onBtnClick: () => void }) =>
{
    let className = 'select-all-button';
    className += !isToShow ? ' hidden' : '';
    className += isAllComplete ? ' clicked' : '';

    return (
        <button className={className} onClick={onBtnClick}>
            <i className='fa fa-chevron-down'/>
        </button>
    )
}

export default SelectAllButton;
