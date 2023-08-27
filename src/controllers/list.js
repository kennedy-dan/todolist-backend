const Lists = require('../model/list')

exports.createToDos = async (req, res) => {
    const toDos = {
        //get the todolist content of the body
        todolist: req.body.todolist,
    };
    // create a new list
    const newtodolist =  new Lists(toDos);
    try {
      //save list to the database
      const todolists = await newtodolist.save();
      res.send(todolists);
    } catch (err) {
      console.log(err);
    }

  };


  exports.updateTodos = async(req, res) => {
    try {
         const todosId = req.params.todo
        const updatedToDos = await Lists.findOneAndUpdate(
          { _id: todosId },
          {todolist: req.body.todolist},        
          { new: true }
        );
        console.log(updatedToDos);
  
        res.status(200).json(updatedToDos);
      // }
  
     
    } catch (error) {
      console.log(error);
    }
  } 