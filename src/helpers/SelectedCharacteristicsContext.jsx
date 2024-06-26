import { createContext, useState } from 'react';

export const CharacteristicsContext = createContext();

export function SelectedCharacteristicsContext(props) {
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);

  const handleSelect = (characteristics) => {
    if (selectedCharacteristics.includes(characteristics)) {
      return;
    }
    setSelectedCharacteristics((selectedCharacteristics) => [
      ...selectedCharacteristics,
      characteristics,
    ]);
  };

  const handleRemove = (characteristics) => {
    setSelectedCharacteristics((selectedCharacteristics) =>
      selectedCharacteristics.filter(
        (selectedCharacteristics) => selectedCharacteristics !== characteristics,
      ),
    );
  };

  const handleClear = () => {
    setSelectedCharacteristics([]);
  };

  const value = {
    selectedCharacteristics,
    handleSelect,
    handleRemove,
    handleClear,
  };
  return (
    <CharacteristicsContext.Provider value={value}>
      {props.children}
    </CharacteristicsContext.Provider>
  );
}
