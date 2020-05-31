import React, { Component } from "react";
import style from "./Game.module.css";
import { Button } from "antd";

class TicTacToeGame extends Component {
  state = {
    history: [
      {
        grids: Array(9).fill(0),
      },
    ],
    player: 1,
    winner: 0,
    stepNumber: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.grids !== this.state.grids) {
      this.setState({
        winner: this.getWinner(),
      });
    }
  }

  calculateWinner = (grids) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grids[a] && grids[a] === grids[b] && grids[a] === grids[c]) {
        return grids[a];
      }
    }
    return 0;
  };

  toSymbol = (item) => {
    switch (item) {
      case 0:
        return "";
      case 1:
        return "O";
      case -1:
        return "X";
      default:
        break;
    }
  };

  handleClick = (idx) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const grids = current.grids.slice();
    if (this.calculateWinner(grids) || grids[idx]) {
      return;
    }
    if (grids[idx] !== 0) return;
    grids[idx] = this.state.player;
    this.setState({
      history: history.concat([
        {
          grids: grids,
        },
      ]),
      stepNumber: history.length,
      player: -this.state.player,
    });
  };

  jumpTo(step) {
    console.log(step);
    this.setState({
      stepNumber: step,
      player: step % 2 === 0 ? 1 : -1,
    });
  }

  reset = () => {
    this.setState({
      history: [
        {
          grids: Array(9).fill(0),
        },
      ],
      player: 1,
      winner: 0,
      stepNumber: 0,
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const calcWinner = this.calculateWinner(current.grids);
    const moves = history.map((step, move) => {
      const desc = move ? `回到第${move}步驟` : "";
      if (move !== 0) {
        return (
          <div key={move}>
            <Button onClick={() => this.jumpTo(move)}> {desc}</Button>
          </div>
        );
      }
    });
    const { player, winner } = this.state;
    let status;

    if (calcWinner) {
      status = `Winner: ${this.toSymbol(calcWinner)}`;
    } else {
      status = `輪到：${this.toSymbol(player)}`;
    }
    return (
      <div>
        <div className={style.mainWrap}>
          <div className={style.board}>
            {current.grids.map((item, idx) => (
              <div
                key={idx}
                className={style.grid}
                onClick={() => this.handleClick(idx)}
              >
                {this.toSymbol(item)}
              </div>
            ))}
          </div>

          <div className={style.detail}>
            <h3>{status}</h3>
          </div>
          <div className={style.history}>
            <h3>紀錄</h3>
            {moves}
          </div>
        </div>
        <Button type="primary" onClick={this.reset}>
          Reset
        </Button>
      </div>
    );
  }
}

export default TicTacToeGame;
