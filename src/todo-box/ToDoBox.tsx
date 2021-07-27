import React, {useEffect, useState} from 'react';
import './ToDoBox.scss'
import EntryBox from '../entry-box/EntryBox';
import ListItemBox from '../list-item-box/ListItemBox';
import {ListItem} from '../models/ListItem';
import {
    addItemToList,
    removeItemFromList,
    updateAllItemsStatusInList,
    updateItemValueInList,
    updateItemStatusInList,
    clearCompletedFromList, hideFilteredItemsFromList
} from '../ListService';
import MetaDataBox from '../meta-data-box/MetaDataBox';

const ToDoBox = () =>
{
    const [listItems, setListItems] = useState<ListItem[]>([]);
    const updateState = (listItems: ListItem[] | null) => (listItems && setListItems(listItems));
    useEffect(() => console.log('List Items are: ', listItems));

    const addToList = (newItem: string) => updateState(addItemToList(listItems, newItem));
    const updateItemValue = (index: number, newVal: string) => updateState(updateItemValueInList(listItems, index, newVal));
    const updateItemStatus = (index: number, isComplete: boolean) => updateState(updateItemStatusInList(listItems, index, isComplete));
    const updateAllItemsStatus = (isComplete: boolean) => updateState(updateAllItemsStatusInList(listItems, isComplete));
    const removeItem = (index: number) => updateState(removeItemFromList(listItems, index));
    const hideFilteredItems = (filter: string) => (updateState(hideFilteredItemsFromList(listItems, filter)));
    const clearCompleted = () => updateState(clearCompletedFromList(listItems));

    const createListItem = () =>
    {
        return listItems.map((item, index) =>
        {
            const updateValueAtIndex = (newVal: string) => updateItemValue(index, newVal);
            const updateStatusAtIndex = (newVal: boolean) => updateItemStatus(index, newVal);
            const removeItemAtIndex = () => removeItem(index);
            return (
                <ul>
                    <li><ListItemBox key={index} listItem={item}
                                     updateItem={updateValueAtIndex} updateItemStatus={updateStatusAtIndex} removeItem={removeItemAtIndex}/></li>
                </ul>
            )
        });
    }

    return (
        <div>
            <h1>todos</h1>
            <div className='todo-box'>
                <EntryBox isEmpty={listItems.length === 0} onItemEnter={addToList} onSelectAll={updateAllItemsStatus}/>
                {createListItem()}
                {listItems.length !== 0 && <MetaDataBox listItems={listItems} onBtnClick={hideFilteredItems} onClearClick={clearCompleted}/>}
            </div>
        </div>
    )
}

export default ToDoBox;
