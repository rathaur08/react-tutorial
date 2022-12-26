import {useEffect} from 'react';

const UseCustomHookCount = (count) => {
    useEffect(() => {
        console.log("I am first one");
        if (count >= 1) {
          document.title = `Chats (${count })`
        } else {
          document.title = `Chats `
        }
      },[count]);
}

export default UseCustomHookCount;