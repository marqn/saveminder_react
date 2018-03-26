import React, {Component} from 'react';

export default class Content extends Component {

    render() {
        return (
                <div className='content'>
                    <div className="font-weight-bold" >
                        This text should overflow the parent.
                    </div>
                </div>
        );
    }
}