module.exports = (app) =>{
  const students = require('../controllers/student.controller');

  app.post('/students', students.add);

  // Retrieve all students

  app.get('/students', students.findAll);

  // retrieve a single todo by id
  app.get('/students/:id', students.findOne);

  // Update  a Todo with id
  app.put('/students/:id', students.update);

  // Delete a Todo by Id
  app.delete('/students/:id', students.delete);

}