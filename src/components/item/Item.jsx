import React, { Fragment } from "react";

import classes from "./Item.module.css";

const Item = ({ media, style, isVideo }) => {
  return (
    <Fragment>
      {!isVideo ? (
        <img className={classes.img} style={style} src={media} alt="alt" />
      ) : (
        <video className={classes.img} style={style} controls>
          <source
            className={classes.img}
            style={style}
            src={media}
            type="video/mp4"
          />
        </video>
      )}
    </Fragment>
  );
};

export default Item;
