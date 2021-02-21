module.exports = function check(str, bracketsConfig) {
  let validationArr = [];
  let opened = [];
  let closed = [];
  if (str.length % 2 === 1) return false;
  for (let i = 0; i < bracketsConfig.length; i++) {
      opened.push(bracketsConfig[i][0]);
      closed.push(bracketsConfig[i][1]);
  }
  if (closed.indexOf(str[0]) !== -1 && opened.indexOf(str[0]) === -1) {
      return false;
  } else {
      for (let j = 0; j < str.length; j++) {
          if (j === 0) {
              validationArr.push(str[j])
          } else {
              if ((opened.indexOf(str[j]) !== -1 && validationArr[validationArr.length - 1] !== str[j]) ||
                  (opened.indexOf(str[j]) !== -1 && closed.indexOf(str[j]) === -1)) {
                  validationArr.push(str[j])
              } else {
                  const brackets = [validationArr[validationArr.length - 1], str[j]];
                  if (isBracketsInList(brackets, bracketsConfig)) {
                      validationArr.pop();
                  } else {
                      return false;
                  }
              }
          }
      }
  }
  return validationArr.length === 0;
};

function isBracketsInList(brackets, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] === brackets[0] && bracketsConfig[i][1] === brackets[1]) return true;
  }
  return false;
}