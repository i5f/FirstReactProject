import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <> {/* this is a fragment, the div that was here before served no purpose
    so for the performance reasons, I changed it to a fragment. A fragment is
    basically a container with no performance drawbacks */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;