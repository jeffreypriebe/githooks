const commentPrefix = "(//|/\\*|\\*)[\\s\\t]*";

module.exports = [
  {
    regex: new RegExp(`${commentPrefix}(after|before)(All|Each)`, "g"),
    message: "Can't have commented before/after code in tests"
  },
  {
    regex: new RegExp(`(describe|it).only`, "g"),
    message: "Can't have describe/it `.only` in tests"
  }
];
