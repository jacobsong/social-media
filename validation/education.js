const _ = require("lodash");

module.exports = function validateEducationInput(data) {
  let errors = {};

  if (_.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (_.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (_.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field is required";
  }

  if (_.isEmpty(data.from)) {
    errors.from = "From field is required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
