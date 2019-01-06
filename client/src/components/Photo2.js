import React from 'react';
import axios from 'axios';
//import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import './Photo.css';
import photo2 from '../photo2.jpg';
import likebar from '../likebar.png';
import avatar2 from '../avatar2.png';

class Photo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 3,
      liked: false,
      animate: false,
    }
  }

  componentDidMount() {
    this.realTime();
    setInterval(()=>{this.realTime()}, 1500);
 } 

  realTime() {
    fetch('http://'+window.location.hostname+':8080/likes')
    .then(res => res.json())
    .then(database => this.setState({likes: database[1].count}, () => console.log('Customers fetched', database[1].count)));
  }

  toggleLike() {
    const nLikes = this.state.liked ? this.state.likes - 1 : this.state.likes + 1;
    const yesno = this.state.liked ? -1 : 1;
    this.setState({
      liked: !this.state.liked, 
      likes: nLikes, 
      animate: !this.state.liked
    })
    axios.post('http://'+window.location.hostname+':8080/likes', {id: 2, yesno});
  }
  
  render() {
    return (
      <div className="photo">
        <div className="header">
          <img src={avatar2} className="avatar"/>
          <strong>Learnseeker</strong> 
        </div>
        <div className="portrait">
          <img onClick={this.toggleLike.bind(this)} src={photo2} />
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
          <div className="likebar">
            <img src={likebar} />
          </div>
        </div>
        <div className="number">
          {this.state.likes} Likes
        </div>
        <div className="comments">
          <p><strong>Learnseeker</strong> "Education is not preparation for life; education is life itself." One of the greatest perks of an online tutor market place is finding our very own quality tutors. Immensely thankful for the valuable mentorship throughout this start-up journey. To more great cohesions like this with the team! <a target="_blank" href="https://google.com">#lifelonglearning</a> <a target="_blank" href="https://google.com">#huodaolaoxuedaolao</a> <a target="_blank" href="https://google.com">#pembelajaransepanjanghayat</a></p>


        </div>
      </div>
    )
  }
}

export default Photo2;

//ReactDOM.render(<Photo url="https://source.unsplash.com/random/375x375" />, document.getElementById('app'));
