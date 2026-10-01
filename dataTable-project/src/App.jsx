import { useEffect, useState } from "react";


function App() {
  const API = "http://localhost:3000/Employees";

  const [employeeData, setEmployeeData] = useState([]);
  const [perPagesData, setPerPagesData] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(employeeData.length / perPagesData);

  const lastIndex = currentPage * perPagesData;
  const firstIndex = lastIndex - perPagesData;

  const currentData = employeeData.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      response.json().then((data) => {
        setEmployeeData(data);
      })
    });

  }, []);


  return (
    <>
      <div className="container d-flex justify-content-center align-items-center ">
        <h2 className="fw-bold text-dark pt-4 fs-1">
          Employee Management
        </h2>
      </div>

      <div className="container mt-4">
        <div className="table-responsive shadow rounded">
          <table className="table table-bordered table-hover table-striped text-center mb-0">

            <thead className="table-dark">
              <tr>
                <th>EMPLOYEE ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>  
                <th>DEPARTMENT</th>
                <th>POSITION</th>
                <th>SALARY</th>
                <th>CITY</th>
              </tr>
            </thead>

            <tbody>
              {
                currentData.map((element, index) => {
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
                      Page <b>{currentPage}</b> of <b>{totalPages}</b> (Total {employeeData.length} Entries)
                    </div>

                    <div>
                      <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => { setCurrentPage(currentPage - 1) }} disabled={currentPage == 1}>
                        Pre
                      </button>

                      <button className="btn btn-primary btn-sm" onClick={() => { setCurrentPage(currentPage + 1) }} disabled={currentPage == totalPages}>
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
