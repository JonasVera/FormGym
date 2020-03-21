const Exercise = require('../models/Exercise')
const ExerciseForm = require('../models/ExersiseForm');

module.exports = {
   
    async index(req,res){
       
      const exercise = await Exercise.findAll({
          attributes:['id','name','category'],
          include:[
              {association: 'MuscleGroups',attributes:['id','name','category']},
              {association: 'exerciseForms',attributes:['id','repetition','time','obs','status_form']}// EXERCICIO
               // formExercicio
          ]
      });
            return res.json(exercise);
     },
 
    // ADD A NEW EXERCISE FORM / adiciona um novo exercicio ao item de ficha 
    async store(req,res){
        const  {id_exercise} = req.params;
      
        const {repetition,time,obs,status_form} = req.body;
        
       const exercise = await Exercise.findByPk(id_exercise);
        
        // verifica a inexistencia de um exercicio antes de inserir no item de ficha
        if(!exercise) 
           return res.status(400).json({error:'Exercicio já existe'});
         
           // CRIA O ITEM DA FICHA
        const exerciseForm = await ExerciseForm.create({
            repetition,  time,
            status_form, obs,
            id_exercise
        
     });
        // RETORNA O ITEM CADASTRADO
       return res.json(exerciseForm);
 
    }, 
    async update(req,res){
        const  {id} = req.params;
      
        const {repetition,time,obs,status_form} = req.body;
        
        let exerciseForm = await ExerciseForm.findByPk(id);
        
        // verifica a inexistencia de um exercicio antes de inserir no item de ficha
        if(!exerciseForm) 
           return res.status(400).json({error:'Item inexistente'});
         
           // CRIA O ITEM DA FICHA
          exerciseForm = await ExerciseForm.update(
            {repetition,  time,
            status_form, obs},
            {where:{id:id}}
           );
        // RETORNA O ITEM CADASTRADO
       return res.json(exerciseForm);
 
    },
    
    async delete (req,res){
        const {id} = req.params;
       
       const exerciseForm = await ExerciseForm.findByPk(id);
       
       if(!exerciseForm)
            return res.status(400).json({error:'Item inexistente !'});
 
         ExerciseForm.destroy({where:{id:id}});   
        return res.json(null);   
     }
    
};