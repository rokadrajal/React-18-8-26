import { useEffect, useMemo, useState } from "react";
import { IoFilter } from "react-icons/io5"

function App() {
  const API = "http://localhost:3000/Employees";

  const [data, setdata] = useState([]);
  const [perPagesData, setPerPagesData] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isSort, setIsSort] = useState(false);

  const totalPages = Math.ceil(data.length / perPagesData);

  const lastIndex = currentPage * perPagesData;
  const firstIndex = lastIndex - perPagesData;

  const currentData = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      response.json().then((data) => {
        setdata(data);
      })
    })
  }, [data]);


  // ================  useMemo ================

  let filterdata = useMemo(() => {
    if (!isSort) {
      return [...currentData];
    }
   
    return [...currentData].sort((a, b) => {return (a.age - b.age)});
    
  }, [currentData , isSort]);

  const handelfilter = () => {
    if(!isSort){
      setIsSort(true);
    }
    else
    {
      setIsSort(false);
    }
  };


  return (
    <>
      <div className="container d-flex justify-content-center align-items-center ">
        <h2 className="fw-bold text-dark pt-4 fs-1">
          Employee Management
        </h2>
      </div>

      <div className="container d-flex pt-3">
        <input type="text" placeholder="Enter Here" className="flex-grow-1 px-2 py-2 rounded border-0 border-bottom" onChange={(e) => { setSearch(e.target.value) }} />
      </div>

      <div className="container mt-4">
        <div className="table-responsive shadow rounded">
          <table className="table table-bordered table-hover table-striped text-center mb-0">

            <thead className="table-dark">
              <tr>
                <th>EMPLOYEE ID</th>
                <th>NAME</th>
                <th className="d-flex justify-content-between align-items-center">AGE
                  <IoFilter onClick={handelfilter} />
                </th>
                <th>EMAIL</th>
                <th>DEPARTMENT</th>
                <th>POSITION</th>
                <th>SALARY</th>
                <th>CITY</th>
              </tr>
            </thead>

            <tbody>
              {
                filterdata.filter((element) => {
                  return element.name.toLowerCase().includes(search.toLowerCase());
                }).map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.id}</td>
                      <td>{element.name}</td>
                      <td>{element.age}</td>
                      <td>{element.email}</td>
                      <td>{element.department}</td>
                      <td>{element.position}</td>
                      <td>{element.salary}</td>
                      <td>{element.city}</td>
                    </tr>
                  )

                })

              }
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="8">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold">Per Page Rows:</span>

                      <select className="form-select form-select-sm w-auto" onChange={(e) => { setPerPagesData(e.target.value) }}>
                        <option>5</option>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>75</option>
                        <option>100</option>
                      </select>
                    </div>

                    <div className="text-muted">
                      Page <b>{currentPage}</b> of <b>{totalPages}</b> (Total {data.length} Entries)
                    </div>

                    <div>
                      <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => { setCurrentPage(currentPage - 1) }} disabled={currentPage == 1}>
                        Pre
                      </button>

                      <button className="btn btn-primary btn-sm" onClick={() => { setCurrentPage(currentPage + 1) }} disabled={currentPage == totalPages} >
                        Next
                      </button>
                    </div>

                  </div>
                </td>
              </tr>
            </tfoot>

          </table>
        </div>
      </div>
    </>
  )
}

export default App
