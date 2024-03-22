import 'normalize.css'
import 'concrete.css'
import * as THREE from 'three';

document.querySelector('main').innerHTML = `
<header>
  <h1>John Langs</h1>
  
  <div id="sphere"> </div>

  <p> 
    Computer Science student with interests in cloud and networking technologies, robotics, and intelligent systems.
  </p>

  <p>
      <a href="https://github.com/johnlangs">GitHub</a> |
      <a href="">LinkedIn</a> |
      <a href="">Previous Works</a>
  </p>
  <p>
    ▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲
  </p>
</header>

<!-- <section>  -->
<!--   <h2> Some work that I've done </h2> -->
<!--   <img style="border: 2px solid black; border-radius: 10px;" src="/classroom.jpg" /> -->
<!-- </section> -->
`

import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

let camera, controls, scene, renderer, effect;

let sphere, plane;

const start = Date.now();

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.y = 150;
  camera.position.z = 500;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0, 0, 0);

  const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
  pointLight1.position.set(500, 500, 500);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
  pointLight2.position.set(- 500, - 500, - 500);
  scene.add(pointLight2);

  sphere = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: true }));
  scene.add(sphere);
  const geometry = new THREE.BoxGeometry(200, 200, 200);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  //scene.add(cube)

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  effect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true });
  effect.setSize(window.innerWidth / 4, window.innerHeight / 4);
  effect.domElement.style.color = document.body.style.color;
  effect.domElement.style.backgroundColor = document.body.style.backgroundColor;

  // Special case: append effect.domElement, instead of renderer.domElement.
  // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

  document.getElementById("sphere").appendChild(effect.domElement);

  controls = new TrackballControls(camera, effect.domElement);

  //


}



//

function animate() {

  requestAnimationFrame(animate);

  render();

}

function render() {

  const timer = Date.now() - start;

  sphere.position.y = timer * 0.001;
  sphere.rotation.x = timer * 0.0003;

  controls.update();

  effect.render(scene, camera);

}


// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
//
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector('#counter'))
