import React from 'react';
import {connect} from 'react-redux';

import AdditionalFeature from './AdditionalFeature';
import {addFeature, updateAdditionalPrice} from '../actions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature 
              key={item.id} 
              feature={item} 
              addFeature={props.addFeature} 
              updateAdditionalPrice={props.updateAdditionalPrice} 
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store
  };
};

export default connect(mapStateToProps, {addFeature, updateAdditionalPrice})(AdditionalFeatures);
