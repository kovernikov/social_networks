import React from 'react';
import s from './Friends.module.css';
import {SitebarType} from '../../../redux/state';

type FriendTypeProps = {
    photo: SitebarType


}

const Friends: React.FC<FriendTypeProps> = (props) => {

    // let friendsElements = props.photo.icon.map(f => <Friends icon={f.img} id={f.id}/>);
    // let messagesElements = props.state.messages.map(m => <Message name={m.name}/>);

    return (
      <div>
          <div>
              {/*{friendsElements}*/}
          </div>
          <div>
              {/*{messagesElements}*/}
          </div>
      </div>
    )
}

export default Friends;
