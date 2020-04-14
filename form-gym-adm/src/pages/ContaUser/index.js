import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import api from "../../services/api";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    paddingTop: 3,
  },
  card: {
    width: "60%",
    marginLeft: 10,
  },
  cardSenha: {
    marginTop: 10,
    width: 300,
    padding: 10,
  },
  textField: {
    padding: 8,
    marginTop: 3,
    minWidth: 280,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(1, 1),
  },
  section2: {
    margin: theme.spacing(0.5, 0.5, 0.5),
  },
  section3: {
    margin: theme.spacing(0.5, 0.5, 0.5),
  },
}));

export default function ContaUser() {
  const classes = useStyles();

  const [dataCadastro, setDataCadastro] = useState();
  const [dataAtualizacao, setDataAtualizacao] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [status, setStatus] = useState();
  const [sex, setSex] = useState();
  const [weigth, setWeigth] = useState();
  const [height, setHeight] = useState();
  const [category, setCategory] = useState();
  const [Respiratory_problem, setRespiratory_problem] = useState();
  const [password, setPassword] = useState();
  const [date_of_birth, setDate_of_birth] = useState();
  const id = localStorage.getItem("id_user");
  const user = localStorage.getItem("user");
  const [progresCampos, setProgresCampos] = useState(20);

  async function loadUser() {
    const resp = await api.get(`user/${id}`);

    setName(resp.data.name);
    setEmail(resp.data.email);
    var dateCr = new Date(resp.data.createdAt);
    var dateUP = new Date(resp.data.updatedAt);

    let dateFormCR = format(dateCr, "dd/MM/yyyy");
    let dateFormUP = format(dateUP, "dd/MM/yyyy");

    setDataCadastro(dateFormCR);
    setDataAtualizacao(dateFormUP);
  }

  async function register(e) {
    e.preventDefault();
    await api.put("user", {
      id,
      name,
      email,
      sex,
      height,
      weigth,
      status,
      category,
      date_of_birth,
    });
  }

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item>
          <Card>
            <div className={classes.root}>
              <div className={classes.section1}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h5">
                      Usuario : {user}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                  Data de Cadastro: {dataCadastro}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  Ultima atualização: {dataAtualizacao}
                </Typography>
              </div>
              <Divider variant="middle" />
              <div className={classes.section2}>
                <Typography gutterBottom variant="body1">
                  Ainda Falta algumas informações
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progresCampos + 10}
                  color="Primary"
                />
              </div>
              <div className={classes.section3}>
                <Button color="primary"></Button>
              </div>
            </div>
          </Card>
          <Card className={classes.cardSenha}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Redefinir Senha
            </Typography>
            <CardContent>
              <TextField
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.chip}
                fullWidth={"100%"}
                type="password"
                id="outlined-basic"
                label="Senha Atual"
                variant="outlined"
              />
              <TextField
                size="small"
                className={classes.chip}
                fullWidth={"100%"}
                type="password"
                id="outlined-basic"
                label="Nova Senha"
                variant="outlined"
              />
              <TextField
                size="small"
                className={classes.chip}
                fullWidth={"100%"}
                type="password"
                id="outlined-basic"
                label="Confirmar nova Senha"
                variant="outlined"
              />
              <Button
                size="small"
                variant="contained"
                fullWidth={"100%"}
                color="primary"
                className={classes.chip}
              >
                Redefinir senha
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Card className={classes.card}>
          <CardContent>
            <form onSubmit={register}>
              <Typography variant="h5" component="h2"></Typography>
              <Grid container>
                <Grid item>
                  <TextField
                    size="small"
                    className={classes.textField}
                    id="outlined-basic"
                    label="Nome"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    type="email"
                    className={classes.textField}
                    id="outlined-basic"
                    fullWidth="100%"
                    label="E-mail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    size="small"
                    select
                    SelectProps={{ native: true }}
                    label="Status"
                    variant="outlined"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option>Ativo</option>
                    <option>Inativo</option>
                  </TextField>
                </Grid>

                <Grid item>
                  <TextField
                    size="small"
                    type="date"
                    defaultValue="2020-03-24"
                    className={classes.textField}
                    id="outlined-basic"
                    fullWidth="100%"
                    value={date_of_birth}
                    label="Data Nascimento"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    SelectProps={{ native: true }}
                    size="small"
                    select
                    label="Sexo"
                    variant="outlined"
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                    value={sex}
                  >
                    <option>Masculino</option>
                    <option>Feminino</option>
                  </TextField>
                </Grid>
              </Grid>

              <Typography
                size="small"
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Saude
              </Typography>
              <Divider />
              <Grid container>
                <Grid item>
                  <TextField
                    size="small"
                    className={classes.textField}
                    type="number"
                    id="outlined-basic"
                    label="Peso"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={weigth}
                    onChange={(e) => {
                      setWeigth(e.target.value);
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    className={classes.textField}
                    type="number"
                    id="outlined-basic"
                    fullWidth="100%"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Altura"
                    value={height}
                    onChange={(e) => {
                      setHeight(e.target.value);
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.textField}
                    size="small"
                    select
                    SelectProps={{ native: true }}
                    size="small"
                    label="Categoria"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    variant="outlined"
                  >
                    <option>Iniciante</option>
                    <option>Intermediario</option>
                    <option>Profissional</option>
                    <option>Bodybuilder</option>
                  </TextField>
                </Grid>

                <Grid item>
                  <TextField
                    className={classes.textField}
                    SelectProps={{ native: true }}
                    size="small"
                    select
                    label="Problema respiratorio ?"
                    variant="outlined"
                    value={Respiratory_problem}
                    onChange={(e) => {
                      setRespiratory_problem(e.target.value);
                    }}
                  >
                    <option>Sim</option>
                    <option>Não</option>
                  </TextField>
                </Grid>
              </Grid>
              <CardActions>
                <Button variant="contained" size="small" color="primary">
                  Salvar
                </Button>

                <Button variant="outlined" size="small">
                  Redefinir
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
