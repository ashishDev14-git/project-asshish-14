import React from "react";

function App(){
  const [data, setData]=React.useState({name:'anil',age:40})

  return(
    <div className="App">
      <h1>State Object with</h1>
      <input type="text" placeholder="enter name" value={data.name}
      onChange={(e)=>{setData({...data, name:e.target.value})}} />
     <br></br> <input type="text" placeholder="enter age" value={data.age}
       onChange={(e)=>{setData({...data, age:e.target.value})}} />
<br></br>
       <h1>{data.name}</h1>
       <h1>{data.age}</h1>
    </div>
  )
}

export default App;


// import './App.css';

// import { useEffect, useState, } from 'react';

// function App() {
//   const [data, setData]=useState([]);
//   useEffect(()=>{
//     getList()
//   },[])
//   console.warn(data);
//   function getList(){
//     fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
//       result.json().then((resp)=>{
//         setData(resp)
//       })
//     })
//   }
//   console.log('delete item',deleteUser)

//   function deleteUser(id){

//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//       method:'DELETE'
//     }).then((result)=>{
//       result.json().then((resp)=>{
//         console.warn(resp)
//         getList()
//       })
//     })
//   }
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
//         data.map((item,)=>
//           <tr key={item.id}>
//             <td>{item.userId}</td>
//             <td>{item.id}</td>
//             <td>{item.title}</td>
//             <td>{item.body}</td>  
//             <td><button onClick={()=> deleteUser(item.id)}>Delete</button></td>
//           </tr>
//         )
//        }

//       </table>
//     </div>
//   );
// }



// export default App;




// import React, { useState } from "react";

// function App(){
//   const [title, setName]= useState("");
//   const [body, setEmail] = useState("");
//   const [id, setPhone] = useState("");

//   function saveUser(){
//     console.warn({title, body,id});
//     const data={title, body,id};

//     fetch("https://jsonplaceholder.typicode.com/posts",{
//       method:'POST',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//       result.json().then((respond)=>{
//         console.warn("resp", respond)
//       })

//     })
//   }
// return(
//   <div className="App">
//     <h1>POST API Call Example</h1>
//     <input type="text" value={title} onChange={(e)=>{setName(e.target.value)}} name="name"/> <br></br>
//     <input type="text" value={body} onChange={(e)=>{setEmail(e.target.value)}} name="email" /> <br></br>
//     <input type="text" value={id} onChange={(e)=>{setPhone(e.target.value)}} name="phone" /> <br></br>
//     <button type="button" onClick={saveUser}>Save New User </button>
//   </div>
// )

// };

// export default App;






















// // import { Link, Route, Routes } from 'react-router-dom';
// // import './App.css';
// // import User from './user/User';

// // function App() {
// //   const users = [
// //     { id: 1, name: "anil", email: 'anil@test.com' },
// //     { id: 2, name: "sam", email: 'sam@test.com' },
// //     { id: 3, name: "peter", email: 'peter@test.com' },
// //     { id: 4, name: "bruce", email: 'bruce@test.com' },
// //     { id: 5, name: "tony", email: 'tony@test.com' },
// //     { id: 6, name: "batman", email: 'batman@test.com' },
// //   ];

// //   return (
// //     <div className='App'>
// //       <h1>React Dynamic Routing</h1>
// //       {users.map((item) => (
// //         <div key={item.id}>
// //           <Link to={`/user/${item.id}/${item.name}/${item.email}`}>
// //             <h3>{item.name}</h3>
// //           </Link>
// //         </div>
// //       ))}
// //       <Routes>
// //         <Route path="/user/:id/:name/:email" element={<User />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;






















