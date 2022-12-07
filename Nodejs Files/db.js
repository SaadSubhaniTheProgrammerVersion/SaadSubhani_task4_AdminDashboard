const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CRUD_Admin', (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});

module.exports = mongoose;