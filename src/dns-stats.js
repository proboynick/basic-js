const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let res = {};
  for (let domain of domains) {
    arr.push(domain.split(".").reverse());
  }
  arr.forEach((e) => {
    let str = "";
    for (let i = 0; i < e.length; i++) {
      str += "." + e[i];
      if (res[str]) {
        res[str] += 1;
      } else {
        res[str] = 1;
      }
    }
  });
  return res;
}

module.exports = {
  getDNSStats,
};
