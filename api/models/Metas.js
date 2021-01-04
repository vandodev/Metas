const mongoose = require('mongoose');
const {schema} = mongoose;

const meta = new schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String
    }
},{
    timestamps:true
})

//const schema = new mongoose.Schema({ name: 'string', size: 'string' });
//const Tank = mongoose.model('Tank', schema);
mongoose.model('Meta', meta);