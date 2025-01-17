const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null || !Array.isArray(members)) {
    return false
  }
  let result = [];
  for (i = 0; i < members.length; i++) {
    if (typeof (members[i]) == "string") {
      let a = members[i].trim().toUpperCase()
      result.push(a[0])
    }

  }
  let result1 = result.sort().join('')

  return result1
}

module.exports = {
  createDreamTeam
};
