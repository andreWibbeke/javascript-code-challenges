/* 
Specs for a strong password:

- at least one lowercase letter
- at least one uppercase letter
- one digit
- one special character
- at least eight characters long

Use a teneray operator to return a boolean value
*/

function hasEightChars(pw) {
  return /.{8}/.test(pw);
}

function hasLowercaseChar(pw) {
  return /[a-z]/.test(pw);
}

function hasUppercaseChar(pw) {
  return /[A-Z]/.test(pw);
}

function hasDigit(pw) {
  return /[0-9]/.test(pw);
}

function hasSpecialChar(pw) {
  return /[!"§$%&/()=?`*'#+~´;,.:<>|@]/.test(pw);
}

function isValidPassword(pw) {
  return (
    hasEightChars(pw) &&
    hasLowercaseChar(pw) &&
    hasUppercaseChar(pw) &&
    hasDigit(pw) &&
    hasSpecialChar(pw)
  );
}

// just for testing on a live server

// function notifyUser(isStrongPW) {
//   if (isStrongPW) {
//     console.log("Your password is valid");
//     return;
//   }
//   console.log("Your password is invalid");
// }

// notifyUser(isValidPassword("asdf"));
// notifyUser(isValidPassword("Th!s5tr0ngP@W"));

export {
  hasEightChars,
  hasLowercaseChar,
  hasUppercaseChar,
  hasDigit,
  hasSpecialChar,
  isValidPassword,
};
