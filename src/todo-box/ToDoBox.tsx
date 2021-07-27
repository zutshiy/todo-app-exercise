import React, {useEffect, useState} from 'react';
import './ToDoBox.scss'
import EntryBox from '../entry-box/EntryBox';
import ListItemBox from '../list-item-box/ListItemBox';
import {ListItem} from '../models/ListItem';
import {addItemToList, removeItemFromList, updateAllItemsStatusInList, updateItemValueInList, updateItemStatusInList} from '../ListService';

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

    const createListItem = () =>
    {
        return listItems.map((item, index) =>
        {
            const updateValueAtIndex = (newVal: string) => updateItemValue(index, newVal);
            const updateStatusAtIndex = (newVal: boolean) => updateItemStatus(index, newVal);
            const removeItemAtIndex = () => removeItem(index);
            return (
                <ListItemBox key={index} listItem={item}
                             updateItem={updateValueAtIndex} updateItemStatus={updateStatusAtIndex} removeItem={removeItemAtIndex}/>
            )
        });
    }

    return (
        <div>
            <h1>todos</h1>
            <div className='todo-box'>
                <EntryBox isEmpty={listItems.length === 0} onItemEnter={addToList} onSelectAll={updateAllItemsStatus}/>
                {createListItem()}
            </div>
        </div>
    )
}

export default ToDoBox;
