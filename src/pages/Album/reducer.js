const initialState = {
  dataPhoto: [],
  errorDataPhoto: '',
  isOpenModalPhoto: false,
  photoSelected: {},
};

export default function reducer(state = initialState, action) {
  const {
    type,
    dataPhoto,
    errorDataPhoto,
    isOpenModalPhoto,
    photoSelected,
  } = action;

  switch (type) {
    case 'DATA_PHOTO':
      return {
        ...state,
        dataPhoto,
      };
    case 'ERROR_DATA_PHOTO':
      return {
        ...state,
        errorDataPhoto,
      };
    case 'MODAL_PHOTO_TOGGLE':
      return {
        ...state,
        isOpenModalPhoto,
      };
    case 'PHOTO_SELECTED':
      return {
        ...state,
        photoSelected,
      };
    // case 'FAV_DATA_PHOTO':
    //   // const filteredPhoto = dataPhoto.filter((item) => item.id === id);
    //   // console.log(filteredPhoto, 'filteredPhoto');
    //   // console.log(id, 'id');
    //   return {
    //     ...state,
    //     dataPhoto: dataPhoto,
    //     // dataPhoto : dataPhoto.filter((item) => item.albumId === album.id),
    //   };
    default:
      return state;
  }
}
