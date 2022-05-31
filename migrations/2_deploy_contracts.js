var AptCoin = artifacts.require("./contracts/AptCoin.sol");
var AptCoinMultiSigWallet = artifacts.require("./contracts/AptCoinMultiSigWallet.sol");
var AptCoinMultiSigWalletWithMint = artifacts.require("./contracts/AptCoinMultiSigWalletWithMint.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(AptCoin, 'APT', 'APTCoin', accounts[0], accounts[1], accounts[2]).then( () => {
    console.log(`AptCoin deployed: address = ${AptCoin.address}`);

    deployer.
      deploy(AptCoinMultiSigWallet, [accounts[0], accounts[1], accounts[2]], 2, AptCoin.address,
          "vault multisig wallet");

      deployer.
      deploy(AptCoinMultiSigWalletWithMint, [accounts[0], accounts[1], accounts[2]], 2, AptCoin.address,
          "vault multisig wallet with mint");

  });
};
