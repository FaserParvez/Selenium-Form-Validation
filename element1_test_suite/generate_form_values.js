var letters="abcdefghijklmnopqrstuvwxyz",numbers="1234567890",chars="!\u00a3$%^&*()-+=/*-+?<>,#~' @;:]}[{|\u00ac`";function injectIntoString(a,b){var c=Math.floor(Math.random()*a.length);return a=a.substr(0,c)+b+a.substr(c)}function randomString(a,b,c,e){var f="",d="";b&&(d+=letters);c&&(d+=numbers);e&&(d+=chars);for(b=0;b<a;b++)f+=d[Math.floor(Math.random()*d.length)];return f}function validFirstName(){return randomString(5,!0,!1,!1)}function validLastName(){return randomString(5,!0,!1,!1)}
function invalidNameIllegalChars(){var a=randomString(5,!0,!1,!1);newChar=chars[Math.floor(Math.random()*chars.length)];return a=injectIntoString(a,newChar)}function invalidEmailNoAt(){var a=randomString(5,!0,!1,!1);return a=a+"."+randomString(3,!0,!1,!1)}function invalidEmailIncorrectDomain(){var a=randomString(5,!0,!1,!1),a=a+"@"+randomString(5,!0,!1,!1);return a+=randomString(3,!0,!1,!1)}
function invalidEmailNoLocal(){var a;a="@"+randomString(5,!0,!1,!1);return a=a+"."+randomString(3,!0,!1,!1)}function validEmail(){var a=randomString(8,!0,!1,!1),a=a+"@"+randomString(5,!0,!1,!1);return a=a+"."+randomString(3,!0,!1,!1)}function invalidUserNameTooShort(){return randomString(5,!0,!1,!1)}function invalidUserNameSameEmail(a){return a.split("@")[0]}
function invalidUserIllegalChars(){var a=randomString(6,!0,!0,!1);newChar=chars[Math.floor(Math.random()*chars.length)];return a=injectIntoString(a,newChar)}function validUserName(){var a=randomString(6,!0,!0,!1);newChar="_."[Math.floor(2*Math.random())];return a=injectIntoString(a,newChar)}
function invalidPasswordTooShort(){var a=randomString(2,!0,!1,!1),a=a+chars[Math.floor(Math.random()*chars.length)],a=a+numbers[Math.floor(Math.random()*numbers.length)];return a+=letters[Math.floor(Math.random()*letters.length)].toUpperCase()}function invalidPasswordTooLong(){var a=randomString(30,!0,!1,!1),a=a+chars[Math.floor(Math.random()*chars.length)],a=a+numbers[Math.floor(Math.random()*numbers.length)];return a+=letters[Math.floor(Math.random()*letters.length)].toUpperCase()}
function invalidPasswordLowercase(){var a=randomString(8,!0,!1,!1),b=chars[Math.floor(Math.random()*chars.length)],c=numbers[Math.floor(Math.random()*numbers.length)],a=injectIntoString(a,b);return a=injectIntoString(a,c)}function invalidPasswordUppercase(){var a=randomString(8,!0,!1,!1),b=chars[Math.floor(Math.random()*chars.length)],c=numbers[Math.floor(Math.random()*numbers.length)],a=injectIntoString(a,b),a=injectIntoString(a,c);return a=a.toUpperCase()}
function invalidPasswordNoNumsOrChars(){var a=randomString(8,!0,!1,!1),b=letters[Math.floor(Math.random()*letters.length)].toUpperCase();return a=injectIntoString(a,b)}function validPassword(){var a=randomString(6,!0,!1,!1),b=chars[Math.floor(Math.random()*chars.length)],c=numbers[Math.floor(Math.random()*numbers.length)],e=letters[Math.floor(Math.random()*letters.length)].toUpperCase(),a=injectIntoString(a,b),a=injectIntoString(a,c);return a=injectIntoString(a,e)};