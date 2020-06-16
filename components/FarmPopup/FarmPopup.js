import React from 'react';

export default function FarmPopup({ selectedFarm }) {
  return (
    <div className="container">
      <h5>{selectedFarm.name}</h5>
      <a href={selectedFarm.website} target="_blank">
        {selectedFarm.website}
      </a>
      <div>
        <ul>
          <li>
            <img src="/vegetable.svg" alt="vegtables" />
          </li>
          <li>
            <img src="/chicken.svg" alt="chicken" />
          </li>
          <li>
            <img src="/pig.svg" alt="pig" />
          </li>
          <li>
            <img src="/cow.svg" alt="cow" />
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          background: #333;
        }

        img {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </div>
  );
}
