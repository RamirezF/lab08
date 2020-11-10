var mongoose = require('mongoose');

Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/test");

var modelSchema = new Schema({
    nombre : {type:String, required:true},
    descripcion : {type:String, required:true},
    imagen : String,
    precio : {type:String, required:true}
});

var Schema = new Schema({
    name:String,
    binary: Buffer,
    living : Boolean,
    updated : {type: Date, default: Date.now},
    age : {type: Number, min:18, max:65, required: true},
    mixed : mongoose.Schema.Types.mixed,
    _someId : mongoose.Schema.Types.ObjectId,
    array : [],
    ofString : [String],
    nested : { stuff : {type : String, lowercase : true, trim : true}}
});

model = mongoose.model('producto', modelSchema, 'producto');
module.exports = model;
