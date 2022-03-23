const mongoose = require('mongoose');


const skillsSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: [true, "please add a skill."]
    },
    proficiencyLevel: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, "please enter proficiency level"]
    },
    image: {
        type: String,
        required: [true, "please enter image link."]
    },
    category:{
        type:String,
        required:[true, 'please enter a category.']
    },
    description:{
        type:String,
        required:[false]
    }

});

//compiling the schema into model
const Skills = mongoose.model("Skills", skillsSchema);
module.exports = Skills;