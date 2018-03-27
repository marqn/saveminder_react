import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="row">
                <div class="col-sm"></div>

                <div class="col-sm ">
                <form>
                    <div class="form-group">
                        <p>Nie masz jeszcze konta <Link to="/register">Zarejestruj się</Link></p>
                    </div>

                    <div class="form-group">
                        <button className="btn btn-primary">Przez Facebook</button>
                    </div>

                    <div class="form-group">
                        <button className="btn btn-success">Przez Google</button>
                        </div>
                    
                    <div class="form-group">
                        <p>lub</p>
                    </div>
                    
                    
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Zaloguj się</button>
                    </form>

                </div>
                
                <div class="col-sm"></div>
            </div>
        )
    }
}