const db = require('./model')

db.sync({force:true})
.then(() => {
  console.log('successfully connected to database!')
  db.close()
  })
  .catch (err => {
    console.log('something went wrong')
    db.close()
  })
