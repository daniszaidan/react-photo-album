const initialState = {
  // data: [],
  data: "sss",
  // isOpenDrawer: false,
};

export default function reducer(state = initialState, action) {
  const {
    type,
    data,
    // isOpenDrawer,
  } = action;

  switch (type) {
    case 'data':
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}
