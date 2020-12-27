const initialState = {
  isLoading: true,
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case 'DONE_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
