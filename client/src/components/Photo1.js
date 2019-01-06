import React from 'react';
import axios from 'axios';
//import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import './Photo.css';
import hsl1 from '../hsl1.png';
import likebar from '../likebar.png';
import avatar1 from '../avatar1.png';

class Photo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      liked: false,
      animate: false,
    }
  }

  componentDidMount() {
    this.realTime();
    setInterval(() => {this.realTime()}, 1500);
} 

  realTime() {
    fetch('http://'+ window.location.hostname +':8080/likes')
    .then(res => res.json())
    .then(database => this.setState({likes: database[0].count}));
  }

  toggleLike() {
    const nLikes = this.state.liked ? this.state.likes - 1 : this.state.likes + 1;
    const yesno = this.state.liked ? -1 : 1;
    this.setState({
      liked: !this.state.liked, 
      likes: nLikes, 
      animate: !this.state.liked
    })
    axios.post('http://'+ window.location.hostname +':8080/likes', {id: 1, yesno});
  }
  
  render() {
    return (
      <div className="photo">
        <div className="header">
          <img src={avatar1} className="avatar"/>
          <strong>*** Pte Ltd</strong>
        </div>
        <div className="portrait">
          <img onClick={this.toggleLike.bind(this)} src={hsl1} />
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
          <p><strong>*** Pte Ltd</strong> Our industrial farming project is coming along nicely- we are currently in the inception phase and have spent the last month conducting feasibility studies and other exciting marketing research!<br/>We have partnered a Dutch consortium to develop a large-scale, integrated, edible produce farm using our existing building's space. This farm has a potential capacity of >1000 tons of healthy and fresh ready-to-eat produce for the Singapore market. </p><a target="_blank" href="https://google.com">#sustainableliving</a>
        </div>
      </div>
    )
  }
}

export default Photo1;

//ReactDOM.render(<Photo url="https://source.unsplash.com/random/375x375" />, document.getElementById('app'));

/*import React from 'react';
import axios from 'axios';
//import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import './Photo.css';
import hsl1 from '../hsl1.png';

var wrap = require('word-wrap');

class Photo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      liked: false,
      animate: false,
    }
  }

  componentDidMount() {
   fetch('http://localhost:8080/likes')
    .then(res => res.json())
    .then(database => this.setState({likes: database[0].count}, () => console.log('Customers fetched', database[0].count)));
  }

  toggleLike() {
    const nLikes = this.state.liked ? this.state.likes - 1 : this.state.likes + 1;
    const yesno = this.state.liked ? -1 : 1;
    this.setState({
      liked: !this.state.liked, 
      likes: nLikes, 
      animate: !this.state.liked
    })
    axios.post('http://localhost:8080/likes', {id: 1, yesno});
  }
  
  
  render() {
    return (
      <div className="photo">
        <div className="header">
          <img src="https://randomuser.me/api/portraits/lego/1.jpg" className="avatar"/>
          Uploaded by <a target="_blank" href="https://twitter.com/RuloARC">Rulox.</a>
        </div>
        <div className="portrait">
          <img onClick={this.toggleLike.bind(this)} src={hsl1} />
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
        <p><strong>*** Pte Ltd</strong> Our industrial farming project is coming along nicely- we are currently in the inception phase and have spent the last month conducting feasibility studies and other exciting marketing research!</p>
        <br/>
          <a href="https://github.com/Rulox/react-atomic-structure" target="_blank">Check my Atomic Design Starter Project for React!</a>
        </div>
      </div>
    )
  }
}

export default Photo1;
*/
//ReactDOM.render(<Photo url="https://source.unsplash.com/random/375x375" />, document.getElementById('app'));
