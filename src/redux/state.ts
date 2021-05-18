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

type FriendsType = {
    id: number
    name: string
}

export type SitebarType = {
    friends: Array<FriendsType>
    icon: Array<IconsType>
}

export type ProfilePageType = {
    posts: Array<PostsItemType>
}

export type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sitebar: SitebarType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 15},
            {id: 3, message: 'yo', likesCount: 16},
            {id: 3, message: 'yo yo yo', likesCount: 17},
        ],
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
}

export let appPost = (pastMessage: string) => {
    const newPost: PostsItemType = {
        id: new Date().getTime(),
        message: pastMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
}
export default state;
