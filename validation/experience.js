const _ = require("lodash");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  if (_.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  if (_.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  if (_.isEmpty(data.from)) {
    errors.from = "From field is required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
