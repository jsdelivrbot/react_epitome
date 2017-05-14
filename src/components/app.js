import React, {Component} from 'react';
import PropPassComponent from './propPassComponent'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


import Library from '../containers/library';

import TestComponent from './testComponent';
import TestComponentTwo from './testComponent2';
import FormComponent from './formComponent';


export default class App extends Component {
    constructor(props) {
        super(props);

        {/* Set initial state */
        }
        this.state = {
            term: '',
        };
    }

    render() {
        return (
            <div>React simple starter
                {/* Change state */}
                <input
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})}
                />
                <br/>
                <PropPassComponent term={this.state.term}/> {/* Pass props */}
                <br />
                {/* Display library books array, let add new books with on change event */}
                <Library/>
                <br/><br/>

                {/* Routing */}

                <BrowserRouter>
                    <div>
                        <Link to="/">
                            <button>to test1</button>
                        </Link>
                        <Link to="/test2">
                            <button>to test2</button>
                        </Link>
                        <Switch>
                            <Route path="/test2" component={TestComponentTwo}/>
                            <Route path="/" component={TestComponent}/>
                        </Switch>

                        {/*<Route path="/test1/:id" component={TestComponent}/>*/}

                        {/*REACT BUG: will render both components*/}
                        {/*<Route path="/" component={TestComponent}/>*/}
                        {/*<Route path="/posts/new" component={TestComponentTwo}/>*/}

                        {/*REACT BUG FIX*/}
                        {/*<Switch>*/}
                        {/*<Route path="/" component={TestComponent}/>*/}
                        {/*<Route path="/posts/new" component={TestComponentTwo}/>*/}
                        {/*</Switch>*/}
                    </div>
                </BrowserRouter>
                {/*form*/}
                <FormComponent/>
            </div>
        );
    }

}
