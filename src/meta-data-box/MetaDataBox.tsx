import React, {useState} from 'react';
import './MetaDataBox.scss';
import {ListItem} from '../models/ListItem';

const MetaDataBox = ({listItems, onBtnClick, onClearClick}: { listItems: ListItem[], onBtnClick: (filter: string) => void, onClearClick: () => void }) =>
{
    const filters = ['All', 'Active', 'Completed'];
    const [selectedFilter, setSelectedFilter] = useState<string>('All');
    const onButtonClick = (val: string) =>
    {
        setSelectedFilter(val);
        onBtnClick(val);
    }
    const leftItems = listItems.filter(item => !item.completed).length;
    const selectedClassName = (val: string) => (selectedFilter === val ? 'selected-button' : '');

    let isAnyCompleted = listItems.find(item => item.completed);
    return (
        <div className='input-container meta-data-box'>
            <span>{leftItems} items left</span>
            <div className='meta-buttons'>
                {
                    filters.map((filter, index) => (
                        <button key={index} className={selectedClassName(filter)} onClick={() => onButtonClick(filter)}>{filter}</button>))
                }
            </div>
            <a className={!isAnyCompleted ? 'hidden' : ''} href='#' onClick={onClearClick}>Clear Completed</a>
        </div>
    );
};

export default MetaDataBox;
