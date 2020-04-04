const Exercise = require('../models/Exercise')
const ExerciseForm = require('../models/ExersiseForm');

module.exports = {
   
    async index(req,res){
      const {id} = req.params;  
      const exercise = await Exercise.findAll(
         {

          attributes:['id','name'],
          include:[
              {association: 'MuscleGroups',attributes:['id','name','category']},
              {association: 'exerciseForms',attributes:['id_formWorkout','id','repetition','time','day'],

              where:{id_formWorkout:id} // FILTRA/ RETORNA OS ITENS DE UMA FICHA
            
              }
                
         ]
      });
            return res.json(exercise);
     },
 
    // ADD A NEW EXERCISE FORM / adiciona um novo exercicio ao item de ficha 
    async store(req,res){
       // um item é obrigatoriamente adicionado a uma ficha 
       const  {id_exercise} = req.params;
      
      const {id_formWorkout,day,repetition,time} = req.body;
      const exercise = await Exercise.findByPk(id_exercise);
       
      
           // CRIA O ITEM DA FICHA E VINCULA A FICHA
        const exerciseForm = await ExerciseForm.create({
           id_formWorkout, id_exercise ,repetition,time,day,
            
     });
        // RETORNA O ITEM CADASTRADO
       return res.json(exerciseForm);
 
    }, 
    async update(req,res){
      const  {id} = req.params;
      
      const {id_formWorkout,day,repetition,time} = req.body;
        
        let exerciseForm = await ExerciseForm.findByPk(id);
        
        // verifica a inexistencia de um exercicio antes de inserir no item de ficha
        //if(!exerciseForm) 
        //   return res.status(400).json({error:'Item inexistente'});
         
           // CRIA O ITEM DA FICHA
          exerciseForm = await ExerciseForm.update(
            id_formWorkout, id ,repetition,time,day,
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