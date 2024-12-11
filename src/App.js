import './App.css';
import Content_grid_item from './Grid_item';
import {useState} from 'react';
import raw_data from './data';

function App() {
  const [seararchText, SetseararchText] = useState('');
  const filter = raw_data.filter((data)=>{
    return data.title.includes(seararchText);
  });

  const data_ele = filter.map((data, index)=>{
    return <Content_grid_item 
      key={index} 
      data={data}
    />;
  });

  return (
    <div className="container">
        <div className='header'>
            <h4>Ai Tool</h4>
        </div>

      <div className='content'>
        <input
          value={seararchText}
          type='text'
          onChange={(event)=>{SetseararchText(event.target.value)}}
        />
        <div className='content_grid'>
          {data_ele}
        </div>
      </div>
    </div>
  );
}

export default App;
