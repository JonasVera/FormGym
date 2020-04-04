const Exercise = require('../models/Exercise');
const GroupMuscle = require('../models/MuscleGroup');
module.exports = {
    // LIST ALL GROUPS + WHIT EXERCISES ! /=> LISTA TODOS OS GRUPOS COM OS EXERCICIOS ASSOCIADOS
    async getExercises(req,res){
        const  {id_group_muscle}  = req.params;
        const exercise = await Exercise.findAll({
            attributes:['id','name','category'],
            where:{id_group_muscle:id_group_muscle}
        });
            
        return res.json(exercise);
    },
    async index(req,res){
      
        const groupMuscle = await GroupMuscle.findAll({
            attributes:['id','name','category'],
            include:
            {
            association:'exercises',
            attributes:['id','name','category'] //SÓ RETORNA ESSES DASDO DO JSON
                                               // O JSON  É AGRUPADO {GRP MUSCULAR : EXERCICIOS}    
            }
        });
        return res.json(groupMuscle);
    },
    // ADD A NEW EXERCISE // ADICIONA UM NOVO EXERCICIO
    async store(req,res){
        const  {id_group_muscle}  = req.params;
        const  {name,category}  = req.body;
        
        const group_muscle = await GroupMuscle.findByPk(id_group_muscle);
       
        // VERIFICA A INEXISTENCIA DE UM EXERCICIO
        if(!group_muscle){
            return res.status(400).json({error:'Grupo muscular não existe'});
        }
        
        const exercise = await Exercise.create({
            name,
            category,
            id_group_muscle
         });
        
        return res.json(exercise);
    },
    async update(req,res){
        const  {id_exercise}  = req.params;
        const  {name,category,id_group_muscle}  = req.body;
        
        let exercise = await Exercise.findByPk(id_exercise);
       
        // VERIFICA A INEXISTENCIA DE UM EXERCICIO
        if(!exercise)
            return res.status(400).json({error:'Exercicio não exite'});
        //VERIFICA SE JÁ EXISTE UM EXERCICO COM O NOME PASSADO VIA PARAMETRO
        if(exercise.name === name)
            return res.status(400).json({error: 'Já existe um exercicio com este nome'});
        
         exercise = await Exercise.update(
            {name,
            category,
            id_group_muscle},
            {where:{id:id_exercise}}
         );
        
        return res.json(exercise);
    },

    // DELETA UM RESGISTRO DE EXERCICIO
    async delete(req,res){
        const {id_exercise} = req.params;

        const exercise = await Exercise.findByPk(id_exercise);
        
        if(!exercise)
            return res.status(400).json({error:'Exercicio não existe'});
           
        Exercise.destroy({where:{id:id_exercise}});  

        return res.json(null);  
    }
    
};