// Write your code here
import {Component} from 'react'

import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImgUrl,
    headscount: 0,
    tailscount: 0,
  }
  onClickBtn = () => {
    const {tossResultImage, headscount, tailscount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let img = ''
    let latestHeads = headscount
    let latestTails = tailscount
    if (toss === 0) {
      img = headImgUrl
      latestHeads += 1
    } else {
      img = tailImgUrl
      latestTails += 1
    }
    this.setState({
      tossResultImage: img,
      headscount: latestHeads,
      tailscount: latestTails,
    })
  }

  render() {
    const {tossResultImage, headscount, tailscount} = this.state
    const totalCount = headscount + tailscount
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-image"
          />
          <button className="button" type="button" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headscount}</p>
            <p className="count">Tails: {tailscount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
