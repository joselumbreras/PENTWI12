import React from 'react';
import { connect } from 'react-redux';

const Screen = ({ text }) => (
  <input type="text" className="w-100" style={{textAlign: 'right'}} value={text}/>
);

const mapStateToProps = (state) => ({
  text: state.digits.join('')
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);