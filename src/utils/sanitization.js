const trim = input => input.trim().replace(/\s+/g, ' ');

const trimInput = input => {
  const type = typeof(input)
  if (type === 'string') {
    return trim(input);
  }
  else if (type === 'object') {
    for (let key in input) {
      input[key] = trimInput(input[key]);
    }
  }
  return input;
};

module.exports = { trim, trimInput };
