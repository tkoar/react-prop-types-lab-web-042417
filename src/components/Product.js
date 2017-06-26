// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
          <li>Note: {this.props.note}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    const weight = props[propName]
    if(weight === undefined) {
      return new Error("this is a required field")
    }
    if(isNaN(weight)) {
      return new Error("must be a number")
    }
    if (weight <= 80 || weight >= 300) {
      return new Error('weight must be between 80 and 300.')
    }
  }
}
