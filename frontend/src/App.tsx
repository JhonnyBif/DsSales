import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <h1 className="text-primary">Fala Garoto</h1>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
