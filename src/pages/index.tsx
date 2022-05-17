import { FC, useDeferredValue, useState } from "react";

import { Button } from "antd";
import PMedia from "src/components/PMedia";
import Skeleton from "src/components/Skeleton";
import Popper from "src/components/Popper";
import Transition from "src/components/Transition";
import QuickPinch from "src/components/QuickPinch";
import ClampText from "src/components/ClampText";
import Dropzone from "src/pages/Dropzone";

import photo from "src/images/photo.jpg";
import CarouselPage from "./CarouselPage";

const index: FC = () => {
  //   const [clicked, setClicked] = useState<boolean>(false);
  //   const clickedDef = useDeferredValue(clicked);

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
          // width: 400,
          // height: 400,
          background: "#98cce3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          padding:12,
        }}
      >
        {/* <Dropzone></Dropzone> */}
        <CarouselPage></CarouselPage>

        {/* <ClampText style={{ padding: 12 }}></ClampText> */}
        {/* <Popper>123</Popper> */}

        {/* <Button onClick={() => setClicked(!clickedDef)}>click me</Button>
        {clickedDef && <Transition>这里有动画哟</Transition>} */}

        {/* <QuickPinch src={photo} style={{ height: '50vh', width: '50vh' }}></QuickPinch> */}
      </div>
    </>
  );
};

export default index;
