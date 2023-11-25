import "./PDF.css";
import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../img/logo.png";

function PDF() {
  const location = useLocation();
  const filteredData = location.state
    ? location.state.data
    : JSON.parse(localStorage.getItem("filteredData") || "[]");

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  const address = "";
  const number = "";
  const email = "";
  const website = "";
  const componentPDF = useRef();

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Users",
  });

  return (
    <>
      <div className="max-w-4xl  mx-auto mt-5 relative">
        <Link to="/" className="text-secondary mt-2 mr-2 p-2.5">
          <FaArrowLeft className="icon" />
        </Link>
        <button
          className="btn btn-success absolute top-0 right-0 mt-2 mr-2"
          onClick={generatePDF}
        >
          Download PDF
        </button>
        <div
          className="w-screen border max-w-4xl mx-auto mt-8 p-5"
          ref={componentPDF}
        >
          <div className="flex justify-between">
            <img className="h-20 w-auto" src={logo} alt="image description" />
            <h1 className="absolute bp">BALANGUE-PUNLA</h1>
            <h2 className="absolute dc">DENTAL CLINIC</h2>
            <p className="text-sm">
              Address: {address}
              <br />
              Telephone No: {number}
              <br />
              Email: {email}
              <br />
              Website: {website}
            </p>
          </div>
          <br />
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Services
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Availed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    Bunot
                  </th>
                  <td className="px-6 py-4">2</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Client Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Appointment
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Services
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData && filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap"
                      >
                        {item.id}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap"
                      >
                        {item.name} {/* Replace with actual data field */}
                      </th>
                      <td className="px-6 py-4">
                        {item.username}{" "}
                        {/* Replace with actual data field */}
                      </td>
                      <td className="px-6 py-4">
                        {item.email} {/* Replace with actual data field */}
                      </td>
                      <td className="px-6 py-4">
                        {item.date} {/* Replace with actual data field */}
                      </td>
                      <td className="px-6 py-4">
                        {item.phones} {/* Replace with actual data field */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PDF;
