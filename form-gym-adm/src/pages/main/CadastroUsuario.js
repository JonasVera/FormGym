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
import api from "../../services/api";
import BarMenu from "./BarMenu";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "3%",
    paddingTop: "1%",
    minWidth: 275,
  },

  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 10,
  },
  textField: {
    marginBottom: 15,
    width: "100%",
    maxWidth: 400,
  },
});

export default function Login() {
  const classes = useStyles();

  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = useState();
  const [msgType, setMsgType] = useState("warning");
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type_user, setType_user] = useState("Adm");
  const [confirmPassword, setConfirmPassword] = useState();

  const handleClick = () => {
    setOpen(true);
  };

  async function handleUser(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMsg("Senha não confere !");
      setOpen(true);
    } else if (!password || !name || !email) {
      setMsg("Campos em branco não são permitidos");
      setOpen(true);
    } else {
      try {
        const resp = await api.post("user", {
          name,
          email,
          password,
          type_user,
        });

        setMsg("Cadastro efetuado com sucesso !");
        setMsgType("success");
        setOpen(true);
        history.push("/");
      } catch (err) {
        setMsg("Erro ao cadastrar usuário tente novamente");
        setMsgType("warning");
        setOpen(true);
      }
    }
  }

  return (
    <React.Fragment>
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
              Cadastre-se na Form Gym
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

            <Grid container direction="row" justify="center">
              <form
                onSubmit={handleUser}
                className={classes.root}
                autoComplete="off"
              >
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    className={classes.textField}
                    label="Nome de usuario"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    size="small"
                    required
                    className={classes.textField}
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    labelWidth={70}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    size="small"
                    id="outlined-basic"
                    required
                    className={classes.textField}
                    label="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    labelWidth={70}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    size="small"
                    id="outlined-basic"
                    className={classes.textField}
                    label="Confirmar senha"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  Cadastrase-se
                </Button>
              </form>
            </Grid>
          </CardContent>

          <CardActions>
            <Typography color="textSecondary">
              Não esqueça de prencher informações adicionais na sua conta
            </Typography>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}
