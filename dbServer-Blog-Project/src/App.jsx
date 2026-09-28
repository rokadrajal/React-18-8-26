import { useState } from 'react';
import './App.css'

function App() {

  const API = "http://localhost:3000/blog";
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(null);

  fetch(API, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
  ).then((response) => {
    response.json().then((data) => {
      setData(data);
    })
  });

  const handleclick = () => {
    const blog = {
      title, author, img, description, date
    }

    if (!id) {
      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      });
    }
    else {
      fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      });
    }
  }

  const handledelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }

  const handleedit = (edit) => {
    setId(edit.id);
    setTitle(edit.title);
    setAuthor(edit.author);
    setImg(edit.img);
    setDescription(edit.description);
    setDate(edit.date);
  }

  return (
    <>
      <div className='mt-4 ' style={{position: "fixed",left: "30px",top: "15%",width: "400px",}}>
        <form className="card  p-4  bg-dark text-light">

          <h4 className="text-center mb-4">{(!id) ? "Add New Blog" : "Edit Blog"}</h4>

          <div className="row g-3">

            <div className="col-md-12">
              <input type="text" value={title} required  placeholder="Enter Blog Title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="col-md-12">
              <input type="text" value={author} required placeholder="Enter Blog Author" className="form-control" onChange={(e) => setAuthor(e.target.value)} />
            </div>

            <div className="col-md-12">
              <input type="text" value={img} required placeholder="Enter Blog Image URL" className="form-control" onChange={(e) => setImg(e.target.value)}  />
            </div>

            <div className="col-md-12">
              <input type="text" value={date} required placeholder="Enter Blog Date" className="form-control" onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="col-12">
              <textarea value={description} required placeholder="Enter Blog Description" className="form-control" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

          </div>

          <div className="text-center mt-4">
            <button type="button" className="btn btn-primary px-5" onClick={handleclick}>{(!id) ? "Add" : "Edit"}</button>
          </div>

        </form>
      </div>



      <div className="container-fluid mt-4 pb-4" style={{marginLeft: "550px", width: "60%"}}>
        <div className="row g-4">
          {
            data.map((element, index) => {
              return (
                <div className="col-lg-6 col-md-12" key={index}>
                  <div className="card  border-0 h-100 rounded-4 bg-dark text-light">

                    <div className="card-body">

                      <h6 className="card-text mb-3">
                        Blog : {index + 1}
                      </h6>

                      <h3 className="card-title">
                        {element.title}
                      </h3>

                      <p className="card-text">
                        By {element.author}
                      </p>

                      <img src={element.img} style={{ objectFit: "cover", width: "100%", height: "200px" }} alt="" />

                      <p className="card-text mt-3">
                        <strong>Description :</strong>{" "}
                        {element.description}
                      </p>

                      <p className="card-text">
                        <strong>Date :</strong> {element.date}
                      </p>
                    </div>

                    <div className='d-flex justify-content-evenly  pb-4'>
                      <button className='btn btn-danger px-4 py-2' onClick={() => { handledelete(element.id)}}>Delete</button>
                      <button className='btn btn-warning px-4 py-2' onClick={() => { handleedit(element) }}>Edit</button>
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
