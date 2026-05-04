// import React from 'react';
import gsap from "gsap";
import {ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <h1 className="text-3xl text-indigo-500">as</h1>
    </div>
  )
}

export default App