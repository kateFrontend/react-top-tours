import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [tours, setTours] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const removeTour = (id) => {
    let newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const showTextClick = (tour) => {
    tour.showMore = !tour.showMore
    setShowMore(!showMore)
  }

  return (
    <main>
      <div className="title">
        <h2>most popular tours</h2>
        <div className="underline"></div>
      </div>
      <section>
        {tours.map((tour) => {
          const { id, name, info, image, price, showMore } = tour;
          return (
            <article className="single-tour" key={id}>
              <img src={image} alt={name} />
              <footer>
                <div className="tour-info">
                  <h4>{name}</h4>
                  <h4 className="tour-price">${price}</h4>
                </div>
                <p>{showMore ? info : info.substring(0,130) + "....."}
                <button onClick={() => showTextClick(tour)}>{showMore ? "show less" : "show more"}</button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
              </footer>
            </article>
          )
        })}
      </section>
    </main>
  );
}

export default App;
