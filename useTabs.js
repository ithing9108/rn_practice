import React, { useState } from 'react';

export const useTabs = (initialTab, allTabs) => {
    if(!allTabs || Array.isArray(allTabs)) return false;
    const[currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    }
  }