import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useMediaQuery } from "@mui/material";
function Copyright() {
  return (
    <Typography variant="body2" color="#fff" align="center" fontSize="12px">
      &copy; {new Date().getFullYear()} The movie DB. Todos los derechos
      reservados.
    </Typography>
  );
}
const Footer = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1877ec",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          padding: "5px",
          marginBottom: "20px",
          justifyContent: isMobile ? "flex-start" : "space-evenly",
          alignItems: isMobile ? "center" : "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "5px",
            height: "40px",
            width: "100px",
          }}
        >
          <Typography
            variant="h4"
            align="left"
            gutterBottom
            fontWeight="900"
            color="#fff"
            width="100px"
            fontSize="50px"
            display={isMobile ? "none" : "block"}
          >
            TMDB
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              marginRight: "10px",
              color: "#fff",
              fontSize: isMobile ? "16px" : "20px",
              fontFamily: "sans-serif",
            }}
          >
            Redes Sociales
          </Typography>
          <Typography>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener"
              sx={{
                marginRight: "10px",
                color: "#fff",
                fontSize: isMobile ? "15px" : "20px",
                fontFamily: "sans-serif",
              }}
            >
              <i className="fa fa-facebook" aria-hidden="true">
                {" "}
                Facebook
              </i>
            </Link>
          </Typography>
          <Typography>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener"
              sx={{
                marginRight: "10px",
                color: "#fff",
                fontSize: isMobile ? "15px" : "20px",
                fontFamily: "sans-serif",
              }}
            >
              <i className="fa fa-twitter" aria-hidden="true">
                Twiter
              </i>
            </Link>
          </Typography>
          <Typography>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener"
              sx={{
                marginRight: "10px",
                color: "#fff",
                fontSize: isMobile ? "15px" : "20px",
                fontFamily: "sans-serif",
              }}
            >
              <i className="fa fa-instagram" aria-hidden="true">
                {" "}
                Instagram
              </i>
            </Link>
          </Typography>
          <Typography>
            <Link
              href="https://www.telegram.com"
              target="_blank"
              rel="noopener"
              sx={{
                marginRight: "10px",
                color: "#fff",
                fontSize: isMobile ? "15px" : "20px",
                fontFamily: "sans-serif",
              }}
            >
              <i className="fa fa-telegram" aria-hidden="true">
                {" "}
                Telegram
              </i>
            </Link>
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              marginRight: "10px",
              color: "#fff",
              fontSize: isMobile ? "15px" : "20px",
              fontFamily: "sans-serif",
            }}
          >
            Sobre la Empresa
          </Typography>
          <Typography>
            <Link
              href="#"
              target="_blank"
              rel="noopener"
              sx={{
                marginRight: "10px",
                color: "#fff",
                fontSize: isMobile ? "15px" : "20px",
                fontFamily: "sans-serif",
              }}
            >
              <i className="fa fa-address-card-o" aria-hidden="true">
                {" "}
                Quienes somos
              </i>
            </Link>
          </Typography>
          <Typography>
            <Link
              href="#"
              target="_blank"
              rel="noopener"
              sx={{
                marginRight: "10px",
                color: "#fff",
                fontSize: isMobile ? "15px" : "20px",
                fontFamily: "sans-serif",
              }}
            >
              <i className="fa fa-hand-o-right" aria-hidden="true">
                Misión
              </i>
            </Link>
          </Typography>
          <Typography>
            <Link
              href="#"
              target="_blank"
              rel="noopener"
              sx={{
                marginRight: "10px",
                color: "#fff",
                fontSize: isMobile ? "15px" : "20px",
                fontFamily: "sans-serif",
              }}
            >
              <i className="fa fa-camera" aria-hidden="true">
                {" "}
                Visión
              </i>
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box>
        <Copyright></Copyright>
      </Box>
    </Box>
  );
};

export default Footer;
