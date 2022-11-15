import './App.css';
import {BsStars} from 'react-icons/bs';
function App() {
  let index = 0,
      interval = 1000;

  const rand = (min,max) => Math.floor(Math.random() * (max-min +1)) +min;
  const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10,100)}%`);
    star.style.setProperty("--star-top", `${rand(-0,80)}%`);
  }

  for(const star of document.getElementsByClassName("magic-star")){
    setTimeout(() => {
      animate(star);
      setInterval(()=> animate(star),1000);
    }, index++ * (interval/3) )
  }

  return (
    <div className="App">
      <h1>
        Sometimes magic is just that, but other times it's  <span className="magic">
        <span class="magic-star"><BsStars/></span>
        <span class="magic-star"><BsStars/></span>
        <span class="magic-star"><BsStars/></span>
        <span class="magic-star"><BsStars/></span>
          
        <span className="magic-text"> SUPER MAGICAL MAGIC  </span> </span>.
      </h1>
    </div>
  );
}

export default App;
