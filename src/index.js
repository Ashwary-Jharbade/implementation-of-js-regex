// Email Validation
const str = "ashwary.jharbade99@gmail.com";
const re = /^[a-z\d&=_'-+,<>.]+@[a-z]+.[a-z]+$/i;
console.log(re.test(str));