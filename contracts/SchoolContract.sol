//SPDX-License-Identifier:GPL-3.0
pragma solidity ^0.8.11; //defining compiler version
import './UserContract.sol';
import './StudentContract.sol';

contract SchoolContract is UserContract{
    address payable[] public schoolStudents;
    bool studentInSchool;
    address[] public schoolStudent;
    
    address[] public Records;
    address[] public addressValues;
    
    mapping (address => address) public mappedStudents;
    
  
    // StudentContract public studentcontract;
     
    // constructor(address _studentcontract) public{
    //      studentcontract = StudentContract(_studentcontract);
    //  } 
    
    function addStudent( address _schoolAddress, address _studentAddress, string memory _studentName, string memory _firstname, string memory _lastname, string memory _email) public{
        User storage user = users[_studentAddress];
        require(!user.set);
        users[_studentAddress] = User({
        // id: _userId,
        school: _schoolAddress,
        name: _studentName,
        firstname: _firstname,
        lastname: _lastname,
        email: _email,
        set: true
        });
        
        Records.push(_studentAddress);
        mappedStudents[_studentAddress] = _schoolAddress;
    }
    
    function hasStudent(address _stuAddress) public view returns(bool){
        if(users[_stuAddress].set == true){
            return true;
        }
        else return false;
    }
    
    function getStudent(address _stuAddress) public  view returns(string memory){
        string memory answer = users[_stuAddress].name;
        return answer;
    }
    
    function getStudents(address _schoolAddress) public returns(address[] memory){
        delete addressValues;
        for(uint i=0; i< Records.length; i++) {
            if (mappedStudents[Records[i]]==_schoolAddress) {
                addressValues.push(Records[i]);
            }
        }
        
        return addressValues;
    }
    
    function studentCount(address _schoolAddress) public returns(uint){
        delete addressValues;
        for(uint i=0; i< Records.length; i++) {
            if (mappedStudents[Records[i]]==_schoolAddress) {
                addressValues.push(Records[i]);
            }
        }
        
        return addressValues.length;
    }
    //other functions remaining.
}