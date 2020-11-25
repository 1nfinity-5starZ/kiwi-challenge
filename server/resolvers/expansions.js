const dictionary = require('../words_dictionary.json');

const numberToCharMap = {
  _2: ["a", "b", "c"],
  _3: ["d", "e", "f"],
  _4: ["g", "h", "i"],
  _5: ["j", "k", "l"],
  _6: ["m", "n", "o"],
  _7: ["p", "q", "r", "s"],
  _8: ["t", "u", "v"],
  _9: ["w", "x", "y", "z"],
};

const findCombinations = (input, res, index, expansions) => {
  // if we have processed every digit of key, push result
  if (index == input.length) {
    expansions.push(res);
    return;
  }

  // stores current digit
  let digit = input[index];

  // size of the char array corresponding to current digit
  let len = numberToCharMap[`_${digit}`].length;

  // if (expansions.length > 10 ** 5) {
  //   return;
  // }

  // one by one replace the digit with each character in the
  // corresponding list and recur for next digit
  for (let i = 0; i < len; i++) {
    findCombinations(
      input,
      res + numberToCharMap[`_${digit}`][i],
      index + 1,
      expansions
    );
  }
};

module.exports.expansions = (_, args) => {
  let numberSequence = [];
  let expansions = [];

  // Filter only T9 numeric characters
  const re = new RegExp(/[2-9]/);
  for (let char of args.numberSequence) {
    if (re.test(char)) {
      numberSequence.push(char);
    }
  }

  if (numberSequence.length > 0) {
    findCombinations(numberSequence, "", 0, expansions);
  }

  // Dictionary provided by https://github.com/dwyl/english-words
  // JSON dictionary makes it very performatic
  if(args.filterWords) {
    expansions = expansions.filter(word => dictionary[word] === 1)
  }

  return {
    numberSequence: numberSequence.join(""),
    expansions,
  };
};
