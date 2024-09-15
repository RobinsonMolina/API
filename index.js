const express = require('express');

const app = express();

app.set('PORT', process.env.PORT || 3000); // atraves de una variable de entorno

app.use(express.json()); // Para utilizar los JSon

//middleware
app.use('/departments', require('./routes/departments'))
app.use('/employees', require('./routes/employees'))

app.listen(app.get('PORT'), () => console.log(`Server ready at port ${app.get('PORT')}`));
