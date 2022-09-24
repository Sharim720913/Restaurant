import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((currElement) => {
          const { id, Category, name, Image, description } = currElement;
          return (
            <>
              <div className="card-container " key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author  subtle">{Category}</span>
                    <h2 className="card-title">{name} </h2>
                    <span className="card-discription subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={Image} alt="images" className="card-media" />

                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
