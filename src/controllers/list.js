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