import React from 'react';

type FriendTypeProps = {
    // photo: SitebarType
}

const MyFriends: React.FC<FriendTypeProps> = (props) => {

    // let friendsElements = props.photo.icon.map(f => <Friends key={f.id}/>);
    // let messagesElements = props.messages.map(m => <Message name={m.name}/>);

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

export default MyFriends;
