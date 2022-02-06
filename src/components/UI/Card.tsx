import React from "react";

import styles from "./Card.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className }: Props) => {
  const classes = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
