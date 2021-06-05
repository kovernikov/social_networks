const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE ';

export type PostsItemType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

export type IconsType = {
    id: number
    img: string
}

export type FriendsType = {
    id: number
    name: string
}

export type SitebarType = {
    friends: Array<FriendsType>
    icon: Array<IconsType>
}

export type ProfilePageType = {
    postsData: Array<PostsItemType>
    newPostText: string
}

export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sitebar: SitebarType
}


export  type StoreType = {
    _state: StateType
    // updateNewPostText: (newText: string) => void
    // appPost: (newPostText: string) => void
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}

const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 15},
                {id: 3, message: 'yo yo yo', likesCount: 17},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'Hello!!!'},
                {id: 2, message: 'Haw are you?'},
                {id: 3, message: 'This is my friend.'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'},
            ],
            newMessageBody: ''
        },
        sitebar: {
            friends: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Viktor'},
            ],
            icon: [
                {id: 1, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_4.jpg'},
                {id: 2, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_1.jpg'},
                {id: 3, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_2.jpg'},
                {id: 4, img: 'https://radiustheme.com/demo/html/cirkle/media/team/team_3.jpg'},
            ]
        }
    },
    _onChange() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state;
    },

    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._onChange()
    //     /*the function adds a value to the state that comes from the textarea*/
    // },
    // appPost(newPostText: string) {
    //     const newPost: PostsItemType = {
    //         id: new Date().getTime(),
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //     }
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = ''; /*очищает поле ввода после добавления поста*/
    //     this._onChange();
    // },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostsItemType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = ''; /*очищает поле ввода после добавления поста*/
            this._onChange();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange();
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._onChange();
        }
    }

    }

    export default store;
