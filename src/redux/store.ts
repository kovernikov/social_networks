export const q = () => {}


//
// export type ActionsTypes =
//     ReturnType<typeof addPostAC>
//     | ReturnType<typeof changeNewTextAC>
//     | ReturnType<typeof updateNewMessageBodyAC>
//     | ReturnType<typeof sendMessageAC>

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: 'Hi, how are you', likesCount: 12},
//                 {id: 2, message: 'It\'s my first post', likesCount: 15},
//                 {id: 3, message: 'yo yo yo', likesCount: 17},
//             ],
//             newPostText: 'it-kamasutra.com'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Dimych'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Valera'},
//                 {id: 6, name: 'Viktor'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hello!!!'},
//                 {id: 2, message: 'Haw are you?'},
//                 {id: 3, message: 'This is my friend.'},
//                 {id: 4, message: 'yo'},
//                 {id: 5, message: 'yo'},
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {
//             friends: [
//                 {id: 1, name: 'Andrey'},
//                 {id: 2, name: 'Sasha'},
//                 {id: 3, name: 'Viktor'},
//             ],
//             icon: [
//                 {id: 1, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_4.jpg'},
//                 {id: 2, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg'},
//                 {id: 3, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_2.jpg'},
//                 {id: 4, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg'},
//             ]
//         }
//     },
//     _onChange() {
//         console.log('State changed');
//     },
//
//     subscribe(observer) {
//         this._onChange = observer
//     },
//     getState() {
//         return this._state;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._onChange();
//     }
//
// }
//
// export default store;
