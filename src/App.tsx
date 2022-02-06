import { Fragment, useState } from "react";
import { Header } from "components";
import { Meals } from "view/Meals";
import { Cart } from "view/Cart";

function App() {
  const [cartModal, setCartModal] = useState(false);
  const openModal = () => {
    setCartModal(true);
  };

  const closeModal = () => {
    setCartModal(false);
  };
  return (
    <Fragment>
      {cartModal && <Cart onModalClose={closeModal} />}

      <Header onModalOpen={openModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
