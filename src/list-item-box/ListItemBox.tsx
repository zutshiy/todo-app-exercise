import React, {ChangeEvent, useState} from 'react';
import ItemCheckBox from '../item-check-box/ItemCheckBox';
import ListItemInput from '../list-item-input/ListItemInput';
import {ListItem} from '../models/ListItem';
import RemoveButton from '../remove-button/RemoveButton';

const ListItemBox = ({listItem, updateItem, updateItemStatus, removeItem}: {
    listItem: ListItem, updateItem: (newVal: string) => void,
    updateItemStatus: (isCompleted: boolean) => void,
    removeItem: () => void
}) =>
{
    const [editable, setEditable] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const onEdit = (isStart: boolean, newVal?: string) =>
    {
        if (isStart)
        {
            setEditable(true);
        }
        else
        {
            if (newVal?.trimEnd() === '')
            {
                removeItem();
            }
            setEditable(false);
        }
    };

    const updateItemVal = (newVal: string) => (updateItem(newVal));
    const onCheck = (e: ChangeEvent) => (updateItemStatus((e.target as HTMLInputElement).checked));

    return (
        <div className={'input-container' + (listItem.hide ? ' hidden-remove' : '')} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <ItemCheckBox checked={listItem.completed} onCheck={onCheck}/>
            <ListItemInput itemValue={listItem.value} checked={listItem.completed} onChange={updateItemVal} editable={editable} onEdit={onEdit}/>
            <RemoveButton hovered={hovered} onBtnClick={removeItem}/>
        </div>
    )
}

export default ListItemBox;
