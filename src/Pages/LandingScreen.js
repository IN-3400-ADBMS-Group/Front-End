import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function LandingScreen() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/featured/?database)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              IN-3400-ADBMS
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              onClick={() => {
                navigate("/form");
              }}
            >
              Add a User
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              onClick={() => {
                navigate("/persons");
              }}
            >
              View Users
            </Button>
            <Grid container></Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
