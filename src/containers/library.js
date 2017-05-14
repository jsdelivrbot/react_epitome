import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Library extends Component {

    renderLibrary() {
        if (this.props.library.length === 0) {
            return;
        }
        return this.props.library.map((book) => {
            return (
                <li key={book.title}>{book.title}</li>
            );
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderLibrary()}
                </ul>
                <input onChange={(e) => this.props.addBook(e)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //whatever is returned is shown on props
    return {
        library: state.library
    }
}

//anything return will end up as props in this container
function mapDispatchToProps(dispatch) {
    //whenever changeTerm is called, the result should be passed to all reducers
    // all reducers checks for concrete action
    return bindActionCreators({ addBook: addBook }, dispatch);
}

// promote Library from component to container. it needs to know about this new dispatch method
// change term. make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(Library);
// export default connect(null, {addBook})(Library);
