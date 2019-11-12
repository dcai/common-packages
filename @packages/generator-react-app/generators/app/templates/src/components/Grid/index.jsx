import React from 'react';
import PropTypes from 'prop-types';

const StandardGridPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const Row = ({ children, ...props }) => (
  <div className="columns" {...props}>
    {children}
  </div>
);
Row.propTypes = StandardGridPropTypes;

export const Col = ({ children, ...props }) => (
  <div className="column" {...props}>
    {children}
  </div>
);
Col.propTypes = StandardGridPropTypes;

export const Card = ({ children, ...props }) => (
  <div className="card has-text-left has-background-grey-ter" {...props}>
    {children}
  </div>
);
Card.propTypes = StandardGridPropTypes;

export const CardHeader = ({ children, ...props }) => (
  <header className="card-header" {...props}>
    {children}
  </header>
);
CardHeader.propTypes = StandardGridPropTypes;

export const CardContent = ({ children, ...props }) => (
  <div className="card-content" {...props}>
    {children}
  </div>
);
CardContent.propTypes = StandardGridPropTypes;

export const CardFooter = ({ children, ...props }) => (
  <footer className="card-footer" {...props}>
    <p className="card-footer-item">{children}</p>
  </footer>
);
CardFooter.propTypes = StandardGridPropTypes;
