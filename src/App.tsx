import { Fragment } from "react";
import { Header } from "components";
import { Meals } from "view/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
