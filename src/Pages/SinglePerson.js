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

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const theme = createTheme();
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight: theme.typography.fontWeightMedium,
  };
}
function SinglePerson() {
  const params = useParams();
  const [personName, setPersonName] = React.useState([]);
  let friends = [
    {
      fname: "Harry",
      _id: " 879",
    },
    {
      fname: "Ivy",
      _id: " 878",
    },
    {
      fname: "Mahesh",
      _id: " 878",
    },
    {
      fname: "thushi",
      _id: " 878",
    },
  ];
  let groups = [
    {
      fname: "Maths",
      _id: " 879",
    },
  ];
  const [groupnames, setgroupnames] = useState([
    {
      fname: "Science",
      _id: " 889",
    },
    {
      fname: "History",
      _id: " 879",
    },
    {
      fname: "English",
      _id: " 879",
    },
    {
      fname: "Programming",
      _id: " 879",
    },
  ]);
  const [names, setnames] = useState([
    {
      fname: "Lena",
      _id: " 879",
    },
    {
      fname: "Mike",
      _id: " 8596",
    },
    {
      fname: "Tom",
      _id: " 8592",
    },
    {
      fname: "Priya",
      _id: " 8593",
    },
    {
      fname: "Madhu",
      _id: " 8595",
    },
    {
      fname: "john",
      _id: " 5561",
    },
    {
      fname: "Kamal",
      _id: " 8578",
    },
    {
      fname: "Cathy",
      _id: " 875",
    },
  ]);
  const [user, setuser] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3001/${params.id}`).then((res) => {
      setuser(res.data);
    });
    console.log("useeffect");
  }, [params, personName]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value.fname);
    friends.push({
      fname: value.fname,
      _id: value._id,
    });
    console.log(friends);
  };

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
                src="https://source.unsplash.com/featured/?men"
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
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  gutterBottom
                >
                  email: {user.email}
                </Typography>

                <Container>
                  <Paper sx={{ width: "100%" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" colSpan={2}>
                              <Typography color="primary" variant="h5">
                                {" "}
                                Friends
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {friends.map((column) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell key={column._id}>
                                  <Typography color="indigo">
                                    {column.fname}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="center">
                              <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-name-label">
                                  Add Friend
                                </InputLabel>
                                <Select
                                  labelId="demo-multiple-name-label"
                                  id="demo-multiple-name"
                                  value={personName}
                                  onChange={handleChange}
                                  input={<OutlinedInput label="Name" />}
                                  MenuProps={MenuProps}
                                >
                                  {names.map((name) => (
                                    <MenuItem
                                      key={name._id}
                                      value={name}
                                      style={getStyles(name, personName, theme)}
                                    >
                                      {name.fname}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TableContainer sx={{ maxHeight: 440, mt: "5px" }}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" colSpan={2}>
                              <Typography color="primary" variant="h5">
                                {" "}
                                Groups
                              </Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {groups.map((column) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell key={column._id}>
                                  <Typography color="indigo">
                                    {column.fname}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell align="center">
                              <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-name-label">
                                  Follow a Group
                                </InputLabel>
                                <Select
                                  labelId="demo-multiple-name-label"
                                  id="demo-multiple-name"
                                  value={personName}
                                  onChange={handleChange}
                                  input={<OutlinedInput label="Name" />}
                                  MenuProps={MenuProps}
                                >
                                  {groupnames.map((name) => (
                                    <MenuItem
                                      key={name._id}
                                      value={name}
                                      style={getStyles(name, personName, theme)}
                                    >
                                      {name.fname}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                </Container>
              </CardContent>
              <CardActions sx={{ margin: "auto" }}>
                <Button
                  startIcon={<EditIcon />}
                  size="medium"
                  color="secondary"
                  onClick={() => {
                    navigate(`/form/${user._id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="medium"
                  startIcon={<DeleteIcon />}
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
