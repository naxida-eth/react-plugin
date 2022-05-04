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
      <div style={{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        margin:'auto',
        width:300,
        height:300,
        background:'#98cce3',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}>
        <Popper>123</Popper>
      </div>
    </>
  );
}

export default App;
