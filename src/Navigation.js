import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light d-flex justify-content-between">
                <div>
                    <span className="navbar-brand">SaveMinder</span>
                </div>

                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Strona główna</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Nauka główna</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/wordsmanager">Manager wyrazów</Link>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Statystyki</a>
                        </li>
                    </ul>
                </div>


                <div>
                    <button className="btn btn-outline-success ">Zaloguj się</button>
                </div>

            </nav>
        );
    }
}