import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import "./all.css"


const cars = [
  {
    CompanyName: "Range Rover",
    Model: "Land Rover Range Rover Velar",
    url: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/153319/2023-range-rover-velar-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80&q=80",
    Price: "₹87.50 Lakh",
    Category: "Luxury SUV",
  },

  {
    CompanyName: "Mahindra",
    Model: "Mahindra XUV700",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeldT6E_u46fFYwglVgbjFl9yRW0WCThAD52U5woXGpQ&s=10",
    Price: "₹13.99 Lakh",
    Category: "Premium SUV",
  },

  {
    CompanyName: "McLaren",
    Model: "McLaren GT",
    url: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/95701/gt-exterior-right-front-three-quarter-4.png?isig=0&q=80&q=80",
    Price: "₹4.00 crore",
    Category: "Luxury Sports Car",
  },

  {
    CompanyName: "Rolls-Royce",
    Model: "Rolls-Royce Cullinan",
    url: "https://ackodrive-prod.ackoassets.com/image/rolls-royce/cullinan/default/Hero-Transparent.png",
    Price: "₹6.95 crore",
    Category: "Ultra Luxury SUV",
  },

  {
    CompanyName: "Bentley",
    Model: "Bentley Bentayga",
    url: "https://imgd.aeplcdn.com/1056x594/n/3g6oh4a_1520659.jpg?q=80",
    Price: "₹5.00 crore",
    Category: "Luxury SUV",
  },

  {
    CompanyName: "Mercedes-Benz",
    Model: "Mercedes-Maybach GLS",
    url: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/177511/maybach-gls-exterior-right-front-three-quarter-5.png?isig=0&q=80&q=80",
    Price: "₹3.35 crore",
    Category: "Premium Luxury SUV",
  },

  {
    CompanyName: "Lamborghini",
    Model: "Lamborghini Urus",
    url: "https://images.autox.com/uploads/cars/2022/11/lamborghini-urus-performante2-500x261.jpg",
    Price: "₹4.22 crore",
    Category: "Performance SUV",
  },

  {
    CompanyName: "Porsche",
    Model: "Porsche Cayenne Turbo GT",
    url: "https://imgd-ct.aeplcdn.com/664x374/n/cw/ec/212775/cayenne-ev-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    Price: "₹2.57 crore",
    Category: "Sports SUV",
  },

  {
    CompanyName: "Aston Martin",
    Model: "Aston Martin DBX707",
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134427/dbx-exterior-right-front-three-quarter-8.png?isig=0&q=80",
    Price: "₹4.63 crore",
    Category: "Performance Luxury SUV",
  },

  {
    CompanyName: "Maserati",
    Model: "Maserati Levante",
    url: "https://images.autox.com/uploads/2024/08/Maserati-MC20-Bianco-Audace-500x261.jpg",
    Price: "₹1.49 crore",
    Category: "Luxury SUV",
  },

  {
    CompanyName: "Ferrari",
    Model: "Ferrari Purosangue",
    url: "https://static-cdn.cars24.com/prod/new-car-cms/Ferrari/SF90-Stradale/2024/04/12/15d17e86-8045-4e62-91bb-0ac13ee7f071-Ferrari_SF90-Stradale_Feature-Image.png?w=280&dpr=3&optimize=low&format=auto&quality=50",
    Price: "₹7.50 crore",
    Category: "High-Performance Luxury",
  },

  {
    CompanyName: "BMW",
    Model: "BMW XM",
    url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/135681/xm-exterior-right-front-three-quarter-4.png?isig=0&q=80",
    Price: "₹2.60 crore",
    Category: "Performance Luxury SUV",
  },

  {
    CompanyName: "Audi",
    Model: "Audi Q8",
    url: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/184519/q8-exterior-right-front-three-quarter-26.png?isig=0&q=80&q=80",
    Price: "₹1.17 crore",
    Category: "Luxury SUV",
  },

  {
    CompanyName: "Jaguar",
    Model: "Jaguar F-Pace",
    url: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/56265/f-pace-exterior-right-front-three-quarter-5.png?isig=0&q=80&q=80",
    Price: "₹74.88 Lakh",
    Category: "Luxury Performance SUV",
  },

  {
    CompanyName: "Volvo",
    Model: "Volvo XC90",
    url: "https://www.v3cars.com/cdn-cgi/image/width=1920%2Cquality=75%2Cformat=auto/https://assets.v3cars.com/media/model-imgs/052910majestor.webp",
    Price: "₹1.03 crore",
    Category: "Premium Luxury SUV",
  },
]

function App() {

  return (
    <>
      <Header />
      <Home detailes={cars} />
      <Footer />
    </>

  )
}

export default App
