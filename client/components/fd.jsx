// import React from "react";
// import axios from 'axios';


// const Modal = (props) => {
//     const { useState, useEffect } = React;
  
//     const showHideClassName = props.show
//       ? "modal display-block"
//       : "modal display-none";
//     const [body, setbody] = useState([]);
//     const [name, setname] = useState([]);
//     const [email, setemail] = useState([]);
//     const [id, setId] = useState(11003);
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     const handleSubmit = () => {
//       axios
//         .post("qa/questions", {
//           body,
//           name,
//           email,
//           product_id: id,
//         })
//         .then((response) => {
//           console.log("posted ", response);
//           props.setShow(false);
//         })
//         .catch((err) => console.log(err));
//     };
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     return (
//       <div className={showHideClassName}>
//         <section className="modal-main">
//           <div className="w-full max-w-xs">
//             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="body"
//                 >
//                   body
//                 </label>
//                 <textarea
//                   onChange={(e) => setbody(e.target.value)}
//                   className="resize-none border rounded-md"
//                 ></textarea>
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="name"
//                 >
//                   name
//                 </label>
//                 <input
//                   onChange={(e) => setname(e.target.value)}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   placeholder="your name"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2"
//                   htmlFor="email"
//                 >
//                   email
//                 </label>
//                 <input
//                   onChange={(e) => setemail(e.target.value)}
//                   className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   placeholder="your email"
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <button
//                   onClick={() => handleSubmit()}
//                   className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-non"
//                   type="button"
//                 >
//                   Add question
//                 </button>
//                 <button
//                   onClick={() =>  props.setShow(false)}
//                   className="ml-2 bg-transparent hover:bg-gray-200 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-non"
//                   type="button"
//                 >
//                   close
//                 </button>
//               </div>
//             </form>
//           </div>
//           {/* <section className="modal-main">
//           {children}
//           <button type="button" onClick={handleClose}>
//             Close
//           </button>
//         </section> */}
//         </section>
//       </div>
//     );
//   };

//   export default Modal