import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";
import axios from "axios";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const users = [
  {
    fname: "Madhu",
    password: "test",
    lname: "Sivan",
    _id: "vGLCsDfs",
    email: "madhu@gmail.com",
  },
  {
    fname: "Madhu",
    password: "test568",
    lname: "Sivan",
    _id: "SBASgPRn",
    email: "madhu@gmail.com",
  },
];
const theme = createTheme();

export default function PersonListPage() {
  const navigate = useNavigate();
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
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
              User View Panel
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
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {Users.map((user) => (
              <Grid item key={user._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/featured/?men"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.fname}
                    </Typography>
                    <Typography>{user.lname}</Typography>
                    <Typography>{user.email}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        navigate(`/person/${user._id}`);
                      }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
