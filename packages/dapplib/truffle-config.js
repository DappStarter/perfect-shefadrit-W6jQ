require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soap arrow grid arctic broken spirit'; 
let testAccounts = [
"0x94012e7a51043d8761e65ccfb4ca55b35a282b83ff83273e2c9a71786a8e1202",
"0x6c5d39d82687bb4fd9df190217c2778b646c38d80cb354c6ce8f202de13c46a7",
"0xb0d757fb0818b9c42046d1d449b0dededf1ea365f37c13cf9c9f40c1ae8d835b",
"0x62772394b8e853397aeb3f4ab75832f125323ab2e77cbb683343a68513b51602",
"0x6e58e5f45da160f8260909603553e0ce832cd68da927b9581f9c99d6f42ff285",
"0xaf20bc73f4c7568435de67870269d8b5b2763b523921f9984baf5ffb52ad1c7d",
"0x22633d131b6dee46b81c9c1581ffa622c2be27f50ea1eba102c7368c7f205412",
"0x537c1b24da4659c38bf26a1cec1f42f5fe3d03c805d97556db16045375373e8e",
"0xb909768e8c0533acd04409412ec2c611493dcee74749b4b4f2ebe6a8af59a12c",
"0x97b5e85ca8fab2e1fed269816b69091e37c75ec3c55edff9acf128eeb7779b13"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

