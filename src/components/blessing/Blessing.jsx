import React from "react";

import classes from "./Blessing.module.css";

const Blessing = () => {
  return (
    <div className={classes.all}>
      <p>
        אני יודע שאת לא אוהבת דברים כאלה, וגם את יודעת שאני לא אוהב. למרות זאת,
        רציתי שתזכרי כמה את חשובה לי, כמה אני אוהב אותך, כמה מגיע לך לטייל
        ולהנות וכמה את אוהבת לחייך לחיים
      </p>
      <p>
        אני אוהב אותך, תהני מכל רגע, תזכרי שתמיד יהיה בסדר ושתמיד אני איתך גם אם
        אני לא פיזית שם. נתראה עוד חודש
      </p>
    </div>
  );
};

export default Blessing;
