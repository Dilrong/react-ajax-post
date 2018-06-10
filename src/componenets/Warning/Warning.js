import React, {Component} from 'react';
import "./Warning.css";

class Warning extends Component {
    render() {
        const { message, visible } = this.props;

        if(!visible) return null;
        return (
            <div className="Warning-wrapper">
                <div className="Warning animated wobble">
                    {message}
                </div>
            </div>
        );
    }
}

export default Warning;