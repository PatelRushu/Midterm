const express = require('express');
const router = express.Router();
const Student = require('../students/student');

// Fetch all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Fetch a single student by id
router.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
});

// Add a new student
router.post('/students', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

// Update a student by id
router.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body, updatedDate: Date.now() } },
      { new: true }
    );
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json({ message: 'Student deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete student' });
    }
  });
     
// Delete a student by id
router.delete('/students/:id', async (req, res) => {
    try {
      const student = await Student.findByIdAndRemove(req.params.id);
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json({ message: 'Student deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete student' });
    }
  });
  



  module.exports = router;
  
