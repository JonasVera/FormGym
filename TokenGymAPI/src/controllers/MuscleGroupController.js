const GroupMuscle = require('../models/MuscleGroup');

module.exports = {
    // LIST ALL GROUPS OF MUSCLES
    async index(req,res){
        const groupMuscle = await GroupMuscle.findAll(
            {attributes:['id','name','category']}
        );
        return res.json(groupMuscle);
    },
    // ADD A NEW  GROUP OF MUSCLE
    async store(req,res){
        const  {name,category}  = req.body;
        const groupMuscle = await GroupMuscle.findOne({where:{name}});
        
        if(!groupMuscle){
            const groupMuscle = await GroupMuscle.create({name,category});
            return res.json(groupMuscle);
         }else{
            return res.status(400).json({error:'Grupo muscular já existe !!'});
         }
         
    },
    async delete (req,res){
       const {id_muscle_group} = req.params;
      
       let groupMuscle = await GroupMuscle.findByPk(id_muscle_group);
      
      if(!groupMuscle)
            return res.status(400).json({error:'Exercicio não existe'});

        groupMuscle =  await GroupMuscle.destroy({where:{id:id_muscle_group}});   
       return res.json(null);   
    },
    async update(req,res){
        const {id_muscle_group} = req.params;
        const  {name,category}  = req.body;
        
        let groupMuscle = await GroupMuscle.findByPk(id_muscle_group);
        
        if(!groupMuscle)
            return res.status(400).json({error:'Grupo muscular não existe'});

          groupMuscle = await GroupMuscle.update(
            {name, category, },
            {where:{id:id_muscle_group}
        });

        return res.json(groupMuscle);
 
    }
};