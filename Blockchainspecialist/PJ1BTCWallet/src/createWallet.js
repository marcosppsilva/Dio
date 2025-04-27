
//importando as dependencias
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

//definir a rede
//bitcoin - rede principal - mainnet
//testenet - rede de teste - testnet
const network = bitcoin.networks.testnet; //se quiser rodar numa rede real, basta colocar bitcoin no lugar de testenet

//derivação de carteiras HD
const path = `m/49'/1'/0'/0`;

//Criando mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network);

//criando uma conta - par pvt-pub keys
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddres = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

console.log("Carteira Gerada");
console.log("Endereço: ", btcAddres);
console.log("Chave Privada: ", node.toWIF());
console.log("Seed: ", mnemonic);