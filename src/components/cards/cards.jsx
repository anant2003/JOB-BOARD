import React from "react";
import Card from "./card";
const Cards = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map((job) => {
        const {
          id,
          company,
          logo,
          logoBackground,
          position,
          postedAt,
          contract,
          location,
        } = job;
        return (
          <Card
            details={{
              id: id,
              company: company,
              logo: logo,
              logoBackground: logoBackground,
              position: position,
              postedAt: postedAt,
              contract: contract,
              location: location,
            }}
            key={id}
            data={data}
          />
        );
      })}
    </div>
  );
};

export default Cards;
