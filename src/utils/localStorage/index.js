export const loadState = () => {
  try {
    const stringedState = localStorage.getItem('state');
    if (stringedState === null) {
      return undefined;
    }
    return JSON.parse(stringedState);
  } catch (err) {
    return undefined;
  }
};
