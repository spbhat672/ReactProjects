import { createCart, deleteCart, createItems, createUser, deleteUser } from "../reducers/cartAndUserReducer";
import { createLocation, deleteLocation } from "../reducers/locationReducer";
import { useDispatch, useSelector } from "react-redux";

const Home=()=> {
  const dispatch = useDispatch();
  const { cart, items } = useSelector((state) => state.carts);
  const { user} = useSelector((state) => state.users);
  const { location } = useSelector((state) => state.locations);
  const handleAdd = () => {
    dispatch(createCart(1));
  };
  const handleSubtract = () => {
    dispatch(deleteCart(1));
  };

  const handleAddLocation = () => {
    dispatch(createLocation(1));
  };
  const handleSubtractLocation = () => {
    dispatch(deleteLocation(1));
  };

  const handleAddItems = () => {
    dispatch(createItems(1));
  };

  const addUser = () => {
    dispatch(createUser(1));
  };

  const removeUser = () => {
    dispatch(deleteUser(1));
  };

  return (
    <div style={{ display: "-webkit-inline-flex" }}>
      <button style={{ margin: "10px" }} onClick={handleAdd}>
        add to cart
      </button>
      <button style={{ margin: "10px" }} onClick={handleSubtract}>
        remove from cart
      </button>
      <h3> cart value Is </h3>
      <h5 style={{ marginLeft: "20px" }}>{cart}</h5>

      <button style={{ margin: "10px" }} onClick={handleAddLocation}>
        add location
      </button>
      <button style={{ margin: "10px" }} onClick={handleSubtractLocation}>
        remove Location
      </button>
      <h3> Location value Is </h3>
      <h5 style={{ marginLeft: "20px" }}>{location}</h5>

      <button style={{ margin: "10px" }} onClick={handleAddItems}>
        add item
      </button>
      <h3> Item value Is </h3>
      <h5 style={{ marginLeft: "20px" }}>{items}</h5>



      <button style={{ margin: "10px" }} onClick={addUser}>
        add User
      </button>
      <button style={{ margin: "10px" }} onClick={removeUser}>
        remove User
      </button>
      <h3> Users are </h3>
      <h5 style={{ marginLeft: "20px" }}>{user}</h5>
    </div>
  );
}

export default Home;