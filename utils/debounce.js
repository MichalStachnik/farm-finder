export const debounce = (fn, time) => {
  let timeoutID;
  return (arg) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn(arg);
    }, time);
  };
};
