const initialState = {
  userLogin: {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
    comments: [
      {
        photoId: 1,
        comment: 'waw bagus sekali',
      },
      {
        photoId: 1,
        comment: 'gud',
      },
      {
        photoId: 2,
        comment: 'zeeb',
      },
    ],
    favorites: [1, 3, 7],
  },
  dataUser: [],
  errorDataUser: '',
  albumUser: [],
};

export default function reducer(state = initialState, action) {
  const { type, dataUser, idPhoto, errorDataUser, albumUser } = action;

  switch (type) {
    case 'FAV_DATA_PHOTO':
      return {
        ...state,
        userLogin: {
          ...state.userLogin,
          favorites: [...state.userLogin.favorites, idPhoto],
        },
      };
    case 'DATA_USER':
      return {
        ...state,
        dataUser,
      };
    case 'ERROR_DATA_USER':
      return {
        ...state,
        errorDataUser,
      };
    case 'DATA_ALBUM_USER':
      return {
        ...state,
        albumUser,
      };
    default:
      return state;
  }
}
