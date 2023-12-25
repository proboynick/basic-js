const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }
  encrypt(string, key) {
    if (!string || !key) throw new Error("Incorrect arguments!");

    let code = "";

    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.indexOf(string[i].toLowerCase()) >= 0) {
        code +=
          this.alphabet[
            (this.alphabet.indexOf(string[i].toLowerCase()) +
              this.alphabet.indexOf(key[j % key.length].toLowerCase())) %
              this.alphabet.length
          ];
        j++;
      } else {
        code += string[i];
      }
    }

    if (!this.isDirect) {
      return code.split("").reverse().join("").toUpperCase();
    }

    return code.toUpperCase();
  }
  decrypt(string, key) {
    if (!string || !key) throw new Error("Incorrect arguments!");

    let source = "";

    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (this.alphabet.indexOf(string[i].toLowerCase()) >= 0) {
        source +=
          this.alphabet[
            (this.alphabet.indexOf(string[i].toLowerCase()) -
              this.alphabet.indexOf(key[j % key.length].toLowerCase()) +
              this.alphabet.length) %
              this.alphabet.length
          ];
        j++;
      } else {
        source += string[i];
      }
    }

    if (!this.isDirect) {
      return source.split("").reverse().join("").toUpperCase();
    }

    return source.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
