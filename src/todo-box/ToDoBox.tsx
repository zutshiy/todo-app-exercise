import React, {useEffect, useState} from 'react';
import './ToDoBox.scss'
import EntryBox from '../entry-box/EntryBox';
import ListItemBox from '../list-item-box/ListItemBox';
import {ListItem} from '../models/ListItem';

const ToDoBox = () =>
{
    const [listItems, setListItems] = useState<ListItem[]>([]);

    const addToList = (newItem: string) =>
    {
        if (newItem && newItem !== '')
        {
            setListItems([...listItems, {value: newItem, completed: false}]);
        }
    }

    const updateItem = (index: number, newVal: string) =>
    {
        let newList = [...listItems];
        if(!newVal || newVal === '')
        {
            newList.splice(index, 1);
            setListItems(newList);
        }
        else if (newList[index].value !== newVal)
        {
            newList[index].value = newVal;
            setListItems(newList);
        }
    }

    const updateItemStatus = (index: number, isComplete: boolean) =>
    {
        const newList = [...listItems];
        newList[index].completed = isComplete;
        setListItems(newList);
    }

    const updateAllItemsStatus = (isComplete: boolean) =>
    {
        const newList = [...listItems];
        newList.forEach(item => item.completed = isComplete);
        setListItems(newList);
    }

    useEffect(() => console.log('List Items are: ', listItems));

    const createListItem = () =>
    {
        return listItems.map((item, index) =>
        {
            const updateValueAtIndex = (newVal: string) => updateItem(index, newVal);
            const updateStatusAtIndex = (newVal: boolean) => updateItemStatus(index, newVal);
            return (
                <ListItemBox key={index} listItem={item}
                             updateItem={updateValueAtIndex} updateItemStatus={updateStatusAtIndex}/>
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
