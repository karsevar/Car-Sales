import React from 'react';

const AdditionalFeature = props => {

  const handleAddClick = feature => {
    props.addFeature(feature);
    props.updateAdditionalPrice(feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => handleAddClick(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
