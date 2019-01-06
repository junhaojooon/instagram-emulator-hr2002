import React from 'react';
//import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import './Photo.css';
import photo1 from '../photo1.png';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 12,
      liked: false,
      animate: false,
    }
  }
  
  toggleLike() {
    const nLikes = this.state.liked ? this.state.likes - 1 : this.state.likes + 1;
    this.setState({
      liked: !this.state.liked, 
      likes: nLikes, 
      animate: !this.state.liked
    })
  }
  
  render() {
    return (
      <div className="photo">
        <div className="header">
          <img src="https://randomuser.me/api/portraits/lego/1.jpg" className="avatar"/>
          Uploaded by <a target="_blank" href="https://twitter.com/RuloARC">Rulox.</a>
        </div>
        <div className="portrait">
          <img onDoubleClick={this.toggleLike.bind(this)} src={photo1} />
          <svg className={`heart_animation ${this.state.animate ? 'animate' : ''}`} viewBox="0 0 32 29.6">
  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg> 
        </div>
        <div className="likes">
          <svg onClick={this.toggleLike.bind(this)} className={`heart ${this.state.liked ? 'active' : ''}`} viewBox="0 0 32 29.6">
  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg> 
          <div className="number">
            {this.state.likes} Likes
          </div>
        </div>
        <div className="comments">
          Click on the heart or double click in the image to like/dislike! <br/>
          <a href="https://github.com/Rulox/react-atomic-structure" target="_blank">Check my Atomic Design Starter Project for React!</a>
        </div>
      </div>
    )
  }
}

export default Photo;

//ReactDOM.render(<Photo url="https://source.unsplash.com/random/375x375" />, document.getElementById('app'));
