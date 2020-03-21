const GroupMuscle = require('../models/MuscleGroup');

module.exports = {
    // LIST ALL GROUPS OF MUSCLES
    async index(req,res){
        const groupMuscle = await GroupMuscle.findAll();
        return res.json(groupMuscle);
    },
    // ADD A NEW  GROUP OF MUSCLE
    async store(req,res){
        const  {name,category}  = req.body;
        const groupMuscle = await GroupMuscle.create({name,category});
        return res.json(groupMuscle);
    },
    async delete (req,res){
       const {id_muscle_group} = req.params;
      
      const groupMuscle = await GroupMuscle.findByPk(id_muscle_group);
      
      if(!groupMuscle)
            return res.status(400).json({error:'Exercicio não existe'});

       GroupMuscle.destroy({where:{id:id_muscle_group}});   
       return res.json(null);   
    }
};