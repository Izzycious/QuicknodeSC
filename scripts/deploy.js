// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  const willContract = await ethers.getContractFactory("Inheritance");

  const deployeWilContract = await willContract.deploy();

  // wait for the contract to deploy
  await deployedWillContract.deployed();

  // print the address of the deployed contract
  console.log("Insurance Contract Address:", deployedWillContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
