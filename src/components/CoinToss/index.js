// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    countTotal: 0,
    countHead: 0,
    countTail: 0,
    isHead: true,
  }

  onTail = () => {
    const tossR = Math.floor(Math.random() * 2)
    if (tossR === 0) {
      this.setState(prevState => ({
        isHead: prevState.isHead,
        countTotal: prevState.countTotal + 1,
        countHead: prevState.countHead + 1,
      }))
    }
    if (tossR === 1) {
      this.setState(prevState => ({
        countTotal: prevState.countTotal + 1,
        countTail: prevState.countTail + 1,
        isHead: !prevState.isHead,
      }))
    }
  }

  render() {
    const {isHead, countHead, countTail, countTotal} = this.state
    const imageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="coinHead">
        <div className="tossHead">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} className="i1" alt="toss result" />
          <div>
            <button type="button" className="btn1" onClick={this.onTail}>
              Toss Coin
            </button>
          </div>
          <div className="totalCont">
            <p className="p1">Total: {countTotal}</p>
            <p className="p1">Heads: {countHead}</p>
            <p className="p1">Tails: {countTail} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
