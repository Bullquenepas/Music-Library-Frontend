import React, { useState } from 'react';


function App() {

const [songs, setSongs] = useState([]);

useEffect(() => {
  getAllSongs();
}, [])

async function getAllSongs(){
  let response = await axios.get("http://127.0.0.1:8000/music/");
  setSongs(response.data);
}

async function createSong(newSong){
  let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
  if(response.status === 201){
    await getAllSongs();
  }
}

  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
}

export default App;
