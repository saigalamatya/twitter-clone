import React, { useState } from 'react';
import './TweetBox.css';
import { Button, Avatar } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      displayName: 'Saigal Amatya',
      username: 'amatyasaigal',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/s960x960/80490659_2775739642465621_7381191693799784448_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=38_IHWUNxmMAX8CfOL6&_nc_ht=scontent.fktm8-1.fna&tp=-7&oh=efb8507d85c1b88a81cd8c2685c793c0&oe=5F592D74'
    });
    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className="tweetBox">
      <form >
        <div className="tweetBox__input">
          <Avatar
            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/s960x960/80490659_2775739642465621_7381191693799784448_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=38_IHWUNxmMAX8CfOL6&_nc_ht=scontent.fktm8-1.fna&tp=-7&oh=efb8507d85c1b88a81cd8c2685c793c0&oe=5F592D74" />
          <input
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text" />
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text" />

        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
