

import { ethers } from "hardhat";


const deployUSDT = async() => {

    const [deployer] = await ethers.getSigners();
    console.log('Deploying contrat with the account: ', deployer.address)

    const ERC20Factory = await ethers.getContractFactory("NFT1155")
    const ERC20Deploy = await ERC20Factory.deploy()

    console.log("RandomNumberConsumer isdeployed at:", ERC20Deploy.address)
}


deployUSDT().then(()=> process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});