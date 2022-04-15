import React from "react";
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';

class Nav extends React.Component {

    render () {
        return (
            <AppBar position="static">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  >
                    <Link to="/">
                        Home
                     </Link>
                  </Typography>
                </Toolbar>
              </Container>
            </AppBar>
          );
        // return (
        //     <nav>
        //         <div>
        //             <Link to="/">
        //                 Home
        //             </Link>
        //         </div>

        //         <div>
        //             <Link to="/create-idea">
        //                 Create an idea
        //             </Link>
        //         </div>

        //         <div>
        //             <Link to="/ideas">
        //                 Ideas
        //             </Link>
        //         </div>
        //     </nav>
        // );

    }

}

export default Nav;
