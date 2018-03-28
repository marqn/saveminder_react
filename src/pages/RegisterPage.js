import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LearnPage extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="row">
                <div class="col-sm"></div>

                <div class="col-sm ">
                <h1 class="display-4">Rejestracja</h1>
                <form>
                        <div class="form-group">
                            <p>Masz już konto <Link to="/login">Zaloguj się</Link></p>
                        </div>

                        <div class="form-group">
                            <button className="btn btn-light btn-lg btn-block"><i class="fab fa-facebook-f fa-lg" ></i>  zarejestruj się</button>
                        </div>

                        <div class="form-group">
                            <button className="btn btn-light btn-lg btn-block"><i class="fab fa-google-plus-g fa-lg"></i>  zarejestruj się</button>
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
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Zarejestruj się</button>
                    </form>

                </div>
                
                <div class="col-sm"></div>
            </div>
        )
    }
}