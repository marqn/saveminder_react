import React, {Component} from 'react';

export default class Navigation extends Component {

    render() {
        return (
            <nav class="navbar navbar-light bg-light d-flex justify-content-between">
                <div>
                <span class="navbar-brand">SaveMinder</span>
                </div>

                <div>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Strona główna</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Nauka</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Manager wyrazów</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Statystyki</a>
                        </li>
                    </ul>
                </div>

                

                <div>
                    <button class="btn btn-outline-success ">Zaloguj się</button>
                </div>
                    
            </nav>
        );
    }
}