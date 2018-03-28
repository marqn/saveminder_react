import React, {Component} from 'react';

export default class MainPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="row h-100 d-flex justify-content-center">
                <form class="col-12">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Example label</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Another label</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2"
                               placeholder="Another input"/>
                    </div>
                </form>
            </div>
        )
    }
}