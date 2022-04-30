const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain :  "",
  getLength() {
    return this.chain.split("~~").length;
  },
  addLink(value) {
   if (!this.chain.length) {
      this.chain = `( ${value} )`
   } else {
     this.chain = this.chain + `~~( ${value} )`;
   }
   return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chain.split("~~").length) {
      throw new Error('You can\'t remove incorrect link!')
    } else {
      let arr = this.chain.split("~~");
    for (let i = 0; i < arr.length; i++) {
      if (i === position - 1 && position < arr.length) {
        i++
      }
        this.chain = i === 0 ? arr[i] : this.chain + `~~${arr[i]}`;
    }
    return this;
    }
  },
  reverseChain() {
    let arr = this.chain.split("~~");
    for (let i = arr.length - 1; i >= 0; i--) {
        this.chain = i === arr.length - 1 ? arr[i] : this.chain + `~~${arr[i]}`;
    }
    return this;
  },
  finishChain() {
    return this.chain;
  }
}

module.exports = {
  chainMaker
};
