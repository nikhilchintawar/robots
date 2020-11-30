import React, { useEffect, useState } from 'react';
import './App.less';


interface robot {
  name: string,
  id: number,
  email: string,
}

interface roboProps{
  robots: Array<robot>,
  searchField: string,
};



const App = () => {
  const [robots, setRobots] = useState<roboProps["robots"] | []>([]);
  const [searchField, setSearchField] = useState<roboProps["searchField"] | ''>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => setRobots(users))
      .catch(error => console.log(error))
  }, []);

  const onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>):void => {
    const target = event.target as typeof event.target & {value: string};
    setSearchField(target.value)
  }

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className="App">
      <header>
        <h1>ROBOTS</h1>
      </header>
      <input type="text" value={searchField} onChange={onSearchChange} />
    
    <div className="robots">
      {
        filteredRobots.map(robot => (
          <div key={robot.id} className="robot">
            <img src={`https://robohash.org/${robot.id}?200x200`} alt="robot"/>
            <div>
              <h2>{robot.name}</h2>
              <p>{robot.email}</p>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  );
}

export default App;
