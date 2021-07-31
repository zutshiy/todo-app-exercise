import React, {useState} from 'react';
import SelectAllButton from '../select-all-button/SelectAllButton';
import EntryInput from '../entry-input/EntryInput';

const EntryBox = ({isEmpty, onItemEnter, onSelectAll}: { isEmpty: boolean, onItemEnter: (val: string) => void, onSelectAll: (isComplete: boolean) => void }) =>
{
    const [userInput, setUserInput] = useState<string>('');
    const [isAllComplete, setIsAllComplete] = useState<boolean>(false);

    const updateUserInput = (val: string) => {
        setUserInput(val);
    }

    const addUserInput = () => {
        onItemEnter(userInput);
        setUserInput('');
    }

    const updateIsAllComplete = () => {
        setIsAllComplete(!isAllComplete);
        onSelectAll(!isAllComplete);
    }

    return (
      <div className="input-container">
        <SelectAllButton
          isToShow={!isEmpty}
          isAllComplete={isAllComplete}
          onBtnClick={updateIsAllComplete}
        />
        <EntryInput
          userInput={userInput}
          onAction={updateUserInput}
          onEnter={addUserInput}
        />
      </div>
    );
}

export default EntryBox;
