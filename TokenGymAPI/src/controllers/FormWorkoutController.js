const FormWorkout = require('../models/FormWorkout');
const ExerciseForm = require('../models/ExersiseForm');
 
module.exports = {
    
    async index(req,res){
        const formWorkout = await FormWorkout.findAll( );
        
        return res.json(formWorkout);    
    },
    async store(req,res){
        const  {name}  = req.body;
 
        const formWorkout = await FormWorkout.create({
            name
        });
       
        return res.json(formWorkout);
    
    },
    async update(req,res){
      
        const  {id} = req.params;
        const  {name,obs}  = req.body;

        let formWorkout = await FormWorkout.findByPk(id);

        if(!formWorkout)
            return res.status(400).json({error:'Este item não existe'});

          formWorkout = await FormWorkout.update(
            {name,obs},
            {where:{id:id}}

        );
       
        return res.json(formWorkout);
    
    },
    async delete(req,res){
        const {id} = req.params;
        let formWorkout = await FormWorkout.findByPk(id);

        if(!formWorkout)
            return res.status(400).json({error:'Este item não existe'});
 
         FormWorkout.destroy({where:{id:id}});   
         return res.json(null);    
    }
};