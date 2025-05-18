import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "../css/navbar.css";

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
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
          Favoriten
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
          Mein Konto
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
