import React from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';
import Button from './Button';

import {
  clear,
  division,
  multiplication,
  substraction,
  addition,
  equals,
  number,
  decimal
} from '../actions';

const Calculator = ({ clear, division, multiplication, substraction, addition, equals, number, decimal }) => (
  <div className="row">
    <div className="col-md-12" style={{paddingTop: '10px', paddingBottom: '10px'}}>
      <Screen />
    </div>
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-3">
          <Button text={"7"} click={() => number(7)} />
        </div>
        <div className="col-md-3">
          <Button text={"8"} click={() => number(8)} />
        </div>
        <div className="col-md-3">
          <Button text={"9"} click={() => number(9)} />
        </div>
        <div className="col-md-3">
          <Button text={"C"} click={() => clear()} />
        </div>
      </div>
    </div>
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-3">
          <Button text={"4"} click={() => number(4)} />
        </div>
        <div className="col-md-3">
          <Button text={"5"} click={() => number(5)} />
        </div>
        <div className="col-md-3">
          <Button text={"6"} click={() => number(6)} />
        </div>
        <div className="col-md-3">
          <Button text={"/"} click={() => division()} />
        </div>
      </div>
    </div>
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-3">
          <Button text={"1"} click={() => number(1)} />
        </div>
        <div className="col-md-3">
          <Button text={"2"} click={() => number(2)} />
        </div>
        <div className="col-md-3">
          <Button text={"3"} click={() => number(3)} />
        </div>
        <div className="col-md-3">
          <Button text={"*"} click={() => multiplication()} />
        </div>
      </div>
    </div>
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-3">
          <Button text={"."} click={() => decimal()} />
        </div>
        <div className="col-md-3">
          <Button text={"0"} click={() => number(0)} />
        </div>
        <div className="col-md-3 offset-md-3">
          <Button text={"-"} click={() => substraction()} />
        </div>
      </div>
    </div>
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-9">
          <Button text={"="} click={() => equals()} />
        </div>
        <div className="col-md-3">
          <Button text={"+"} click={() => addition()} />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clear()),
  division: () => dispatch(division()),
  multiplication: () => dispatch(multiplication()),
  substraction: () => dispatch(substraction()),
  addition: () => dispatch(addition()),
  equals: () => dispatch(equals()),
  number: (value) => dispatch(number(value)),
  decimal: () => dispatch(decimal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);