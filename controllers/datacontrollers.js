const Data = require('../models/datamodel');
const mongoose = require('mongoose');

// const getDept = async(req,res)=>{
    const getDept = async (req, res) => {
        try {
          const getdata = await Data.find({}).sort({ createdAt: -1 });
          res.status(200).json(getdata);
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while fetching tasks' });
        }
      };
// }





//create 
const createEmpl = async(req,res)=>{
    const {Name, Surname, Department} = req.body

    try{
        const data = await Data.create({Name, Surname, Department});
        res.status(201).json(data);
} catch (error){
    res.status(404).json(error)
}
};


//Delete employee
const deleteEmpl = async(req,res) =>{
    const {id}= req.params;

    try{
        const empData=await Data.findByIdAndRemove(id);

        if(!empData){
            return res.status(404).json({ error: 'Empl not found' });
        }
        res.status(200).json({ error: 'An error occurred while deleting the Empl' })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the task' });
    }
};


//Update
const updateEmpl= async (req, res) => {
    const { id } = req.params;
  
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid Emppl ID' });
      }
  
      const delempl = await Data.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!delempl) {
        return res.status(404).json({ error: 'Empl not found' });
      }
  
      res.status(200).json(delempl);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the task' });
    }
  };

  module.exports = {
    getDept,
    createEmpl,
    deleteEmpl,
    updateEmpl
  }
