import Card from "./Components/UI/Card";
import Navbar from "./Components/Content/Navbar";
import Section from "./Components/Content/Section";
import dataArray from "./Data";

function App() {
  const data = dataArray.map((dataArrayItem) => {
    return <Section key={dataArrayItem.id} item={dataArrayItem} />;
  });

  return (
    <div className="App">
      <Card>
        <Navbar />
        {data}
      </Card>
    </div>
  );
}

export default App;
