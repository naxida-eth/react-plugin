import { LegacyRef, useDeferredValue, useState } from "react";

import { Button } from "antd";

import PMedia from "./components/PMedia";
import Skeleton from "./components/Skeleton";
import Popper from "./components/Popper";
import Transition from "./components/Transition";
import QuickPinch from "./components/QuickPinch";
import ClampText from "./components/ClampText";

import photo from "./images/photo.jpg";

function App() {
  const [clicked, setClicked] = useState<boolean>(false);
  const clickedDef = useDeferredValue(clicked);

  return (
    <>
      {/* <PMedia></PMedia> */}
      {/* <Skeleton src={photo} style={{ height: 460, width: 460 }}>
        <img src={photo} alt="" />
      </Skeleton> */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: "auto",
          width: 400,
          height: 400,
          background: "#98cce3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap:'wrap'
        }}
      >
        <ClampText style={{padding:12}}></ClampText>
        {/* <Popper>123</Popper> */}

        {/* <Button onClick={() => setClicked(!clickedDef)}>click me</Button>
        {clickedDef && <Transition>这里有动画哟</Transition>} */}

        {/* <QuickPinch src={photo} style={{ height: '50vh', width: '50vh' }}></QuickPinch> */}
      </div>
    </>
  );
}

export default App;
