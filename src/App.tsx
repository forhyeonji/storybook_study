import { useState } from 'react';
import './App.css';
import Label from './components/Label';
import DefaultTextField from './components/DefaultTextField';
import deleteIcon from './assets/icon/close.svg';
import TagList from './components/TagList';

function App() {
  const [isError, setIsError] = useState(false);
  return (
    <div className="bg-primary w-full h-screen">
      <TagList
        tagList={['All', 'React', 'TypeScript']}
        onTagClick={console.log}
      />
    </div>
  );
}

export default App;
