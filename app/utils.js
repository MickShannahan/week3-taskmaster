/**
 * @returns {string} A random string of characters
 */
export const generateId = function () {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateThis = function () {
  let result = '';
  let choices = ["this", "that", "the other", "this one", "this", "this other", "that one", "that other", "the"]
  result = choices[Math.floor(Math.random() * choices.length)]
  return result + 'list'
}

export const generateColor = function () {
  let result = '';
  let choices = ["grey", "dark-grey", "white", "red-grey", "maroon", "grey"]
  result = choices[Math.floor(Math.random() * choices.length)]
  return result + 'list'
}
