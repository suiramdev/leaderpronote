import React, { Component } from 'react';
import './Root.scss';

import Header from 'components/Header';
import Leaderboard from 'components/Leaderboard';

class Root extends Component {
    render() {
        return (
            <div className="root">
                <Header />
                <Leaderboard />
            </div>
        );
    }
}

export default Root;