const { NotImplementedError } = require('../extensions/index.js');

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
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    let arrDomains = domains[i].split(".")
    let reversDomains = arrDomains.reverse();
    console.log(reversDomains)
    for (let j = 0; j < reversDomains.length; j++) {
      let domain = `.${reversDomains.slice(0, j + 1).join('.')}`
      obj[domain] = obj[domain] ? obj[domain] + 1 : 1

    }
  }
  return obj
}
getDNSStats(['epam.com', 'info.epam.com'])
module.exports = {
  getDNSStats
};
