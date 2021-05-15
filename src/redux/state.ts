export type PostsItemType = {
    id: number
    message: string
    likesCount: string
    img: string
}
export type DialogType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
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
}


export let state: StateType = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: 'Hi, how are you',
                likesCount: '12',
                img: 'https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'
            },
            {
                id: 2,
                message: 'It\'s my first post',
                likesCount: '15',
                img: 'https://i.guim.co.uk/img/media/bf7e98bd289d189e5b86d3f406f740368c663a6a/85_0_2544_1527/master/2544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=98cd2e37e0df5d552473c329d88349ee'
            }
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
}
