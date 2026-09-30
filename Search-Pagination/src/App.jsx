import { useEffect, useState } from "react"

function App() {
  const API = "http://localhost:3000/blogs";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPages, setCurrentPages] = useState(1);

  fetch(API, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then((response) => {
    response.json().then((data) => {
      setData(data);
    })
  });

  const perPagesBlog = 3;
  const totalPages = Math.ceil(data.length / perPagesBlog);

  const lastIndex = perPagesBlog * currentPages;
  const firstIndex = lastIndex - perPagesBlog;

  const currentData = data.slice(firstIndex, lastIndex);

  useEffect(() => {

  }, [data]);

  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <input
              type="text"
              placeholder="Enter blog name"
              className="form-control form-control-lg shadow-sm"
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row g-4">

          {
            currentData.filter((element) => {
              return element.title
                .toLowerCase()
                .includes(search.toLowerCase())

            }).map((element, index) => (

              <div className="col-md-6 col-lg-4" key={index}>

                <div className="card h-100 shadow border-0">

                  <img
                    src={element.img}
                    className="card-img-top"
                    alt=""
                    style={{
                      height: "200px",
                      objectFit: "cover"
                    }}
                  />

                  <div className="card-body">

                    <h6 className="text-muted">
                      ID: {element.id}
                    </h6>

                    <h2 className="card-title fs-4">
                      {element.title}
                    </h2>

                    <p className="card-text">
                      <strong>Author:</strong> {element.author}
                    </p>

                    <p className="card-text">
                      {element.description}
                    </p>

                    <p className="text-secondary mb-0">
                      <strong>Date:</strong> {element.date}
                    </p>

                  </div>

                </div>

              </div>
            ))
          }

        </div>
      </div>

      <div className="container my-5">

        <nav>
          <ul className="pagination justify-content-center">

            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPages(currentPages - 1)
                }}
                disabled={currentPages == 1}
              >
                Previous
              </button>
            </li>

            {
              Array.from({ length: totalPages }).map((_, index) => {
                return (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPages == index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => {
                        setCurrentPages(index + 1)
                      }}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              })
            }

            <li className="page-item">
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPages(currentPages + 1)
                }}
                disabled={currentPages == totalPages}>
                Next
              </button>
            </li>

          </ul>
        </nav>

      </div>
    </>
  )
}

export default App