import { useEffect } from 'react'
import * as THREE from "three"
import './App.css'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import MyThree from './components/myThree';

function App() {
  return (
      <MyThree />
  )
}

export default App
