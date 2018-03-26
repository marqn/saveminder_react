import React, {Component} from 'react';

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
                            <a className="nav-link active" href="#">Strona główna</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Nauka</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Manager wyrazów</a>
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