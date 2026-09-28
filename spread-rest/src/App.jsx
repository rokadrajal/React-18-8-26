import './App.css'
import About from './components/About'

function App({ data }) {

  return (
    <>
      <div style={{ backgroundColor: "black" , display : "grid" , gridTemplateColumns : "1fr 1fr " , paddingTop : "70px" , paddingBottom : "60px"}}>
        <article style={{ margin : "0 auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px"  , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#9C9184" }}>{data[0].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[0].Model}</h2>
          <img src={data[0].url} alt="" style={{ width: "500px", height: "300px" , margin : " 0 auto"}} />
          <h3 style={{ color: "white" }}>{data[0].Price}</h3>
          <h4 style={{ color: "white" }}>{data[0].Description}</h4>
        </article>

        <article style={{ margin : "0 auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#A7C7E7" }}>{data[1].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[1].Model}</h2>
          <img src={data[1].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[1].Price}</h3>
          <h4 style={{ color: "white" }}>{data[1].Description}</h4>
        </article>

        <article style={{ margin : "30px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#c7dcf0" }}>{data[2].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[2].Model}</h2>
          <img src={data[2].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[2].Price}</h3>
          <h4 style={{ color: "white" }}>{data[2].Description}</h4>
        </article>

        <article style={{ margin : "30px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#4f362f" }}>{data[3].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[3].Model}</h2>
          <img src={data[3].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[3].Price}</h3>
          <h4 style={{ color: "white" }}>{data[3].Description}</h4>
        </article>

        <article style={{ margin : "0px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#7c7d7e" }}>{data[4].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[4].Model}</h2>
          <img src={data[4].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[4].Price}</h3>
          <h4 style={{ color: "white" }}>{data[4].Description}</h4>
        </article>

        <article style={{ margin : "0px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#4a9bec" }}>{data[5].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[5].Model}</h2>
          <img src={data[5].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[5].Price}</h3>
          <h4 style={{ color: "white" }}>{data[5].Description}</h4>
        </article>

        <article style={{ margin : "30px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#ef5d31" }}>{data[6].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[6].Model}</h2>
          <img src={data[6].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[6].Price}</h3>
          <h4 style={{ color: "white" }}>{data[6].Description}</h4>
        </article>

        <article style={{ margin : "30px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#ffffff" }}>{data[7].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[7].Model}</h2>
          <img src={data[7].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[7].Price}</h3>
          <h4 style={{ color: "white" }}>{data[7].Description}</h4>
        </article>

        <article style={{ margin : "0px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#671c1c" }}>{data[8].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[8].Model}</h2>
          <img src={data[8].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[8].Price}</h3>
          <h4 style={{ color: "white" }}>{data[8].Description}</h4>
        </article>

        <article style={{ margin : "0px auto" , boxShadow : "0px 1px 8px 2px white" ,padding : "20px", borderRadius : "10px" , height : "550px" , transform : "rotate(10deg)" , backgroundColor : "black"}}>
          <h1 style={{ color: "#ef5d31" }}>{data[9].CompanyName}</h1>
          <h2 style={{ color: "white" }}>{data[9].Model}</h2>
          <img src={data[9].url} alt="" style={{ width: "500px", height: "300px", margin : " 0 auto" }} />
          <h3 style={{ color: "white" }}>{data[9].Price}</h3>
          <h4 style={{ color: "white" }}>{data[9].Description}</h4>
        </article>

      </div>


      <About/>
    </>
  )
}

export default App
