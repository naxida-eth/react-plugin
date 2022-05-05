import PMedia from "./components/PMedia";
import Skeleton from './components/Skeleton'
import photo from './images/photo.jpg'

import Popper from "./components/Popper";

import Transition from "./components/Transition";
import { Button } from "antd";
import { useDeferredValue, useState } from "react";

function App() {
  const [clicked, setClicked] = useState<boolean>(false);
  const clickedDef = useDeferredValue(clicked)
  return (
    <>
      {/* <PMedia></PMedia> */}
      {/* <Skeleton src={photo} style={{ height: 460, width: 460 }}>
        <img src={photo} alt="" />
      </Skeleton> */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        margin: 'auto',
        width: 300,
        height: 300,
        background: '#98cce3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* <Popper>123</Popper> */}
        <Button onClick={() => setClicked(!clickedDef)}>click me</Button>
        {
          clickedDef && <Transition>
            这里有动画哟
          </Transition>
        }
      </div>
    </>
  );
}

export default App;
