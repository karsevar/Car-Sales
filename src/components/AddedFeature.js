import React from 'react';

const AddedFeature = props => {

  const handleDeleteClick = feature => {
    props.removeFeature(feature);
    props.minusAdditionalPrice(feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => handleDeleteClick(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
