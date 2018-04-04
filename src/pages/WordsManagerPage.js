import React, {Component} from 'react';

export default class WordsManagerPage extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="">
                <div className="jumbotron btn">
                <h1 class="display-4">Add Category</h1>
                </div>
                <div className="jumbotron btn">
                <h1 class="display-4">Add Words</h1>
                </div>
            </div>
        )
    }
}