const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let persons = [
  {
    "id": 1,
    "nama": "Gilang bagus tri pambudo",
    "umur": 20,
    "alamat": {
      "jalan": "brawijaya permai",
      "kota": "banyuwangi"
    },
    "hobi": ["rebahan", "olahraga"]
  }
];

app.get('/person', (req, res) => {
  res.json(persons);
});

app.post('/person', (req, res) => {
  const newPerson = req.body;
  newPerson.id = persons.length + 1;
  persons.push(newPerson);
  res.status(201).json(newPerson);
});

app.delete('/person/:id', (req, res) => {
  const id = parseInt(req.params.id);
  persons = persons.filter(person => person.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
