import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [tableData, setTableData] = useState([]);
  const [sortedTableData, setSortedTableData] = useState([]);

  const handleClick = (val) => {
    setShow(val);

    if (tableData.length === 0) return;

    if (val === "all") {
      const status = ["active", "completed"];
      const sortedData = tableData.sort((a, b) => {
        const orderA = status.indexOf(a.status.toLowerCase());
        const orderB = status.indexOf(b.status.toLowerCase());

        if (orderA === -1) return 1;
        if (orderB === -1) return -1;

        return orderA - orderB;
      });
      setSortedTableData(sortedData);
    } else {
      const filteredData = tableData.filter(
        (data) => data.status.toLowerCase() === val
      );

      setSortedTableData(filteredData);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      status: e.target.elements.status.value,
    };

    setTableData((previousValue) => [...previousValue, formData]);

    e.target.reset();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleFormSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show === "all" ? (
                <>
                  {tableData?.map((data, index) => (
                    <tr key={index}>
                      <th>{data.name}</th>
                      <th>{data.status}</th>
                    </tr>
                  ))}
                </>
              ) : show !== "all" && sortedTableData !== 0 ? (
                <>
                  {sortedTableData?.map((data, index) => (
                    <tr key={index}>
                      <th>{data.name}</th>
                      <th>{data.status}</th>
                    </tr>
                  ))}
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
