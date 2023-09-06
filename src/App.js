import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div
      className="App relative min-h-[calc(100vh-250px)] overflow-x-hidden block top-[72px] px-[calc(3.5vw-5px)] 
    after:bg-[url('../public/images/home-background.png')] after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed 
    after:absolute after:content-center after:inset-0 after:z-[-1] after:h-fit"
    >
      <Nav />
      <Banner />
    </div>
  );
}

export default App;
