const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

// Use the 'chalk' library for adding colors to the text
const chalk = require('chalk');

app.get('/', (req, res) => {
  const currentDate = new Date();
  const dateTime = currentDate.toLocaleString();
  
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
      <h1 style="color: ${chalk.blue('dodgerblue')}; font-size: 50px;">
        ${chalk.green('Hello World!')}
      </h1>
      <p style="color: ${chalk.yellow('gold')}; font-size: 20px;">
        Current Date and Time: ${dateTime}
      </p>
    </div>
  `);
});

app.get('/readiness', (req, res) => res.send('Ready !!'));

app.get('/liveness', (req, res) => res.send('Live !!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
