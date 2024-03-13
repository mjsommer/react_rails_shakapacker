import React from "react"
import PropTypes from "prop-types"

const HelloMartin = (props) => {
  return (
    <React.Fragment>
      Greeting: {props.greeting}
    </React.Fragment>
  )
}

HelloMartin.propTypes = {
  greeting: PropTypes.string
};

export default HelloMartin
