import React, { useState, useEffect } from 'react';

function User() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  };

  useEffect(() => {
    getUser();
  }, []);

  const Card = (props) => {
    const { data } = props; 
    return (
      <>
        <div className='col-10 col-md-4 mt-5'>
          <div className='card p-2'>
            <div className='d-flex align-item-center'>
              <div className='image'><img src={data.avatar_url} alt='' className='rounded' width="155" /></div>
              <div className='ml-3 w-100'>
                <h4 className='mb-0 mt-0 textLeft'>{data.login}</h4>
                <span className='textLeft'>Web Developer</span>
                <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                  <div className='d-flex flex-column'>Articles<span className='articles'>38</span></div>
                  <div className='d-flex flex-column'>Followers<span className='articles'>638</span></div>
                  <div className='d-flex flex-column'>Rating<span className='articles'>8.6</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='container-fluid'>
      <h1 className='text-center mt-5'> GitHub User List</h1>
      <div className='row'>
        {users.map((data) => {
          return <Card key={data.id} data={data} />; 
        })}
      </div>
    </div>
  );
}

export default User;
