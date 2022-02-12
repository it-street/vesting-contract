import * as dotenv from "dotenv";

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import { Networks } from "@crowdswap/constant";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

const PRIVATE_KEY = `${process.env.PRIVATE_KEY}`;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      }
    ]
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {},
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [PRIVATE_KEY],
      chainId: 1337,
    },
    [Networks.MAINNET_NAME]: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 1,
    },
    [Networks.ROPSTEN_NAME]: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 3,
    },
    [Networks.KOVAN_NAME]: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 42,
    },
    [Networks.RINKEBY_NAME]: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    [Networks.GOERLI_NAME]: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    [Networks.BSCMAIN_NAME]: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [PRIVATE_KEY],
      chainId: 56,
    },
    [Networks.BSCTEST_NAME]: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [PRIVATE_KEY],
      chainId: 97,
    },
    [Networks.POLYGON_MAINNET_NAME]: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [PRIVATE_KEY],
      chainId: 137,
    },
    [Networks.POLYGON_MUMBAI_NAME]: {
      url: "https://rpc-mumbai.maticvigil.com/v1/ca597f2e23b8592e939722d68dcf82ad569205e9",
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
  },
  etherscan: {
    [Networks.MAINNET_NAME]: { apiKey: `${process.env.ETHERSCAN_API_KEY}` },
    [Networks.BSCMAIN_NAME]: { apiKey: `${process.env.BSCSCAN_API_KEY}` },
    [Networks.POLYGON_MAINNET]: {
      apiKey: `${process.env.POLYSCAN_API_KEY}`,
    },
  },
  tokenSetting: {
    name: "CrowdToken",
    symbol: "CROWD",
    initialSupply: "1000000000000000000000000000",
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  stakingRewardsSetting: {
    rewardPerYear: "400000000000000000",
    rewardPerMonth: "28436155726361200",
    rewardPerDay: "922270000000000",
    rewardPerHour: "38410810349940",
    proxyAddress: ""
  }
};
