// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState([]); // Initialize as an empty array

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((result) => {
//         if (!result.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return result.json();
//       })
//       .then((resp) => {
//         setData(resp);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   console.warn(data);

//   return (
//     <div className="App">
//       <h1>Get API Call</h1>
//       <table border={1}>
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.userId}</td>
//               <td>{item.id}</td>
//               <td>{item.title}</td>
//               <td>{item.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;












// import { Link } from "react-router-dom";

// function Nav() {

//     return (
//         <div>
//             <Link to='/home'>Home Page</Link>
//             <br></br>
//             <Link to='/about'>About Page</Link>
//             <br></br>
//             <Link to='demoinside'>DemoInside</Link>
//             <br></br>
//             <Link to='user'>User</Link>
//         </div>
//     )

// }
// export default Nav;

