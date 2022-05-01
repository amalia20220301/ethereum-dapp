require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/968677a3634f417bb370c87bfabb5c78",
      accounts: ["0xd5acdbdf1d6fee9f90f9e8ca00f5de0ba20dce36d159cabd0ecdfe9695c9a0a4"]
    }
  }
};
