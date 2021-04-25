const replacementPatterns = [
  [/ /g, "-"],
  [/[.!'?#]/g, ""],
];

function replacer(string, patternArray) {
  let str = string;
  for (const pattern of patternArray) {
    str = str.replace(pattern[0], pattern[1]);
  }
  return str;
}

function urlify(blogPostTitle) {
  return replacer(blogPostTitle.toLowerCase().trim(), replacementPatterns);
}

export default urlify;
