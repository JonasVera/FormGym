import React, { useEffect, useState } from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardInfo from "./CardInfo";
import api from "../../services/api";
import AlertMsg from "../Components/AlertMsg";
import "./style.css";
export default function CadastroExercicios() {
  const [musculos, setMusculos] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState("");
  const [musculo, setMusculo] = useState("");
  const [musculoID, setMusculoID] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState();
  const [action, setAction] = useState();
  const [type, setType] = useState("warning");
  const userToken = localStorage.getItem("token");

  function newExercise() {
    setStatus("New");
    setName("");
    setMusculo("");
    setCategory("");
    setId("");
  }

  async function loadCardsExercises() {
    const resp = await api.get("musclegroup/exercise", {
      headers: { authorization: userToken },
    });

    setExercises(resp.data);
  }
  async function loadExercises() {
    const resp = await api.get("musclegroup", {
      headers: { authorization: userToken },
    });
    setMusculos(resp.data);
  }
  async function handleExercises(e) {
    e.preventDefault();
    if (
      !name ||
      category === "selecione" ||
      !musculoID ||
      musculo === "selecione"
    ) {
      setMsg("Preencha todos os dados para salvar ! ");
      setAction(true);
    }
    if (status === "Editar") {
      try {
        await api.put(
          "musclegroup/" + id + "/exercise",
          {
            name,
            category,
            musculoID,
          },
          { headers: { authorization: userToken } }
        );
        setMsg("Dados Editados com sucesso !");
        setType("success");
      } catch (err) {
        // setMsg("Erro ao editar", err);
        //setType("error");
        // setAction(true);
      }
    } else {
      if (!name || category === "Selecione") {
        return;
      } else {
        try {
          const resp = await api.post(
            "musclegroup/" + id + "/exercise",
            {
              name,
              category,
            },
            { headers: { authorization: userToken } }
          );
          setMsg("Exercicio salvos com sucesso !");
          setType("success");
          setAction(true);
        } catch (err) {
          // setMsg("Erro ao salvar exercicio", err);
          // setType("error");
          //setAction(true);
        }
      }
    }

    loadCardsExercises();
  }

  function loadCamposEdit(name, categoria, id_exercise, musculo, id_muscle) {
    setName(name);
    setCategory(categoria);
    setId(id_exercise);
    setMusculo(musculo);
    setMusculoID(id_muscle);
    setStatus("Editar");
  }

  async function handleDelete(id_exercise) {
    try {
      await api.delete(`musclegroup/${id_exercise}/exercise`, {
        headers: { authorization: userToken },
      });

      setMsg("Exercicio Excluido !");
      setType("success");
      setAction(true);
    } catch (err) {}
    loadCardsExercises();
  }
  useEffect(() => {
    loadExercises();
    loadCardsExercises();
  }, []);

  return (
    <>
      <AlertMsg action={action} type={type} msg={msg} />
      <Card className="cardForm" width={200} variant="outlined">
        <form onSubmit={handleExercises}>
          <CardContent>
            <Typography variant="h6" component="h6">
              Adicionar Exercicio
            </Typography>

            <Grid
              container
              className="textFieldSelect"
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item spacing={2}>
                <TextField
                  required
                  size="small"
                  label="Nome"
                  variant="outlined"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item spacing={2}>
                <TextField
                  SelectProps={{ native: true }}
                  size="small"
                  select
                  label="Musculo"
                  variant="outlined"
                  value={id}
                  required
                  onChange={(e) => setId(e.target.value)}
                >
                  <option select>
                    {status === "Editar" ? musculo : "Selecione"}
                  </option>
                  {musculos.map((musculo) => (
                    <option key={musculo.id} value={musculo.id}>
                      {musculo.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item spacing={2}>
                <TextField
                  SelectProps={{ native: true }}
                  size="small"
                  select
                  label="Categoria"
                  variant="outlined"
                  value={category}
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option select>
                    {status === "Editar" ? category : "Selecione"}
                  </option>
                  <option>Musculação</option>
                  <option>Aerobico</option>
                  <option>Hit</option>
                  <option>Fit</option>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              Salvar
            </Button>
            <Button
              variant="contained"
              type="resert"
              onClick={newExercise}
              size="small"
            >
              Novo
            </Button>
          </CardActions>
        </form>
      </Card>

      <Grid container spacing={2} direction="row" alignItems="center">
        {exercises.map((exercise) =>
          exercise.exercises.map((exer) => (
            <Grid item>
              <CardInfo
                key={exer.id}
                name={exer.name} // nome do exercicio
                category={exer.category} // categoria
                groupMuscle={exercise.category}
                musculo={exercise.name}
                categoryExercicio={exercise.category}
                onDelete={() => {
                  handleDelete(exer.id);
                }}
                onEdit={() => {
                  loadCamposEdit(
                    exer.name,
                    exercise.category,
                    exer.id,
                    exercise.name,
                    exercise.id
                  );
                }}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
