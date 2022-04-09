import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {

    render () {

        return (
            <nav>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>

                <div>
                    <Link to="/create-idea">
                        Create an idea
                    </Link>
                </div>

                <div>
                    <Link to="/ideas">
                        Ideas
                    </Link>
                </div>
            </nav>
        );

    }

}

export default Nav;
