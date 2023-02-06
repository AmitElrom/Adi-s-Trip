import React, { Fragment } from "react";

import Item from "../item/Item";

import classes from "./Items.module.css";

import img1 from "../../assets/WhatsApp Image 2022-10-21 at 20.26.50.jpeg";
import img2 from "../../assets/WhatsApp Image 2022-10-21 at 20.26.52.jpeg";
import img3 from "../../assets/WhatsApp Image 2022-10-22 at 00.30.48.jpeg";
import img4 from "../../assets/WhatsApp Image 2022-10-23 at 01.20.39.jpeg";
import img5 from "../../assets/WhatsApp Image 2022-10-26 at 22.15.03.jpeg";
import img6 from "../../assets/WhatsApp Image 2022-11-05 at 12.27.51.jpeg";
import img7 from "../../assets/WhatsApp Image 2022-11-11 at 20.48.53.jpeg";
import img8 from "../../assets/WhatsApp Image 2022-12-10 at 14.24.30.jpeg";
import img9 from "../../assets/WhatsApp Image 2022-12-18 at 13.06.38.jpeg";
import img10 from "../../assets/WhatsApp Image 2022-12-31 at 10.23.17.jpeg";
import img11 from "../../assets/WhatsApp Image 2022-12-31 at 10.23.18.jpeg";
import img12 from "../../assets/WhatsApp Image 2023-01-22 at 19.56.56.jpeg";
import img13 from "../../assets/WhatsApp Image 2023-02-05 at 12.33.21.jpeg";
import img15 from "../../assets/WhatsApp Image 2023-02-05 at 12.34.09.jpeg";
import img16 from "../../assets/WhatsApp Image 2023-02-05 at 12.34.24.jpeg";
import img17 from "../../assets/WhatsApp Image 2023-02-05 at 12.36.25.jpeg";
import img18 from "../../assets/WhatsApp Image 2023-02-05 at 12.36.42.jpeg";
import img19 from "../../assets/WhatsApp Image 2023-02-05 at 12.36.58.jpeg";
import img20 from "../../assets/WhatsApp Image 2023-02-05 at 12.37.11.jpeg";
import img21 from "../../assets/WhatsApp Image 2023-02-05 at 12.37.29.jpeg";
import img22 from "../../assets/WhatsApp Video 2023-01-16 at 00.58.23 (2).mp4";
import img23 from "../../assets/WhatsApp Video 2023-02-05 at 12.37.26.mp4";

import audio1 from "../../assets/likesheis.mp3";
import audio2 from "../../assets/sobeautiful.mp3";
import audio3 from "../../assets/dontbeangry.mp3";
import audio4 from "../../assets/heysoulsister.mp3";
import audio5 from "../../assets/loveme.mp3";

const ITEMS = [
  { media: img1, isVideo: false },
  { media: img2, isVideo: false },
  { media: img3, isVideo: false },
  { media: img4, isVideo: false },
  { media: img5, isVideo: false },
  { media: img6, isVideo: false },
  { media: img7, isVideo: false },
  { media: img8, isVideo: false },
  { media: img9, isVideo: false },
  { media: img10, isVideo: false },
  { media: img11, isVideo: false },
  { media: img12, isVideo: false },
  { media: img13, isVideo: false },
  { media: img15, isVideo: false },
  { media: img16, isVideo: false },
  { media: img17, isVideo: false },
  { media: img18, isVideo: false },
  { media: img19, isVideo: false },
  { media: img20, isVideo: false },
  { media: img21, isVideo: false },
  { media: img22, isVideo: true },
  { media: img23, isVideo: true },
];

const AUDIOS = [audio1, audio2, audio3, audio4, audio5];

const Items = () => {
  const numRows = Math.ceil(ITEMS?.length / 2);
  const rows = Array.from({ length: numRows }, (_, index) => {
    const startIndex = index * 2;
    const rowItems = ITEMS?.slice(startIndex, startIndex + 2);
    return (
      <Fragment>
        <div key={index} style={{ display: "flex" }}>
          {rowItems.map((item, index) => (
            <Item
              key={index}
              style={{ flex: 1 }}
              media={item.media}
              isVideo={item.isVideo}
            />
          ))}
        </div>
        {(index + 1) % 2 === 0 && (
          <div>
            <audio src={AUDIOS[(index + 1) / 2 - 1]} controls />
          </div>
        )}
      </Fragment>
    );
  });

  return <div className={classes.items}>{rows}</div>;
};

export default Items;
