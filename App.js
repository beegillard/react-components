import React from 'react';
import {comments} from './commentData';
import Card from './Card.js';

function App() {
  comments.map(comment => 
  <Card commentObject = {comment} />
  )
};


  export default App;