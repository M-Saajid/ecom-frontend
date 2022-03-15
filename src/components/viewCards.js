import React from "react";

function viewCards() {
  return (
    <div className="card">
      <div className="card__ContainerOne">
        <div className="card__Description">
          <span>Shop the collection</span>
          <h4>Women's</h4>
        </div>
      </div>
      <div className="card__ContainerTwo">
        <div className="card__Description">
          <span>Shop the collection</span>
          <h4>Men's</h4>
        </div>
      </div>
      <div className="card__ContainerThree">
        <div className="card__Description">
          <span>Shop the collection</span>
          <h4>Accessories</h4>
        </div>
      </div>
    </div>
  );
}

export default viewCards;
