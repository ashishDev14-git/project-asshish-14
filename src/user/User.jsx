// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function User() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Simulate fetching user data
//     const users = [
//       { id: 1, name: "anil", email: 'anil@test.com' },
//       { id: 2, name: "sam", email: 'sam@test.com' },
//       { id: 3, name: "peter", email: 'peter@test.com' },
//       { id: 4, name: "bruce", email: 'bruce@test.com' },
//       { id: 5, name: "tony", email: 'tony@test.com' },
//       { id: 6, name: "batman", email: 'batman@test.com' },
//     ];

//     const foundUser = users.find(user => user.id === parseInt(id));
//     setUser(foundUser);
//   }, [id]);

//   if (!user) return <p>User not found.</p>;

//   return (
//     <div>
//       <h2>Hi, this is {user.name} (User ID: {user.id})</h2>
//       <p>Email: {user.email}</p>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>
//     </div>
//   );
// }

// export default User;






import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import User from './user/User';

function App() {
  const users = [
    { id: 1, name: "anil", email: 'anil@test.com' },
    { id: 2, name: "sam", email: 'sam@test.com' },
    { id: 3, name: "peter", email: 'peter@test.com' },
    { id: 4, name: "bruce", email: 'bruce@test.com' },
    { id: 5, name: "tony", email: 'tony@test.com' },
    { id: 6, name: "batman", email: 'batman@test.com' },
  ];

  return (
    <div className='App'>
      <h1>React Dynamic Routing</h1>
      {users.map((item) => (
        <div key={item.id}>
          <Link to={`/user/${item.id}/${item.name}/${item.email}`}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
      <Routes>
        <Route path="/user/:id/:name/:email" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
























// import './App.css';

// import { useEffect, useState, } from 'react';

// function App() {
//   const [data, setData]=useState([]);
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
//       result.json().then((resp)=>{
//         setData(resp)
//       })
//     })
//   },[])
//   console.warn(data);
//   return (
//     <div className="App">

//       <h1>
//         Get API Call
//       </h1>
//       <table border={1}>
//         <tr>
//           <td>Id</td>
//           <td>IT</td>
//           <td>Title</td>
//           <td>Body</td>
//           {/* <td>Details</td> */}
//         </tr>
//        {
//         data.map((item)=>
//           <tr key={item.id}>
//             <td>{item.userId}</td>
//             <td>{item.id}</td>
//             <td>{item.title}</td>
//             <td>{item.body}</td>  
//           </tr>
//         )
//        }

//       </table>
//     </div>
//   );
// }



// export default App;
