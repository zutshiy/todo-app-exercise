import {ListItem} from './models/ListItem';

export const addItemToList = (listItems: ListItem[], newItem: string): ListItem[] | null =>
{
    if (newItem && newItem !== '')
    {
        return [...listItems, {value: newItem, completed: false}];
    }
    return null;
}

export const updateItemValueInList = (listItems: ListItem[], index: number, newVal: string): ListItem[] | null =>
{
    let newList = [...listItems];
    if (newList[index].value !== newVal)
    {
        newList[index].value = newVal;
        return newList;
    }

    return null;
}

export const updateItemStatusInList = (listItems: ListItem[], index: number, isComplete: boolean): ListItem[] =>
{
    const newList = [...listItems];
    newList[index].completed = isComplete;
    return newList;
}

export const updateAllItemsStatusInList = (listItems: ListItem[], isComplete: boolean): ListItem[] =>
{
    const newList = [...listItems];
    newList.forEach(item => item.completed = isComplete);
    return newList;
}

export const removeItemFromList = (listItems: ListItem[], index: number): ListItem[] =>
{
    let newList = listItems.filter(item => listItems.indexOf(item) !== index);
    console.log("RemovedList: ", newList);
    // return [{value: 'newItem', completed: false}];
    return newList;
}
