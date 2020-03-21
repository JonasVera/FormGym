const FormWorkout = require('../models/FormWorkout');
const ExerciseForm = require('../models/ExersiseForm');
 
module.exports = {
    // LIST ALL GROUPS OF MUSCLES
   
    // ADD A NEW  GROUP OF MUSCLE
    async index(req,res){
        const exerciseForm = await ExerciseForm.findAll({
           
            attributes:['repetition','time','obs','status_form'],
            include: 
             [
                {association:'allexercisesForm',
                 attributes:['day','obs','status_item'],
                
            },
                {association:'allexercises',
                attributes:['name'],
                
            }
            
                 
             ]
       });
        console.log("Exercicio: "+exerciseForm);
        
        return res.json(exerciseForm);    
    },
    async store(req,res){
      
        const  {id_exerciseForm} = req.params;
        const  {day,obs,status_item}  = req.body;
         
        const exerciseForm = FormWorkout.findByPk(id_exerciseForm);

        if(!exerciseForm)
            return res.status(400).json({error:'Exercicio não existe'});

        const formWorkout = await FormWorkout.create({
            day,
            obs,
            status_item,
            id_exerciseForm
        });
       
        return res.json(formWorkout);
    
    },
    async delete(req,res){
        const {id} = req.params;
       
        const formWorkout = await FormWorkout.findByPk(id);
       
        if(!formWorkout)
            return res.status(400).json({error:'Item inexistente !'});
 
         FormWorkout.destroy({where:{id:id}});   
         return res.json(null);    
    }
};