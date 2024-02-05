import { useState } from "react";
import "./App.css";
function App() {
  // firstWay
  // first way to get input tag value and set value on given text feild
  //   const [firstName ,setFirstName]=useState('');
  //   const [LastName,setLastName]=useState('');
  //   const [email,setEmail]=useState('');
  // // if we want to update the values of given input text we have to make function by this we have to call function
  // // by below this the code will become lengthy if we have 100 input feild so we have to make 100 function instead of this we make the object

  // function changeFirstName(event){
  //   setFirstName(event.target.value);
  // }
  // function changeLastName(event){
  //   setLastName(event.target.value);
  // }
  // function changeEmail(event){
  //   setEmail(event.target.value);
  // }
  // console.log(firstName);
  // console.log(LastName);
  // console.log(email);

  // 2nd way
  // if we have 100 of input feilds so creation of function
  // which is not good approach instead of this we make object

  // firstName kee starting value null hai useState()ke andar
  // object pass karne se no. of input feild ka data get and update kar sakte hai

  // jo hook ke andar object ke andar feild ke name hai same name ko
  // hame input feild ke andar name="firstname" dena padega
  // add comments for textarea value updation
  // after adding gender in checkbox assign true or false
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
  });
  // by dot we call oject property
  // just check
  // console.log(formData.firstName);
  // console.log(formData.lastName);
  // console.log(formData.email);
  // by the help of below function we change the all the inpu feild value
  function changeFormData(event) {
    // prevFormData use if we change any one Input feild value and remaining
    // input feild value did not change  that time copy the old
    // value thats why we take prevFormData variable

    // setFormData((prevFormData) => {
    //   // this is sysntex
    //   return {
    //     ...prevFormData,
    //     [event.target.name]: event.target.value,
    //   };
    // });
    // maintain the check box also by this code
    // get the all element type
    // this is syntex
    const { name, type, checked, value } = event.target;
    setFormData((prevFormData) => {
      // this is sysntex
      return {
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // check latest value after add comments input feilds
  console.log(formData);

  // Controlled component =>
  // maintain the state inside the compoment.
  // formData variable se hum all data ko track kar rhe hai

  // but hum input feild ke andar bhi us particular feild ko
  // track kar sakte hai by using Value attributes.
  // by using this every input feild maintain there state
  // syntex=value={formData.firstName} Object variable ka name
  // likhkar dot kee help se uski har ek property ko access kar lo

  return (
    <div className="App">
      {/* 1st way html ka code 
       <form> 
       by the help of onChange ={changeFirstName } we get the input feild value
       <br />
       <label>First Name </label>
        <input
         type="text"
         placeholder="Enter First Name"
          onChange={changeFirstName}
         name="fi"
        ></input>
        <br />
       <br />
       <label>Last Name </label>
        <input
          type="text"
         placeholder="Enter Last Name"
         onChange={changeLastName}
       ></input>
       <br />
       <br />
       <label> Email &nbsp; &nbsp;&nbsp;&nbsp;</label>
       <input
         type="text"
          placeholder="Enter Email"
         onChange={changeEmail}
       ></input>
     </form> */}

      {/* 2nd way html code industry way */}

      {/* name attribute ke andar vhi name denge jo upar 
          const[formData,
          setFormData]=
          useState({firstName:'',lastName:''});
          jaise firstName hai variable ka name to input feild first name
     vali me name="firstName" likhna hee padega 
        ] */}

      {/* <form>
        <br />
        <label>First Name </label>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={changeFormData}
          name="firstName"
        ></input>
        <br />
        <br />
        <label>Last Name </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={changeFormData}
          name="lastName"
        ></input>
        <br />
        <br />
        <label> Email &nbsp; &nbsp;&nbsp;&nbsp;</label>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeFormData}
          name="email"
        ></input>
      </form> */}

      {/* 3rd way controlled component maintain statr inside component  */}
      <form>
        <br />
        <label>First Name </label>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={changeFormData}
          name="firstName"
          value={formData.firstName}
        ></input>
        <br />
        <br />
        <label>Last Name </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={changeFormData}
          name="lastName"
          value={formData.lastName}
        ></input>
        <br />
        <br />
        <label> Email &nbsp; &nbsp;&nbsp;&nbsp;</label>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeFormData}
          name="email"
          value={formData.email}
        ></input>

        <br />
        <br />
        <textarea
          placeholder="enter your comments"
          onChange={changeFormData}
          name="comments"
          value={formData.comments}
        ></textarea>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeFormData}
          id="isVisible"
          name="isVisible"
          checked={formData.isVisible}
        ></input>
        <label htmlFor="isVisible">isVisible</label>
      </form>
    </div>
  );
}

export default App;
