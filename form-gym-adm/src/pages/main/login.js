import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import BarMenu from "./BarMenu";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    marginTop: "7%",
    paddingTop: "1%",
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginBottom: 15,
    width: "100%",
    maxWidth: 400,
  },
});

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = useState();
  const [msgType, setMsgType] = useState("warning");
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const history = useHistory();
  const handleClick = () => {
    setOpen(true);
  };

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Campos em branco !");
      setOpen(true);
    } else {
      try {
        const resp = await api.post("user/authenticate", {
          email,
          password,
        });
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("user", resp.data.name);

        setMsg("Login Efetuado com sucesso !");
        setMsgType("success");
        setOpen(true);
        history.push("/Authenticate");
      } catch (error) {
        setMsg("Erro ao tentar fazer login com este usuário");
        setOpen(true);
      }
    }
  }
  return (
    <>
      <BarMenu />

      <CssBaseline />
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              Login Form Gym
            </Typography>
            <Divider />

            <Snackbar
              open={open}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              autoHideDuration={60}
            >
              <Alert elevation={6} variant="filled" severity={msgType}>
                {msg}
              </Alert>
            </Snackbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <form
                className={classes.root}
                onSubmit={handleLogin}
                autoComplete="off"
              >
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={classes.textField}
                    label="E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    type="password"
                    className={classes.textField}
                    label="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    labelWidth={70}
                  />
                </Grid>

                <Button
                  variant="outlined"
                  size="small"
                  type="submit"
                  fullWidth={"100%"}
                  color="primary"
                  className={classes.margin}
                >
                  Login
                </Button>
              </form>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Typography color="textSecondary">
              Ainda não é cadastrado ?
            </Typography>
            <Button
              href="/Cadastro"
              size="large"
              color="primary"
              className={classes.margin}
            >
              Cadastre-se agora mesmo !!
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
