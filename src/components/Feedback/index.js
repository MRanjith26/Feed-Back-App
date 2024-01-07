// Write your React code here.
import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {isFeedBackEvent: false}

  onEmoji = () => {
    this.setState({isFeedBackEvent: true})
  }

  feedBackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="emoji-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button className="button" type="button" onClick={this.onEmoji}>
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="brief">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedBackResult = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <ul className="feed-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <h1 className="content">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve our customer support performance
        </p>
      </ul>
    )
  }

  render() {
    const {isFeedBackEvent} = this.state
    return (
      <div className="card-container">
        <div className="card">
          {isFeedBackEvent ? this.feedBackResult() : this.feedBackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
