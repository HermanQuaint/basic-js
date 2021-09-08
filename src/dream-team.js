import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)) return false;
   /*
   * 1)if (typeof element === 'string')
   * 2).replace(/\s+/g, '')
   * 3).toUpperCase()
   * 4).sort()
   * */
  const newName = members.map(element => {
    if (typeof element === 'string') {
      return element.replace(/\s+/g, '').toUpperCase().charAt(0);
    }
  });
  return newName.sort().join('');
}
