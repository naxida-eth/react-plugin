import PMedia from "./components/PMedia";
import Skeleton from './components/Skeleton'
import photo from './images/photo.jpg'

import Popper from "./components/Popper";

function App() {
  return (
    <>
      {/* <PMedia></PMedia> */}
      {/* <Skeleton src={photo} style={{ height: 460, width: 460 }}>
        <img src={photo} alt="" />
      </Skeleton> */}
      <Popper></Popper>
    </>
  );
}

export default App;
