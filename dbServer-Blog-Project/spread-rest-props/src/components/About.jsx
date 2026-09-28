// SPREAD
// function About(props){
//     const data = {
//         ...props
//     }
//     console.log(data);
//     return
// }


// SPREAD(modify data) 
function About(data){
    const newidentity = {
        ...data
    }
    newidentity.age = "20";
    console.log("original data : ",data.age);
    console.log("modify data : ",newidentity.age);
    return
}


export default About;
