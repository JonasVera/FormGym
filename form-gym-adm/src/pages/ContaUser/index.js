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
import AlertMsg from "../Components/AlertMsg";
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

  const [msg, setMsg] = useState();
  const [type, setType] = useState("success");
  const [action, setAction] = useState();

  const [dataCadastro, setDataCadastro] = useState();
  const [dataAtualizacao, setDataAtualizacao] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [status, setStatus] = useState("Ativo");
  const [sex, setSex] = useState("Masculino");
  const [weigth, setWeigth] = useState();
  const [height, setHeight] = useState();
  const [category, setCategory] = useState("Iniciante");
  const [respiratory_problem, setRespiratory_problem] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordDef, setPasswordDef] = useState();
  const [date_of_birth, setDate_of_birth] = useState();
  const id = parseInt(localStorage.getItem("id_user"));
  const user = localStorage.getItem("user");
  const [progresCampos, setProgresCampos] = useState(100);
  const token = localStorage.getItem("token");
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

    setSex(resp.data.sex);
    setStatus(resp.data.status);
    setCategory(resp.data.category);
    setRespiratory_problem(resp.data.respiratory_problem);
    setHeight(resp.data.height);
    setWeigth(resp.data.weigth);
    let ts = resp.data.date_of_birth.split("T");

    setDate_of_birth(ts[0]);
  }
  async function handleUpdatePassword(e) {
    e.preventDefault();
    console.log(password, confirmPassword);
    try {
      if (password !== confirmPassword) {
        setType("warning");
        setMsg("Senhas não conferen, digite a senha duas vezes ! ");
        setAction(true);
      }
      if (!passwordDef || !confirmPassword || !password) {
        setType("warning");
        setMsg("Campos em branco !");
        setAction(true);
      } else {
        await api.put("/user/updatepassword", {
          id,
          password,
        });
        setMsg("Senha atualizada com sucesso !");
        setType("success");
        setAction(true);
      }
    } catch (err) {
      setMsg("Erro ao atualizar senha");
      setAction(true);
    }
  }
  function informacaoPerfil() {
    if (!date_of_birth || date_of_birth === "")
      setProgresCampos(progresCampos - 10);
    if (!height || height === "") setProgresCampos(progresCampos - 10);
    if (!weigth || weigth === "") setProgresCampos(progresCampos - 10);
    if (!respiratory_problem === "") setProgresCampos(progresCampos - 10);
    if (!sex || sex === "") setProgresCampos(progresCampos - 10);
    if (!category || category === "") setProgresCampos(progresCampos - 10);
  }

  async function handleUser(e) {
    e.preventDefault();
    let format = date_of_birth.split("-");
    let concat = format[2] + "/" + format[1] + "/" + format[0];
    setDate_of_birth(concat);
    const resp = await api.put("user", {
      id,
      name,
      email,
      sex,
      height,
      weigth,
      status,
      category,
      respiratory_problem,
      date_of_birth,
    });

    setMsg("Dados Atualizados com sucesso !!");
    setAction(true);
    loadUser();
    informacaoPerfil();
  }

  useEffect(() => {
    loadUser();
    informacaoPerfil();
  }, []);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item>
          <Card>
            <AlertMsg action={action} msg={msg} type={type} />
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
                  {progresCampos >= 90
                    ? "Seu perfil está concluido !"
                    : "Ainda Falta algumas informações"}
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
              <form onSubmit={handleUpdatePassword}>
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
                  value={passwordDef}
                  onChange={(e) => setPasswordDef(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  size="small"
                  className={classes.chip}
                  fullWidth={"100%"}
                  type="password"
                  id="outlined-basic"
                  label="Nova Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  size="small"
                  className={classes.chip}
                  fullWidth={"100%"}
                  type="password"
                  id="outlined-basic"
                  label="Confirmar nova Senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  variant="outlined"
                />
                <Button
                  size="small"
                  type="submit"
                  variant="contained"
                  fullWidth={"100%"}
                  color="primary"
                  className={classes.chip}
                >
                  Redefinir senha
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Card className={classes.card}>
          <CardContent>
            <form onSubmit={handleUser}>
              <Typography variant="h5" component="h2"></Typography>
              <Grid container>
                <Grid item>
                  <TextField
                    size="small"
                    className={classes.textField}
                    id="outlined-basic"
                    label="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setStatus(e.target.value)}
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
                    onChange={(e) => setDate_of_birth(e.target.value)}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <option select value={"Masculino"}>
                      Masculino
                    </option>
                    <option value={"Feminino"}>Feminino</option>
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
                    onChange={(e) => setCategory(e.target.value)}
                    variant="outlined"
                  >
                    <option select value={"Iniciante"}>
                      Iniciante
                    </option>
                    <option value={"Intermediario"}>Intermediario</option>
                    <option value={"Profissional"}>Profissional</option>
                    <option value={"Bodybuilder"}>Bodybuilder</option>
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
                    value={respiratory_problem}
                    onChange={(e) => setRespiratory_problem(e.target.value)}
                  >
                    <option value={"Sim"}>Sim</option>
                    <option value={"Nao"}>Não</option>
                  </TextField>
                </Grid>
              </Grid>
              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  color="primary"
                >
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
