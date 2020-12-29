const initialState = {
  dataAlbum: [],
  dataUser: [],
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
  isOpenModalFilter: false,
};

export default function reducer(state = initialState, action) {
  const {
    type,
    dataAlbum,
    errorDataAlbum,
    isOpenModalFilter,
    dataUser,
  } = action;

  switch (type) {
    case 'DATA_ALBUM':
      return {
        ...state,
        dataAlbum,
      };
    case 'DATA_USER':
      return {
        ...state,
        dataUser,
      };
    case 'ERROR_DATA_ALBUM':
      return {
        ...state,
        errorDataAlbum,
      };
    case 'MODAL_FILTER_TOGGLE':
      return {
        ...state,
        isOpenModalFilter,
      };
    default:
      return state;
  }
}
