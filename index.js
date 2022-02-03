/*
  Return a frequency hash of answers by question_id

  SAMPLE RETURN DATA: 
  {
    28726: {
      "Green": 1,
      "Blue": 3,
      "Yellow": 1,
      "Red": 1
    },
    92838: {
      "Pizza": 1,
      "Salad": 2
    }
  }
*/
const data = require('./data.json');

function count_survey_responses(data) {
  const  result = {};
  
 // Right your logic to build the result here

  return result;
}



count_survey_responses(data);


module.exports = { count_survey_responses };
