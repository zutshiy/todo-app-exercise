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
    return listItems.filter(item => listItems.indexOf(item) !== index);
}

export const hideFilteredItemsFromList = (listItems: ListItem[], filter: string): ListItem[] | null =>
{
    const newList = [...listItems];
    newList.forEach(item => item.hide = false);
    switch (filter)
    {
        case 'All':
            return newList;
        case 'Active':
            newList.filter(item => item.completed).map(item => item.hide = true);
            return newList;
        case 'Completed':
            newList.filter(item => !item.completed).map(item => item.hide = true);
            return newList;
        default:
            return null;
    }
}

export const clearCompletedFromList = (listItems: ListItem[]): ListItem[] =>
{
    return listItems.filter(item => !item.completed);
}
