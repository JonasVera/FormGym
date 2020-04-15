import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import "./style.css";

export default function CardInfor({
  name,
  category,
  musculo,
  categoryExercicio,
  onDelete,
  onEdit,
}) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 200,
      maxHeight: 250,
      borderRadius: 0,
      marginLeft: 10,
      padding: 10,
      alignContent: "center",
      borderLeft: "solid 4 #000",
    },

    title: {
      fontSize: 14,
    },
  });
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <IconButton onClick={onDelete} aria-label="delete" color="secondary">
        <DeleteIcon />
      </IconButton>

      <Typography>Exercicio: {name}</Typography>
      <Divider />
      <Typography color="textSecondary">Musculo: {musculo}</Typography>
      <Typography color="textSecondary">Categoria: {category}</Typography>

      <Typography color="textSecondary">
        Sub Cartegoria: {categoryExercicio}
      </Typography>

      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={onEdit}
          fullWidth={"100%"}
          size="small"
        >
          Editar
        </Button>
      </CardActions>
    </Card>
  );
}
