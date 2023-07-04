import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useMediaQuery } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function Header() {
  const save = JSON.parse(localStorage.getItem("newUser"))
  const navigate = useNavigate();
  const navegar = () => {
    navigate("/login");
  };
  const closeCuenta = () => {
    const confirmar = window.confirm("Esta seguro que desea salir?");
    if (confirmar) {
      navegar();
    }
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [foto, setFoto] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("miFoto") != null) {
      const dato = localStorage.getItem("miFoto");
      setFoto(dato);
    }
  }, []);
  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;
        localStorage.setItem("miFoto", base64Image);
        const foto = localStorage.getItem("miFoto");
        setFoto(foto);
      };

      reader.readAsDataURL(new Blob([selectedFile]));
    }
  }, [selectedFile]);
  const subirFoto = (e) => {
    const file = e;
    setSelectedFile(file);
  };
  
  const isSmallScreen = useMediaQuery("(max-width:500px)");
  return (
    <AppBar position="fixed">
      <Toolbar>
        {!isSmallScreen && (
          <Typography variant="h2" color="#fff" noWrap fontFamily="fantasy">
            TMDB
            <Link
              href="https://developer.themoviedb.org/docs/getting-started"
              target="_blank"
              color="inherit"
              underline="none"
            >
              .org
            </Link>
          </Typography>
        )}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50px",
              height: "90px",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <Typography component="h1" variant="h6">
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "secondary.main",
                  scale: "1.3",
                  marginTop: "10px",
                }}
                src={foto}
              ></Avatar>
            </Typography>

            <Typography component="h1" variant="h6">
              {save.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "80px",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                minWidth: 0,
                padding: 0,
                boxShadow: "none",
                marginTop: "20px",
                translate: "-30px",
              }}
            >
              <TextField
                type="file"
                sx={{
                  borderRadius: "100%",
                  width: "1px",
                  height: "1px",
                  minWidth: 0,
                  padding: 0,
                  boxShadow: "none",
                  opacity: 0,
                }}
                onChange={(e) => subirFoto(e.target.files[0])}
              />
              <i className="fa fa-file-image-o" aria-hidden="true"></i>
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                minWidth: 0,
                padding: 0,
                boxShadow: "none",
                marginTop: "5px",
                translate: "5px",
              }}
              onClick={() => closeCuenta()}
            >
              <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
