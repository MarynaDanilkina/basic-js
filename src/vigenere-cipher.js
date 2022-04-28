const { NotImplementedError } = require('../extensions/index.js');

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
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    const alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 0;
    let arr = message.split("").map((el, index) => {
      if (!alfa.includes(el)) {
        return el;
      }
      let codeMessage = el.charCodeAt()
      let codeKey = key.charCodeAt(count % key.length)
      let codeResult = (codeMessage - 65 + codeKey - 65) % 26 + 65
      let result = String.fromCharCode(codeResult);
      count++;
      return result
    })
    if (this.isDirect) {
      return arr.join('')
    } else {
      return arr.reverse().join('')
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    const alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 0;
    let arr = encryptedMessage.split("").map((el, index) => {
      if (!alfa.includes(el)) {
        return el;
      }
      let codeMessage = el.charCodeAt()
      let codeKey = key.charCodeAt(count % key.length)
      let codeResult = ((codeMessage - codeKey + 26) % 26)
      let result = String.fromCharCode(codeResult + 65);
      count++;
      return result
    })
    if (this.isDirect) {
      return arr.join('')
    } else {
      return arr.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
