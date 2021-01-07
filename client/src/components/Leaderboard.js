import React, { Component } from 'react';
import './Leaderboard.scss';

class Leaderboard extends Component {
    render() {
        let elements = [];
        for (let i = 0; i < 20; i++) {
            elements.push(<tr>
                <td>#{i+1}</td>
                <td>Nom</td>
                <td>Classe</td>
                <td>Nombre d'absences</td>
                <td>Temps total</td>
            </tr>);
        }
        return (
            <div className="leaderboard">
                <table>
                    <thead>
                        <tr>
                            <th>Rang</th>
                            <th>Nom</th>
                            <th>Classe</th>
                            <th>Nombre d'absences</th>
                            <th>Temps total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <div className="leaderboard__footer"></div>
            </div>
        );
    }
}

export default Leaderboard;