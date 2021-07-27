import React, {ChangeEvent, useState} from 'react';
import ItemCheckBox from '../item-check-box/ItemCheckBox';
import ListItemInput from '../list-item-input/ListItemInput';
import {ListItem} from '../models/ListItem';

const ListItemBox = ({listItem, updateItem, updateItemStatus}: {
    listItem: ListItem, updateItem: (newVal: string) => void,
    updateItemStatus: (isCompleted: boolean) => void
}) =>
{
    const [item, setItem] = useState<string>(listItem.value);
    const [editable, setEditable] = useState<boolean>(false);

    const updateItemVal = (newVal: string) =>
    {
        setItem(newVal);
    }

    const onEdit = (isStart: boolean) =>
    {
        if (isStart)
        {
            setEditable(true);
        }
        else if(editable)
        {
            updateItem(item);
            setEditable(false);
        }
    }

    const onCheck = (e: ChangeEvent) =>
    {
        let target = e.target as HTMLInputElement;
        updateItemStatus(target.checked);
    }

    return (
        <div className='input-container'>
            <ItemCheckBox checked={listItem.completed} onCheck={onCheck}/>
            <ListItemInput itemValue={item} checked={listItem.completed} onAction={updateItemVal} editable={editable} onEdit={onEdit}/>
            <ItemCheckBox checked={listItem.completed} onCheck={onCheck}/>
        </div>
    )
}

export default ListItemBox;
