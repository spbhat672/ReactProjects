import React, { useState, useEffect } from 'react';

const Table = ({ data, onChangeAge, onChangeGender,genderData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>
            <select
                value={row.gender}
                onChange={(e) => onChangeGender(row.id, e.target.value)}
                >
                <option value="">Choose gender</option>
                {genderData.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.text}
                    </option>
                ))}
            </select>
            </td>
            <td>
              <input
                type="number"
                value={row.age === null ? '' : row.age}
                onChange={(e) => onChangeAge(row.id, parseInt(e.target.value))}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const users = [
    {
      id:1,
      name:"santosh"
    },
    {
      id:2,
      name:"Sushma"
    }
  ];

  const genderData = [
    {
      text: 'Male',
      value: 'male',
    },
    {
      text: 'Female',
      value: 'female',
    },
  ];

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    // const fetchUserData = async () => {
    //   const response = await fetch('https://api.example.com/users');
    //   const data = await response.json();
    //   setUserData(data);
    //   setIsUserDataLoaded(true);
    // };

    // fetchUserData();
    setUserData(users);
    setResultData(users);
    setIsUserDataLoaded(true);
  }, []);

  const handleChangeAge = (id, age) => {
    setResultData((prevData) =>
      prevData.map((row) =>(row.id === id ? { ...row, age } : row))
    );
  };

  const handleChangeGender = (id, gender) => {
    setResultData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, gender } : row))
    );
  };

  const handleSave = () => {
    const hasEmptyFields = resultData.some(
      (row) => !row.gender || !row.age
    );
  
    if (hasEmptyFields) {
      alert('Please enter gender and age for all rows.');
    } else {
      const updatedResultData = resultData.map((row) => {
        const user = userData.find((u) => u.id === row.id);
        return {
          ...row,
          gender: row.gender || user.gender || '',
          age: row.age || user.age || ''
        };
      });
  
      setResultData(updatedResultData);
      console.log(updatedResultData);
    }
  };
  
  const handleRowAdd=()=>{
    let nextId = userData[userData.length - 1].id + 1;
    let row = {
        id:nextId,
        name:"Unknown"
    }
    setUserData([...userData,row]);
    setResultData([...resultData,row]);
  }


  return (
    <div>
      {isUserDataLoaded ? (
        <Table
          data={userData}
          onChangeAge={handleChangeAge}
          onChangeGender={handleChangeGender}
          genderData = {genderData}
        />
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={handleSave}>Save</button>
      <button onClick={handleRowAdd}>Add row</button>
    </div>
  );
};

export default Home;
