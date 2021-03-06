var mongoose = require('mongoose');

var ProfessorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    numberEvaluated: {type: Number, default: 0},
    attr: {
        respect:                {type: Number, default: 0},
        approachability:        {type: Number, default: 0},
        encouragement:          {type: Number, default: 0},
        fairness:               {type: Number, default: 0},
        teaching:               {type: Number, default: 0},
        presentation:           {type: Number, default: 0},
        mastery:                {type: Number, default: 0},
        updated:                {type: Number, default: 0},
        confidence:             {type: Number, default: 0},
        communication:          {type: Number, default: 0},
        punctuality:            {type: Number, default: 0},
        timeManagement:         {type: Number, default: 0},
        consistency:            {type: Number, default: 0},
        classManagement:        {type: Number, default: 0},
        asset:                  {type: Number, default: 0}
    }
})

module.exports = mongoose.model('Professor', ProfessorSchema);