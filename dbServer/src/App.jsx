import { useState } from "react";


function App() {
  const API = "http://localhost:3000/blogs";
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  fetch(API, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then((response) => {
    response.json().then((data) => {
      setData(data);
    });
  });


  const handleclick = (e) => {
    e.preventDefault();

    const blog = {
      title, author, description, date,
    }

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    });
  }


  const handledelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })

  }

  const handleedit = ()=>{
    
  }

  return (
    <>
      <br />
      <form className="text-center">
        <input type="text" value={title} placeholder="Enter Blog Title" className="px-4 py-1" onChange={(e) => { setTitle(e.target.value) }} />
        <br />
        <br />
        <input type="text" value={author} placeholder="Enter Blog Author Name" className="px-4 py-1" onChange={(e) => { setAuthor(e.target.value) }} />
        <br />
        <br />
        <input type="text" value={description} placeholder="Enter Blog Description" className="px-4 py-1" onChange={(e) => { setDescription(e.target.value) }} />
        <br />
        <br />
        <input type="text" value={date} placeholder="Enter Blog Date" className="px-4 py-1" onChange={(e) => { setDate(e.target.value) }} />
        <br />
        <br />
        <button className="btn btn-primary px-4" onClick={handleclick}>Add</button>
      </form>

      <div className="container mt-4">
        <div className="row g-4">

          {
            data.map((element, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="card shadow h-100">

                    <div className="card-body">

                      <h6 className="text-muted mb-3">
                        Blog : {index+1}
                      </h6>

                      <h3 className="card-title">
                        Title : {element.title}
                      </h3>

                      <p className="card-text">
                        <strong>Author :</strong> {element.author}
                      </p>

                      <p className="card-text">
                        <strong>Description :</strong>{" "}
                        {element.description}
                      </p>

                      <p className="card-text">
                        <strong>Date :</strong> {element.date}
                      </p>

                    </div>

                    <div className="p-3 d-flex justify-content-evenly">
                      <button className="btn btn-danger px-4 py-2 " onClick={() => {
                        handledelete(element.id);
                      }}>Delete</button>
                      <button className="btn btn-light px-4 py-2 " onClick={() => { handleedit(element.id) }}>Edit</button>
                    </div>

                  </div>
                </div>
              );
            })}

        </div>
      </div>
    </>
  )
}

export default App;
