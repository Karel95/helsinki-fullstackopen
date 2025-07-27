require('dotenv').config()
const mongoose = require('mongoose')

if (!process.env.MONGODB_URI) {
  console.log('Error: MONGODB_URI environment variable is not defined in .env file')
  process.exit(1)
}

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

// Case 1: List all persons (e.g., `node mongo.js`)
if (process.argv.length === 2) {
  console.log('phonebook:')
  Person.find({}).then((persons) => {
    persons.forEach((p) => {
      console.log(p.name, p.number)
    })
    mongoose.connection.close()
  })
// Case 2: Add a new person (e.g., `node mongo.js "Arto Vihavainen" "045-1232456"`)
} else if (process.argv.length === 4) {
  const name = process.argv[2]
  const number = process.argv[3]

  const person = new Person({ name, number })

  person.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('Invalid number of arguments.')
  console.log('To list all entries: node mongo.js')
  console.log('To add an entry:    node mongo.js "<name>" "<number>"')
  mongoose.connection.close()
}
