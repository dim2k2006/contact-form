import React from 'react';
import cat from '../images/small-cat.gif';

const ResultPanel = () => (
  <div className="jumbotron">
    <h1 className="display-6">Success!</h1>

    <p className="lead">We have received your feedback and answer you soon!</p>

    <hr className="my-4" />

    <img width="180" src={cat} alt="Cat" />
  </div>
);

export default ResultPanel;