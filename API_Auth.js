var MD5 = require("crypto-js/md5"); 

let PUBLIC_KEY = "f4cb9a74ec6cda8b7b4c3d268b854cb0";
let PRIVATE_KEY = "7f7b41aa6b544250ad9969faaf368b2e50382c66";

let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

console.log(MD5("text to hash").toString());
