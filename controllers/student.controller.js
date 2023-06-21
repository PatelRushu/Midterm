const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');

// Fetch all students
exports.findAll =  (req, res) =>  {
  Student.find().then( students =>{
   res.send(students)
  }
  ).catch(err =>{
    res.status(500).send({
      'message': 'Something went wrong!!',
      'error' : err
    })
    });
};

// Fetch a single student by id
exports.findOne= (req, res) => {

  Student.findById(req.params.id).then(
    
    students =>{
        if(!students){
            res.status(404).send({
                "message" : "ID not found"
            })
        }
        res.send(students)
    }
).catch(err =>{
    res.status(500).send({
        'message': 'Something went wrong!!',
        'error' : err
    })
});
};

// Add a new student
exports.add = (req, res) => {
  const student = new Student({
    name : req.body.name ,
    age: req.body.age,
    major:req.body.major
})

student.save()
    .then(data=> res.send(data))
    .catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error' : err
        })
    });   
};

// Update a student by id
exports.update = (req, res) => {
  Student.findByIdAndUpdate(req.params.id, {

    name : req.body.name ,
    age: req.body.age,
    major:req.body.major
   }, {new : true}).then(
       students =>{
           if(!students){
               res.status(404).send({
                   "message" : "ID not found"
               })
           }
           res.send(students)
       }
   ).catch(err =>{
       res.status(500).send({
           'message': 'Something went wrong!!',
           'error' : err
       })
   });
  };
     
// Delete a student by id
exports.delete =  (req, res) => {
  Student.findByIdAndRemove(req.params.id).then(
    students =>{
        if(!students){
            res.status(404).send({
                "message": "ID not found"
            })
         }
        res.send({
            'message': 'ID got deleted!!'
        })
    }
).catch(err =>{
    res.status(500).send({
        'message': 'Something went wrong!!',
        'error':err
    })
});
}
  
  

  
