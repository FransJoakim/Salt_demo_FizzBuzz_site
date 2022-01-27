const { stdin, stdout } = process;
const arabicNumbers = require('./index');

const PROMPT = '> ';

stdout.write(PROMPT);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', data => {
  const result = arabicNumbers.toArabicNumbers(data);
  if (result) {
    stdout.write(`result ${result} \n`);
  } else {
    stdout.write(`Error, input: ${data} is not valid.\n`);
  }
  stdout.write(PROMPT);
});

process.on('SIGINT', () => {
  stdout.write('\n\nBye!\n');
  process.exit();
});