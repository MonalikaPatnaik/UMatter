import React, { useEffect, useState } from 'react';
import { habits } from './HabitsData';
import { BiEditAlt } from 'react-icons/bi';
import styles from './style.module.css';

function convertStringToArray(inputString) {
  inputString = inputString.trim().toLowerCase();
  let values = inputString.split(',');
  let result = values.map(function (value) {
    return value === 'true';
  });
  return result;
}

function countOccurrences(arr, element) {
  return arr.reduce((acc, current) => (current === element ? acc + 1 : acc), 0);
}

function Index() {
  const [activityStatus, setActivityStatus] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('activity')) {
      let TempArray = convertStringToArray(localStorage.getItem('activity'));
      setActivityStatus(TempArray);
    } else {
      let blankarr = Array(habits.length).fill(false);
      setActivityStatus([...blankarr]);
      localStorage.setItem('activity', blankarr);
    }
  }, []);

  function handleActivityClick(index) {
    let status = activityStatus;
    // console.log(typeof status);
    try {
      status[index] = !status[index];
      localStorage.setItem('activity', status);
      // console.log(localStorage.getItem("activity"));
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className={`flex px-16 pt-6 flex-col ${styles.container}`}>
      <h1 className="sm:text-xl text-5xl uppercase text-center font-bold w-100 ">
        Your Today's Score - {countOccurrences(activityStatus, true)}/5
      </h1>
      {/* Table */}

      <div
        className={`relative overflow-x-auto shadow-md sm:rounded-lg mt-4  w-9/12 xs:w-full mx-auto ${styles.table}`}
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {Object.keys(habits[0]).map((elem, index) => {
                return (
                  <th
                    scope="col"
                    key={index}
                    className={`px-6 py-3 bg-slate-200 text-center ${index === 3 && styles.respo}`}
                  >
                    {elem}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {habits.map((habi, ind) => {
              return (
                <>
                  <tr
                    key={ind}
                    className={`${
                      ind & 1 ? 'bg-slate-200' : 'bg-white'
                    } border-b dark:bg-gray-900 dark:border-gray-700 text-center `}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {habi.name}
                    </th>
                    <td className={`px-6 py-4 ${styles.detail}`}>{habi.detail}</td>

                    <td className={`h-8  ${styles.icon}`}>{habi.icon}</td>
                    <td className=" flex item- w-full items-center justify-center	h-16 ">
                      <buttom
                        data-tooltip-target="tooltip-bottom"
                        data-tooltip-placement="bottom"
                        onClick={() => handleActivityClick(ind)}
                        className={`aspect-square	 h-1/3  ${
                          activityStatus[ind] === true ? 'bg-green-300' : 'bg-red-500'
                        } rounded-full`}
                      ></buttom>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
