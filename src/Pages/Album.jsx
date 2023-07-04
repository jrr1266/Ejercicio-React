import { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@material-ui/core";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataContex } from "../Context/DataContex";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { FormControl, Input } from "@mui/material";

const theme = createTheme();

export default function Album() {
  const { newObject, getFilm, populares, findById } = useContext(DataContex);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [render, setRender] = useState([]);

  useEffect(() => {
    setRender(populares);
  }, [populares]);

  useEffect(() => {
    setRender(newObject);
  }, [newObject]);

  useEffect(() => {
    getFilm(text);
  }, [text]);

  const navigateToDetails = (id) => {
    findById(id);
    navigate("/detalles");
  };

  const isSmallScreen = useMediaQuery("(max-width:550px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {!isSmallScreen && (
              <Box
                sx={{
                  padding: "5px",
                  height: "10px",
                  marginTop: "45px",
                  fontFamily: "fantasy",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "-40px",
                }}
              >
                <FormControl fullWidth>
                  <Input
                    placeholder="Find your favorite film"
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            )}
          </Container>
        </Box>

        {/* Grid */}
        <Container sx={{ py: 2 }} maxWidth="md">
          <Grid container spacing={4} justifyContent="center">
            {render.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "470px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      width: "200px",
                      height: "320px",
                      fontFamily: "Roboto",
                    }}
                    image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      marginBottom: "-20px",
                      color: "#1877ec",
                    }}
                  >
                    {Math.round(item.vote_average / 2)}
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </Typography>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      fontWeight="600"
                      sx={{
                        fontSize: "18px",
                        marginBottom: "5px",
                      }}
                    >
                      {item.original_title}
                    </Typography>
                    <Typography marginBottom="-50px">
                      {item.release_date}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      onClick={() => navigateToDetails(item.id)}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
