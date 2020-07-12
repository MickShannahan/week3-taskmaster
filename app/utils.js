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
  let choices = ["this", "that", "the other", "this one", "this", "that other", "the"]
  result = choices[Math.floor(Math.random() * choices.length)]
  return result + ' list'
}
