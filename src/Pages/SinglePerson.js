import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Alert,
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
import { useNavigate, useParams } from "react-router";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
const theme = createTheme();

function SinglePerson() {
  const params = useParams();
  console.log(params);
  const [user, setuser] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3001/${params.id}`).then((res) => {
      setuser(res.data);
      console.log(res.data);
    });
  }, [params]);
  const navigate = useNavigate();

  const [friends, setfriends] = useState([
    {
      fname: "Jhon",
      _id: " 879",
    },
    {
      fname: "Jhonny",
      _id: " 878",
    },
  ]);

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
          {user == null ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
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
                  First Name: {user.fname}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Last Name: {user.lname}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  email: {user.email}
                </Typography>

                <Container>
                  <Typography variant="h4">Friends</Typography>
                  <Grid>
                    {friends.map((friend) => (
                      <Grid key={friend._id}>
                        <Typography>{friend.fname}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => {
                    navigate(`/form/${user._id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:3001/${params.id}`)
                      .then(() => <Alert severity="error">Deleted</Alert>);
                    navigate("/");
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SinglePerson;
