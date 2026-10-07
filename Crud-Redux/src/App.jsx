import { useState } from "react";
import { addProduct } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.products;
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        id: data.length + 1,
        name: name,
        category: category,
        price: price,
        quantity: quantity,
      })
    );
  };

  return (
    <>
      <div className="container mt-5">

        <h1 className="text-center mb-4">
          Product Management
        </h1>

        {/* Form */}
        <form className="card p-4 shadow mb-5">

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Product Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Product Quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>

          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary me-2"
              onClick={handlesubmit}
            >
              Add Product
            </button>

            <button
              type="reset"
              className="btn btn-secondary"
            >
              Reset
            </button>
          </div>

        </form>
        
        <div className="table-responsive shadow rounded">

          <table className="table table-bordered table-hover table-striped mb-0">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.category}</td>
                      <td>₹{element.price}</td>
                      <td>{element.quantity}</td>

                      <td>
                        <button className="btn btn-warning btn-sm me-2">
                          Edit
                        </button>

                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default App;