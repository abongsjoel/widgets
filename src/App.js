import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you we React?',
    content: 'We use React by creating components'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown 
          selected={selected}
          onSelectedChange={setSelected}
          options={options} 
        /> : null 
      } */}
    </div>
  );
}

export default App;
