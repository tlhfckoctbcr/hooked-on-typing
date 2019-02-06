export const initialState = {
  active: false,
  pressError: false,
  lastKeyPress: "",
  pressCounter: 0,
  errorCounter: 0,
  activeWordIndex: 0,
  activeWordLetterIndex: 0,
  timer: 60,
  timerDirection: "desc",
  words: [],
  loading: false,
  error: null
};
