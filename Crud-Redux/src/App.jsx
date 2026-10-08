import { useState } from "react";
import { addProduct, deleteProduct, editProduct } from "./redux/Action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id , setId] = useState(null);

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.products;
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    if(name == "" || category == "" || price == "" || quantity == ""){
      return
    }

    if(!id){
      dispatch(
        addProduct({
          id: data.length + 1,
          name: name,
          category: category,
          price: price,
          quantity: quantity,
        })
      );
    }
    else
    {
      dispatch(
        editProduct({
          id: id,
          name: name,
          category: category,
          price: price,
          quantity: quantity,
        }));
    }

    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setId(null);

  };

  const handleEdit = (element)=>{
    setName(element.name);
    setCategory(element.category);
    setPrice(element.price);
    setQuantity(element.quantity);
    setId(element.id);
  }

  const handleReset = ()=>{
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setId(null);
  }


  return (
    <>
      <div className="container mt-5">

        <h1 className="text-center mb-4">
          Product Management
        </h1>

        {/* Form */}
        <form className="card p-4 shadow mb-5">

          <div className="row">
            <h1 className="mb-4">{(!id) ? "Add Product" : "Edit Product"}</h1>

            <div className="col-md-6 mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Product Name"
                value={name}
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
                 value={category}
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
                 value={price}
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
                value={quantity}
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
              {(!id) ? "Add Product" : "Edit Product"}
            </button>

            <button
              type="reset"
              className="btn btn-secondary"  onClick={()=>{handleReset()}}
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
                        <button className="btn btn-warning btn-sm me-2"  onClick={()=>{handleEdit(element)}}>
                          Edit
                        </button>

                        <button className="btn btn-danger btn-sm"  onClick={()=>{dispatch(deleteProduct(element.id))}}>
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