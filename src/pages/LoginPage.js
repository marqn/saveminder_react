import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row align-middle">
                <div class="col-sm"/>

                <div class="col-sm align-middle">
                    <h1 class="display-4">Logowanie</h1>
                    <form>
                        <div class="form-group">
                            <p>Nie masz jeszcze konta? <Link to="/register">Zarejestruj się</Link></p>
                        </div>

                        <div class="form-group">
                            <button className="btn btn-light btn-lg btn-block">
                                <div class="row">
                                    <div class="col-sm">
                                        <i class="fab fa-facebook-f fa-lg"/>
                                    </div>
                                    <div class="col-sm">
                                        zaloguj się
                                    </div>
                                    <div class="col-sm"/>
                                </div>
                            </button>
                        </div>

                        <div class="form-group">
                            <button className="btn btn-light btn-lg btn-block">
                                <div class="row">
                                    <div class="col-sm">
                                        <i class="fab fa-google-plus-g fa-lg"/>
                                    </div>
                                    <div class="col-sm">
                                        zaloguj się
                                    </div>
                                    <div class="col-sm"/>
                                </div>
                            </button>
                        </div>

                        <div class="form-group">
                            <p>lub</p>
                        </div>


                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>

                        <button type="submit" class="btn btn-primary">Zaloguj się</button>
                    </form>

                </div>

                <div class="col-sm"/>
            </div>
        )
    }
}