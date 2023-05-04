// hardhat.config.js

require("@nomiclabs/hardhat-ethers");
/**
 * You are using both @nomicfoundation/hardhat-chai-matchers and @nomiclabs/hardhat-waffle. 
 * They don't work correctly together, so please make sure you only use one.
 * We recommend you migrate to @nomicfoundation/hardhat-chai-matchers. 
 * Learn how to do it here: https://hardhat.org/migrate-from-waffle
 */
// require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const GOERLI_URL = process.env.GOERLI_URL;
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    },
    sepolia : {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
