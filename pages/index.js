import React, { useState, useEffect } from "react";

import Background from "../components/Background";
import Button from "../components/Button";

function Home() {
  const [button, isButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", event => scrollWindow());
  });

  const scrollWindow = () => {
    const windowHeight = window.innerHeight;
    const positionButton = window.pageYOffset;

    if (windowHeight - positionButton <= 0) {
      isButton(true);
    } else if (windowHeight - positionButton >= 0) {
      isButton(false);
    }
  };

  return (
    <>
      <Background />
      {button && <Button />}
    </>
  );
}

export default Home;
