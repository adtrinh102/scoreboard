import React, { Component } from "react"
import Player from "./Player"

export default class Scoreboard extends Component {
    state = {
        players: [
            { id: 1, name: "Arien", score: 2 },
            { id: 2, name: "David", score: 5 }, 
            { id: 3, name: "Mimi", score: 4 }
        ]
    }
    
    render() {
        const players_copy = [...this.state.players]
        players_copy.sort((a, b) => b.score - a.score)

        return (
            <div className="scoreboard">
                <ul>
                {players_copy.map(this.renderPlayer)}
                </ul>
            </div>
        )
    }

    renderPlayer = (player) => {
        return (
            <Player 
            id = {player.id}
            name = {player.name}
            score = {player.score}
            key = {player.id}
            />
        )
    }
}