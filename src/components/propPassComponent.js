import React, {Component} from 'react';

class PropPassComponent extends Component {

    testClick(e) {
        console.log(e);
    }

    render() {
        return (
            <div>
                <div onClick={this.testClick}>PropPassComponent</div>
                <p>and passed state: {this.props.term}</p>
            </div>
        );
    }
}

export default PropPassComponent;
