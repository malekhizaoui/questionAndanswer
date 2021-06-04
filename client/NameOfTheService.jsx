import "./index.css";
const axios = require("axios");
const moment = require("moment");

const Modal = (props) => {
  const { useState, useEffect } = React;

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const [body, setbody] = useState([]);
  const [name, setname] = useState([]);
  const [email, setemail] = useState([]);
  const [id, setId] = useState(11003);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = () => {
    axios
      .post("qa/questions", {
        body,
        name,
        email,
        product_id: id,
      })
      .then((response) => {
        console.log("posted ", response);
        props.setShow(false);
      })
      .catch((err) => console.log(err));
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="body"
              >
                body
              </label>
              <textarea
                onChange={(e) => setbody(e.target.value)}
                className="resize-none border rounded-md"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                name
              </label>
              <input
                onChange={(e) => setname(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="your name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                email
              </label>
              <input
                onChange={(e) => setemail(e.target.value)}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="your email"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleSubmit()}
                className="bg-transparent hover:bg-gray-200 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-non"
                type="button"
              >
                Add question
              </button>
              <button
                onClick={() =>  props.setShow(false)}
                className="ml-2 bg-transparent hover:bg-gray-200 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-non"
                type="button"
              >
                close
              </button>
            </div>
          </form>
        </div>
       
      </section>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const NameOfTheService = () => {
  const { useState, useEffect } = React;
  const [data, setdata] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [startAnswers, setStartAnswers] = useState("");
  const [aanswers, setAanswers] = useState("");
  const [count, setCount] = useState(2);
  const [name, setname] = useState([]);
  const [date, setdate] = useState([]);
  const [helpfulness, sethelpfulness] = useState([]);
  const [show, setShow] = useState(false);
  const [showt, setShowt] = useState("display-block");

  const id = window.location.href.split("/")[3];

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const search = (e) => {
    let query = e.target.value;

    var storage = [];

    if (query.length > 2) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].question_body.toLowerCase().includes(query.toLowerCase())) {
          storage.push(data[i]);
        }
      }
      setdata(storage);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const moreAQ = () => {
console.log(count)
console.log(showt)
    if (count === data.length-1 ) {
      setShowt("display-none")    }
    if (count > data.length) {
      return;
    }
    setCount(count +1);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    var config = {
      method: "get",
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=${11003}`,
      headers: {
        Authorization: "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",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.results);

        let answer = response.data.results.map((e) => e.answers);
        let allAnswers = answer.filter((answe) => Object.keys(answe).length > 0).map((e) => Object.values(e).map((i) => i.body));
        console.log(answer)
        let x=[]
        answer.forEach((e,i)=>x.push(e[i]))
       console.log(x);
        setAanswers(allAnswers);
        setStartAnswers(allAnswers.slice(0, 2));
        setdata(response.data.results);
        setAnswers(answer);
        setname(answer.filter((answe) => Object.keys(answe).length > 0).map((e) => Object.values(e).map((i) => i.answerer_name)));
        setdate(answer.filter((answe) => Object.keys(answe).length > 0) .map((e) => Object.values(e).map((i) => i.date)));
        sethelpfulness( answer.filter((answe) => Object.keys(answe).length > 0).map((e) => Object.values(e).map((i) => i.helpfulness)));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const incrementYes = (id, e) => {
    axios.put(`/qa/questions/${id}/helpful`, {}, {}).then((response) => {
      console.log(response);
      if (response.status === 200) {
        let arr = data.map((ele) => {
          if (ele.question_id === id) {
            ele.question_helpfulness++;
          }
          return ele;
        });
        setdata(arr);
      }
    });
    e.target.disabled = true;
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  return (
  
    <div>
      <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-10xl sm:mx-auto">
          {/* <div className=" space-y-6 relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"> */}
            <h2>QUESTIONS AND ANSWERS</h2>
            <div className="mb-4 pt-0">
              <input
                type="search"
                placeholder="Have a question? Search for answers…"
                onChange={(e) => search(e)}
                className="placeholder-opacity-100 placeholder-gray-800 border rounded-none border-gray-800  px-3 py-5  text-gray-800 relative bg-white bg-white  text-base border-0 shadow outline-none focus:outline-none focus:ring w-full font-extrabold"
              />
             
       
            </div>

            {data.filter((e, index) => index < count).map((e, i) => (
                <div>
                <div className=" " key={i}>
                  <h3
                    className=" pb-3 inline-block font-bold">
                    Q : {e.question_body}
                  </h3>
                  <h6 className="  inline-block ml-60"> helpful?</h6>

                  <div className=" space-x-4 inline-block  ">
                     
                    <a
                      href="#"
                      onClick={(ev) => incrementYes(e.question_id, ev)}
                      className=" inline-block underline ml-4"
                    >
                      Yes
                    </a>
                    <span>{`(${e.question_helpfulness})`}</span>
                    <span>|</span>
                    <span className=" underline inline-block ">Add Answer</span>
                  </div><br></br>
                    
                </div>
                <div>
                      <div className= " pb-3 ">
                        <h3><span className="font-bold ">A: </span>{aanswers[i]} </h3>
                      </div>
                      <div className=" ">
                        <span className="inline-block font-thin ">
                          by {name[i]} {moment(date[i]).format("ll")}
                        </span>

                        <span className="inline-block ml-60">helpful ?</span>
                        <span className="inline-block underline ml-4">
                          yes ({helpfulness[i + 1]})
                        </span>
                        <span className="inline-block mr-2 font-bold">    </span>

                        <span className="inline-block underline">  |   Report </span>
                      </div>
                    </div>
                </div>
              ))}
            <br></br>
            <div className=" space-x-2">
              <div className="inline-block">
                <div id="x"className={showt} >
                <section > 
              <button
                onClick={() => moreAQ()}
                
                className=" bg-transparent hover:bg-gray-200 text-gray-80 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-non "
              >
                More Answered Questions
              </button>
              
              </section>
              </div>
              </div>
              <Modal show={show} setShow={setShow}>
                <p>Modal</p>
              </Modal>
              <button
                onClick={() => setShow(true)}
                className="inline-block bg-transparent hover:bg-gray-200 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded-non "
              >
                Add a Question +
              </button>
              
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default NameOfTheService;

