# Ethereum dapp example

## Setup the project

```shell
npx create-react-app react-dapp
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
npx hardhat
```

## Compile the ABI

```shell
npx hardhat compile
```

## Setup a local node

```shell
npx hardhat node
```

### Deploy contract to local network

```shell
npx hardhat run scripts/deploy.js --network localhost
```

### Deploy contract to ropsten network

```shell
npx hardhat run scripts/deploy.js --network ropsten
```

Transactions can be found in `https://ropsten.etherscan.io/`
