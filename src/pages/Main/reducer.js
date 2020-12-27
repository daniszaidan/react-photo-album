const initialState = {
  dataAlbum: [],
  errorDataAlbum: '',
};

export default function reducer(state = initialState, action) {
  const { type, dataAlbum, errorDataAlbum } = action;

  switch (type) {
    case 'DATA_ALBUM':
      return {
        ...state,
        dataAlbum,
      };
    case 'ERROR_DATA_ALBUM':
      return {
        ...state,
        errorDataAlbum,
      };
    default:
      return state;
  }
}
