import React, { useEffect, useRef } from 'react';

//useClick
export const useClick = (onClick) => {
    if(typeof onClick !== "function") return false;
    const elem = useRef();
    useEffect(() => {
      if(elem.current){
        // elem.current.addEventListener("click", onClick)
      }
      return () =>{       // useEffect의 return은 componentWillUnmount 
        if(elem.current){
          // elem.current.removeListener("click", onClick); 
        }
      }
    }, []);
    return elem; 
  }