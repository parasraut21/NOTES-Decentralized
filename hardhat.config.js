/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "Cv2isN0c4RX-dtj3oVIFVy4N6vVd9JaD";
const ROPSTEN_PRIVATE_KEY =
  "19e50654d107d4abf679eb9f3cee0d4b9b6fd57a66c0692d900926d26f33c4f8";
  
module.exports = {
  solidity: "0.8.9",

  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/Cv2isN0c4RX-dtj3oVIFVy4N6vVd9JaD`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
