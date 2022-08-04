import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import jordan from "../images/jordan.png";
import "../css/nav.css";
import { Link } from "react-router-dom";

const pages = ["Home", "Blog", "About", "Projects"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let newPage = pages[0];

  return (
    <AppBar className="appbar" position="static">
      <Container className="appbar" maxWidth="xl">
        <Toolbar className="appbar" disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CJD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* //--------------------------------------------------------------SMALL SCREEN NAV---------------------------------------------------------------------- */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === "Home" && (
                    <Link to="/">
                      {" "}
                      <Typography className="nav-link-sm" textAlign="center">
                        Home
                      </Typography>
                    </Link>
                  )}

                  {page !== "Home" && (
                    <Link to={`${page.toLowerCase()}`}>
                      {" "}
                      <Typography className="nav-link-sm" textAlign="center">
                        {page}
                      </Typography>
                    </Link>
                  )}
                </MenuItem>
              ))}
              {/* //----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CJD
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
             
              <div>


              {page != "Home" && (
                <Link to={`${page.toLowerCase()}`}>   <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >{page}</Button>  </Link>

              )}

              {page == "Home" && (
                 <Link to='/'>   <Button
                 key={page}
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: "white", display: "block" }}
               >{page}</Button>  </Link>
              )}

              




            
            </div>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="J" src={jordan} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
