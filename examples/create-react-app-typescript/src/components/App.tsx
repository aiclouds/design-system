import { Alert, Button, TextField, getMonthNames } from '@cmsgov/ds-healthcare-gov';
import React, { SyntheticEvent, useState } from 'react';

const LOCALE = 'en';
const monthNames = getMonthNames(LOCALE);
console.log(monthNames)

function App() {
  const [text, setText] = useState<string>("");

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const monthMatches = monthNames.filter(month => text.toLowerCase().includes(month.toLowerCase()));

  return (
    <div className="ds-base">
      <header className="ds-u-padding--3 ds-u-sm-padding--6 ds-u-display--block ds-u-fill--primary-darkest">
        <h1 className="ds-u-margin--0 ds-u-color--white ds-u-font-size--display ds-u-text-align--center">
          Hello, world!
        </h1>
      </header>

      <div className="ds-l-container">
        <div className="ds-u-measure--base">
          <TextField
            name="text"
            label="Enter some text. Maybe a month name?"
            value={text}
            onChange={handleChange}
          />

          {monthMatches.length > 0 && (
            <Alert heading="Whoa! Your text contains the following month names" hideIcon>
              <ul>
                {monthMatches.map((monthMatches) => (
                  <li key={monthMatches}>{monthMatches}</li>
                ))}
              </ul>
            </Alert>
          )}

          <Button>I'm a button!</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
