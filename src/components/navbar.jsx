import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "../css/navbar.css";

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton component={RouterLink} to="/">
          <AccountBalanceIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          className="navLink"
        >
          Startseite
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/saved"
          className="navLink"
        >
          Gespeichert
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/comparison"
          className="navLink"
        >
          Vergleich
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          className="account"
        >
          Beratung
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          className="account"
        >
          Mein Konto
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
