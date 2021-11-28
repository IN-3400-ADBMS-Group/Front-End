import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Button,
  Card,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const theme = createTheme();
function SinglePerson() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Single User View
          </Typography>

          <Stack direction="row">
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/");
              }}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                navigate("/form");
              }}
              sx={{ mr: 2 }}
            >
              Add a User
            </Button>
          </Stack>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://source.unsplash.com/random"
              sx={{
                margin: "auto",
                height: "100px",
                width: "100px",
                mt: "2px",
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Name
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Age
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Address
              </Typography>
              <Typography>Person Details</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="secondary">
                Edit
              </Button>
              <Button size="small" color="error">
                Delete
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SinglePerson;
