import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light d-flex justify-content-between ">
                <div>
                    <Link className="navbar-brand" to="/">SaveMinder</Link>
                    
                </div>

                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Strona główna</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/learnpage">Nauka</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/wordsmanager">Manager wyrazów</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link active" to="/statistic">Statystyki</Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <Link className="btn btn-outline-success" to="/login">Zaloguj się</Link>
                </div>

            </nav>
        );
    }
}