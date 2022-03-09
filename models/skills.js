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
    typeOfSkill: {
        type: String,
        required: [true, "please enter whether it is a hard or soft skill."]
    },
    typeOfSkill: {
        type: String,
        required: [true, "please enter whether it is a hard or soft skill."]
    },
    image: {
        type: String,
        required: [true, "please enter image link."]
    }

});

//compiling the schema into model
const Skills = mongoose.model("Skills", skillsSchema);
module.exports = Skills;