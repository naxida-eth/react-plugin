import PMedia from "./components/PMedia";
import Skeleton from './components/Skeleton'
import photo from './images/photo.jpg'

function App() {
  return (
    <>
      {/* <PMedia></PMedia> */}
      <Skeleton src={photo} style={{ height: 460, width: 460 }}>
        <img src={photo} alt="" />
      </Skeleton>
    </>
  );
}

export default App;
