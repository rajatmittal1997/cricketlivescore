import { useEffect, useState } from 'react';
import './App.css';
import {Grid} from '@mui/material';
import Navbar from './Components/Navbar';
import { getMatches } from './Api/api';
import  BasicCard  from './Components/card';



function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches().then((data) => setMatches(data.data)).catch((error) => alert("Could not load data"));
  } , []);


  return (
    <div className="App">
      <Navbar />
      <div><h1>Cricket Live Score</h1></div>
      
       <Grid container >
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {matches.map((match) => (
            <BasicCard key={match.id} match={match}/>

           ) )}

        </Grid>

      </Grid>
    </div>

  );
}

export default App;
