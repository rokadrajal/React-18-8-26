function Display(){
    const data = JSON.parse(localStorage.getItem("cruddata"));
    return(
        <>
          <h1>First Name :{data.fname}</h1>
          <h1>Last Name :{data.lname}</h1>
          <h1>Age : {data.age}</h1>
        </>
    )
}

export default Display;