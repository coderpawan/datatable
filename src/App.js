import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const App = () => {
  const [data, setData] = useState([]);
  const [original, setOriginal] = useState([]);
  const [menu, setMenu] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const OpenMenu = () => {
    setMenu(!menu);
  };
  const CloseMenu = () => {
    setMenu(false);
  };
  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/67v4tfzurqn8u")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setOriginal(result);
      });
  }, []);

  const ascending = (first_name) => {
    const sorted = [...data].sort((a, b) =>
      a.first_name > b.first_name ? 1 : -1
    );
    console.log(sorted);
    setData(sorted);
    setMenu(false);
  };
  const descending = (first_name) => {
    const sorted = [...data].sort((a, b) =>
      a.first_name < b.first_name ? 1 : -1
    );
    setData(sorted);
    setMenu(false);
  };
  // const ChangeColor = (i) => {
  //   if (i === isActive) {
  //     setIsActive(null);
  //   } else setIsActive(i);
  // };
  return (
    <div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal ">
            <thead>
              <tr>
                <div className="flex">
                  <th class="px-4 py-3 flex border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="">First Name</div>
                    {menu ? (
                      <div className="absolute z-50 w-fit top-12  origin-top-right">
                        <div className="px-2 pt-2 pb-2 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                          <div
                            onClick={() => {
                              setData(original);
                              setMenu(false);
                            }}
                            className="cursor-pointer"
                          >
                            Unsort
                          </div>
                          <div onClick={ascending} className="cursor-pointer">
                            ASD
                          </div>
                          <div onClick={descending} className="cursor-pointer">
                            DES
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <RiArrowDropDownLine
                      onClick={OpenMenu}
                      className={`text-black text-xl cursor-pointer`}
                    />
                  </th>
                </div>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Last Name
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Gender
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  IPaddress
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Code
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Time
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Mobile
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Area
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Show
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, i) => {
                return (
                  <tr
                    key={i}
                    // onClick={ChangeColor(i)}
                    className={isActive === i ? "bg-blue-500" : ""}
                  >
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {student.first_name}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {student.last_name}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.email}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.gender}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.ip_address}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.airportcode}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.time}
                      </p>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        {
                          (student.status = "FALSE" ? (
                            <span class="relative p-2 bg-green-200 rounded-full">
                              {student.status}
                            </span>
                          ) : (
                            <span class="relative p-2 bg-red-500 rounded-full">
                              {student.status}
                            </span>
                          ))
                        }
                      </span>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.mobile}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.area}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.show}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap flex">
                        {student.edit}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
