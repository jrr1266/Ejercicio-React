import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function DetallesPages() {
  const [datos, setDatos] = useState([]);
  const [adult, setAdult] = useState("");
  const adultos = (boolean) => {
    boolean ? setAdult("Only Adults") : setAdult("All age");
  };
  useEffect(() => {
    setDatos(JSON.parse(localStorage.getItem("data")));
    adultos(datos.map((a) => a.adult));
  }, []);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isSmall = useMediaQuery("(max-width:400px)");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        <main fontFamily="sanserif">
          {datos.map((item) => (
            <Container
              maxWidth={false}
              disableGutters
              component="section"
              key={item.id}
              sx={{
                backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://www.themoviedb.org/t/p/original/${item.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                minHeight: "100vh",
                marginTop: "90px",
                paddingBottom: "10px",
              }}
            >
              <Container
                component="section"
                sx={{
                  display: "flex",
                }}
              >
                <Box component="article">
                  <CardMedia
                    component="div"
                    sx={{
                      width: "300px",
                      height: "420px",
                      borderRadius: "15px",
                      transform: "translate(0, 40px)",
                      marginBottom: "30px",
                      display: isMobile ? "none" : "block",
                    }}
                    image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  />
                </Box>
                <Box
                  component="article"
                  sx={{
                    flex: "4",
                    flexWrap: "wrap",
                    marginTop: "20px",
                    height: "410px",
                    fontFamily: "fantasy",
                  }}
                >
                  <Typography
                    component="h1"
                    color="#38e"
                    fontWeight="800"
                    marginLeft="20px"
                    marginTop="-15px"
                    fontSize={isSmall ? "14px" : "30px"}
                    flexWrap="wrap"
                  >
                    {item.original_title}:({item.release_date})
                  </Typography>
                  <Typography
                    color="#fff"
                    fontWeight="700"
                    marginLeft="20px"
                    fontSize={isSmall ? "14px" : "18px"}
                  >
                    {item.tagline}
                  </Typography>
                  <Typography
                    color="#fff"
                    fontWeight="700"
                    marginLeft="20px"
                    fontSize={isSmall ? "14px" : "18px"}
                  >
                    STATUS: ({item.status})
                  </Typography>
                  <Typography
                    component="div"
                    fontSize={isSmall ? "14px" : "18px"}
                    color="#fff"
                    marginLeft="10px"
                    marginTop="10px"
                  >
                    {item.genres.map((g) => (
                      <Grid
                        marginLeft="10px"
                        fontSize="18px"
                        key={g.id}
                        display="flex"
                        flexDirection={isSmall ? "colunm" : "row"}
                      >
                        {g.name}:
                      </Grid>
                    ))}
                    <Grid
                      marginLeft="10px"
                      fontSize={isSmall ? "10px" : "18px"}
                      fontWeight="700"
                      color="#38e"
                    >
                      (Original Language:{item.original_language})
                    </Grid>
                  </Typography>
                  <Container
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexDirection: isSmall ? "colunm" : "row",

                      minHeight: "200px",
                    }}
                  >
                    <Box>
                      <Grid
                        marginLeft="10px"
                        fontSize="20px"
                        fontWeight="700"
                        color="#38e"
                        marginX="0px"
                      >
                        <i className="fa fa-volume-up" aria-hidden="true">
                          Spoken Languages
                        </i>
                      </Grid>
                      {item.spoken_languages.map((l) => (
                        <Typography
                          component="div"
                          color="#fff"
                          fontFamily="sanserif"
                          display="flex"
                          fontSize={isMobile ? "15px" : "18px"}
                          key={l.english_name}
                          marginBottom="8px"
                        >
                          <i className="fa fa-headphones" aria-hidden="true">
                            {l.english_name}:{l.iso_639_1}
                          </i>
                        </Typography>
                      ))}
                    </Box>
                    <Container
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flex: "1",
                      }}
                    >
                      <Typography
                        fontWeight="700"
                        color="#fff"
                        letterSpacing="2px"
                        fontSize={isMobile ? "15px" : "18px"}
                      >
                        <i className="fa fa-money" aria-hidden="true">
                          ${item.budget / 1000000}Mill
                        </i>
                      </Typography>
                      <Typography
                        fontSize={isMobile ? "15px" : "18px"}
                        fontWeight="700"
                        color="#fff"
                        textAlign="start"
                        letterSpacing="3.5px"
                      >
                        <a
                          href={item.homepage}
                          target="_blank"
                          style={{ color: "white" }}
                        >
                          <i className="fa fa-video-camera" aria-hidden="true">
                            FILMS
                          </i>
                        </a>
                      </Typography>
                      <Typography
                        fontSize={isMobile ? "15px" : "18px"}
                        fontWeight="700"
                        color="#fff"
                      >
                        <i className="fa fa-user-o" aria-hidden="true">
                          {adult}
                        </i>
                      </Typography>
                      <Typography
                        marginLeft="10px"
                        fontSize="20px"
                        fontWeight="700"
                        color="#38e"
                        marginX="23px"
                        marginBottom="-30px"
                      >
                        <i className="fa fa-clock-o" aria-hidden="true">
                          {item.runtime} Min
                        </i>
                      </Typography>
                    </Container>
                  </Container>
                  <Typography
                    component="div"
                    color="#fff"
                    fontFamily="sanserif"
                    marginLeft="15px"
                    display="flex"
                    fontSize={isMobile ? "13px" : "18px"}
                    marginTop={isMobile ? "5px" : "-70px"}
                  >
                    {item.overview}
                  </Typography>
                </Box>
              </Container>
              <Container
                sx={{
                  flexWrap: "wrap",
                  height: "150px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  textAlign: "center",
                  flex: "1",
                  transform: "translate(25px)",
                  marginTop: "35px",
                  paddingBottom: "20px",
                }}
              >
                <Grid
                  sx={{
                    flexWrap: "wrap",
                    height: "100%",
                    width: isMobile ? "80%" : "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                    textAlign: "center",
                  }}
                >
                  {item.production_companies.map((company) => (
                    <Card
                      key={company.id}
                      sx={{
                        height: isMobile ? "50px" : "100%",
                        width: isMobile ? "80px" : "150px",
                        display: isMobile ? "none" : "flex",
                        flexDirection: "column",
                        justifyContent: isMobile ? "center" : "flex-start",
                        alignItems: "center",
                        textAlign: "center",
                        bgcolor: "#38e",
                        color: "#fff",
                      }}
                    >
                      <CardMedia
                        component="div"
                        sx={{
                          height: isMobile ? "20px" : "100px",
                          width: "100%",
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.2),transparent),url(https://www.themoviedb.org/t/p/w220_and_h330_face/${company.logo_path})`,
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          display: isMobile ? "none" : "block",
                        }}
                      />

                      <Typography
                        fontWeight="100"
                        sx={{
                          fontSize: isMobile ? "10px" : "18px",
                        }}
                      >
                        <i className="fa fa-film" aria-hidden="true">
                          {company.name}
                        </i>
                      </Typography>
                      <Typography
                        fontWeight="100"
                        sx={{
                          fontSize: isMobile ? "10px" : "15px",
                          display: isMobile ? "none" : "block",
                        }}
                      >
                        {company.origin_country}
                      </Typography>
                    </Card>
                  ))}
                </Grid>
              </Container>
            </Container>
          ))}
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
