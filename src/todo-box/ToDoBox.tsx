import React, { useCallback, useState } from "react";
import "./ToDoBox.scss";
import EntryBox from "../entry-box/EntryBox";
import ListItemBox from "../list-item-box/ListItemBox";
import { ListItem } from "../models/ListItem";
import {
  addItemToList,
  removeItemFromList,
  updateAllItemsStatusInList,
  updateItemValueInList,
  updateItemStatusInList,
  clearCompletedFromList,
} from "../ListService";
import MetaDataBox from "../meta-data-box/MetaDataBox";

const ToDoBox = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [view, setView] = useState<"All" | "Active" | "Completed">("All");
  const updateState = (listItems: ListItem[] | null) =>
    listItems && setListItems(listItems);

  const addToList = (newItem: string) =>
    updateState(addItemToList(listItems, newItem));
  const updateItemValue = (index: number, newVal: string) =>
    updateState(updateItemValueInList(listItems, index, newVal));
  const updateItemStatus = (index: number, isComplete: boolean) =>
    updateState(updateItemStatusInList(listItems, index, isComplete));
  const updateAllItemsStatus = (isComplete: boolean) =>
    updateState(updateAllItemsStatusInList(listItems, isComplete));
  const removeItem = (index: number) =>
    updateState(removeItemFromList(listItems, index));
  const clearCompleted = () => updateState(clearCompletedFromList(listItems));
  const updateView = (val: "All" | "Active" | "Completed") => setView(val);

  const isToShow = useCallback(
    (item: ListItem) =>
      view === "Active"
        ? !item.completed
        : view === "Completed"
        ? item.completed
        : view === "All",
    [view]
  );

  const createListItem = () => {
    return (
      <ul>
        {listItems.filter(isToShow).map((item, index) => {
          const updateValueAtIndex = (newVal: string) =>
            updateItemValue(index, newVal);
          const updateStatusAtIndex = (newVal: boolean) =>
            updateItemStatus(index, newVal);
          const removeItemAtIndex = () => removeItem(index);
          return (
            <li key={index}>
              <ListItemBox
                listItem={item}
                updateItem={updateValueAtIndex}
                updateItemStatus={updateStatusAtIndex}
                removeItem={removeItemAtIndex}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <h1>todos</h1>
      <div className="todo-box">
        <EntryBox
          isEmpty={listItems.length === 0}
          onItemEnter={addToList}
          onSelectAll={updateAllItemsStatus}
        />
        {createListItem()}
        {listItems.length !== 0 && (
          <MetaDataBox
            updateView={updateView}
            listItems={listItems}
            onClearClick={clearCompleted}
          />
        )}
      </div>
    </div>
  );
};

export default ToDoBox;
