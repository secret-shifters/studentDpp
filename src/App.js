import React, {
  useRef,
  useEffect,
  useState
} from "react";
import './App.css';
import Web3 from 'web3';
import LoginForm from "../src/components/Login";
import SignUPStudent from "./components/Login/loginform";
import {
  schoolAbi, schoolAddress
} from '../src/abirepos/schoolAbi';

function App() {
  const provider = "http://localhost:7545";
  const [userContract, setUserContract] = useState();
  const [schoolContract, setSchoolContract] = useState();

  // const web3 = new Web3(provider);
  const web3 = new Web3(new Web3.providers.HttpProvider(provider));
  // const [web3objectDetails,setWeb3Object] = useState({
  //   web3Account : "",
  //   web3AccountNetworkId: ""
  // });

  useEffect(() => {
    loadWeb3();
  }, []);


  async function loadWeb3() {
    // if (window.ethereum) {
    //   window.web3 = new Web3(window.ethereum)
    //   await window.ethereum.enable()
    // }
    // else if (window.web3) {
    //   window.web3 = new Web3(window.web3.currentProvider)
    // }
    // else {
    //   window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    // }

    //await loadBlockchainData() 
    //const address = process.env.SCHOOL_ADDRESS;
    let schoolContract = new web3.eth.Contract(schoolAbi);
    schoolContract.options.address = schoolAddress
    console.log(schoolContract.options.address);
    // const contractInstance = schoolContract.at(schoolAddress);
    // web3.eth.defaultAccount = web3.eth.coinbase;
    setSchoolContract(schoolContract);
    // setSchoolContract(schoolContract);
    // console.log(schoolContract);
    // console.log('file and user contract and school contract')


  }


  return ( <
    div className = "App" >
    HELLO
    {/*<
    LoginForm accountObject = {
      web3objectDetails
    }
    web3Object = {
      web3
    }
    schoolContract = {
      schoolContract
    }
  />*/}
     </div>
  );
}

export default App;