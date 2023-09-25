import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useTheme } from '@emotion/react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';


function Navbar() {
  const { palette } = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const { isAuthenticated, user } = useSelector(state => state.user);

  const logoutHandler = () => {
    dispatch(logoutAction())
    // navigate("/login")
    // handleCloseNavMenu()
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOB PORTAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>
              <Link to={`/jobs`} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Jobs</Typography>
                </MenuItem>
              </Link>
              <Link to={`/blog`} style={{ textDecoration: 'none', color: 'black' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Blog</Typography>
                </MenuItem>
              </Link>

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOB PORTAL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Link>
            <Link to={`/jobs`} style={{ textDecoration: 'none', color: 'white' }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Jobs</Typography>
              </MenuItem>
            </Link>
            <Link to={`/blog`} style={{ textDecoration: 'none', color: 'white' }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Blog</Typography>
              </MenuItem>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                isAuthenticated ? (
                  <div>
                    {
                      user && user.role === 'admin' ? (
                        <div>
                          <Link to={`/admin/dashboard`} style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">Admin DashBoard</Typography>
                            </MenuItem>
                          </Link>

                          <Link to={`/user/dashboard`} style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">DashBoard</Typography>
                            </MenuItem>
                          </Link>
                          <MenuItem onClick={logoutHandler}>
                            <Typography textAlign="center">Logout</Typography>
                          </MenuItem>
                        </div>
                      ) : (
                        
                          user && user.role === 'company' ? (
                            <div>
                              <Link to={`/admin/dashboard`} style={{ textDecoration: 'none', color: 'black' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography textAlign="center">Company DashBoard</Typography>
                                </MenuItem>
                              </Link>
    
                              <Link to={`/user/dashboard`} style={{ textDecoration: 'none', color: 'black' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography textAlign="center">DashBoard</Typography>
                                </MenuItem>
                              </Link>
                              <MenuItem onClick={logoutHandler}>
                                <Typography textAlign="center">Logout</Typography>
                              </MenuItem>
                            </div>
                          ) : (
                            <div>
                              <Link to={`/user/dashboard`} style={{ textDecoration: 'none', color: 'black' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                  <Typography textAlign="center">DashBoard</Typography>
                                </MenuItem>
                              </Link>
                              <MenuItem onClick={logoutHandler}>
                                <Typography textAlign="center">Logout</Typography>
                              </MenuItem>
                            </div>
                          )
                        
                      )
                    }

                  </div>
                ) : (
                  <div>
                    <Link to={`/login`} style={{ textDecoration: 'none', color: 'black' }}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Login</Typography>
                      </MenuItem>
                    </Link>

                    <Link to={`/signup`} style={{ textDecoration: 'none', color: 'black' }}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Sign Up</Typography>
                      </MenuItem>
                    </Link>
                  </div>
                )
              }

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
