require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom drip flock tooth guard render remember unusual include private bubble subway'; 
let testAccounts = [
"0xda70bea447509a5159397f3e379daa0ac412b0267d9ffab7394649b8ebe8a572",
"0x25ac4aa51dcc7c30289de5530ed38acd33a9eb20bed29b5d445a21053af0cab8",
"0x096d2dd86d55358a76ef1ad3ce2f59d255aeff966630f5cf9a5a1904d7aed00f",
"0xa6c77059d0f11c9b4a3a901c51924528b3c26aebec9f1581f859709b88891cc8",
"0x0c4d527429d9fcaf0d88ef1d356ea4dc5e79a5898e0aa89551888b29a1020248",
"0x3af9ec62f79117a5b6c77f1946a195a640fcf56d019629b22d13c526c8679704",
"0xad7d3b6217bb60b87fc990b5ab46a2115e0445dc5d1854b2387e9de04fbcbb56",
"0xe69a3fcdef120b81f92834cae64cd40392c1dd1f5bbba6ff49e78cdd488c6bbf",
"0xd943cd13a6812c827fb2992a30ee079beca66bdd20bd65b25ca184f1d9808ef9",
"0x8a4f87e89dc839fc0b94375593f4284f1573baed1ef541756cf74922038c27d4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


