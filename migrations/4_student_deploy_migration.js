var StudentFi = artifacts.require("StudentContract");


module.exports = function(deployer) {
  deployer.deploy(StudentFi);
};
