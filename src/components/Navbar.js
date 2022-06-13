import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" style={{color: 'white'}}>First</a>
                <a className="navbar-brand" style={{color: 'white'}}>Second</a>
                <a className="navbar-brand" style={{color: 'white'}}>Third</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}
export default Navbar;
