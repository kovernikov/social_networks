import {SitebarType} from '../types/types';
import {ActionsTypes} from '../types/dispatchTypes';


let initialState = {
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
};

const sidebarReducer = (state: SitebarType = initialState, action: ActionsTypes) => {

    return state;
}

export default sidebarReducer;
