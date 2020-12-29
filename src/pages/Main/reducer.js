const initialState = {
  dataAlbum: [],
  errorDataAlbum: '',
  pastelColor: [
    '#e2aa50',
    '#e5707e',
    '#cd5d7d',
    '#97bae7',
    '#949cdf',
    '#999b84',
    '#d8ac9c',
    '#726a95',
    '#709fb0',
    '#a0c1b8',
  ],
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
