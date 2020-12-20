// export function drawerToggle(isOpenDrawer) {
//   return (dispatch) => {
//     dispatch({
//       type: 'DRAWER_TOGGLE',
//       isOpenDrawer,
//     });
//   };
// }

// export function getLatestAll() {
//   return (dispatch) => {
//     const options = {
//       method: 'GET',
//       url: '',
//     };

//     return fetch(options)
//       .then((res) => {
//         function dataLatestAll(dataLatestAll) {
//           return {
//             type: 'dataLatestAll',
//             dataLatestAll,
//           };
//         }
//         dispatch(dataLatestAll(res));
//       })
//       .catch((err) => {
//         return err;
//       });
//   };
// }

// export function getCountAll() {
//   return (dispatch) => {
//     const options = {
//       method: 'GET',
//       url: '',
//     };

//     return fetch(options)
//       .then((res) => {
//         function countAll(countAll) {
//           return {
//             type: 'countAll',
//             countAll,
//           };
//         }
//         dispatch(countAll(res));
//       })
//       .catch((err) => {
//         return err;
//       });
//   };
// }

