import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const product =[{
  CompanyName: "Range Rover",
  Model: "Land Rover Range Rover Velar",
  url: "https://www.stratstone.com/-/media/stratstone/land-rover/new-cars/velar/current/velar-belgravia-edition-front-angle-720x405px.jpg?rev=ad89e1b75e964ad28514c1ffecad28aa",
  Price: " ₹87.50 Lakh",
  Description: "ultra-luxurious Autobiography trim",
},

{
  CompanyName: "Range Rover",
  Model: "Range Rover SV Masāra Edition",
  url: "https://static-cdn.cars24.com/prod/auto-news24-cms/Newsroom/2025/06/01/c8bb1fe0-6073-47f2-9cc4-fe95f755c180-range-rover-sv-masara-edition-front-side-source-land-rover.webp?w=356&dpr=2.625&optimize=low&format=auto&quality=50",
  Price: "₹4.99 crore",
  Description: "rare luxury SUV with a powerful V8 engine",
},

{
  CompanyName: "Rolls-Royce",
  Model: "Rolls-Royce Cullinan",
  url: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
  Price: "₹6.95 crore",
  Description: "ultra-luxury SUV with a powerful V12 engine",
},
{
  CompanyName: "Bentley",
  Model: "Bentley Bentayga",
  url: "https://images.unsplash.com/photo-1563720223185-11003d516935",
  Price: "₹5.00 crore",
  Description: "luxurious SUV with powerful performance",
},

{
  CompanyName: "Mercedes-Benz",
  Model: "Mercedes-Maybach GLS",
  url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
  Price: "₹3.35 crore",
  Description: "premium luxury SUV and advanced features",
},

{
  CompanyName: "Lamborghini",
  Model: "Lamborghini Urus",
  url: "https://images.unsplash.com/photo-1621135802920-133df287f89c",
  Price: "₹4.22 crore",
  Description: "high-performance luxury SUV with a powerful V8 engine",
},

{
  CompanyName: "Porsche",
  Model: "Porsche Cayenne Turbo GT",
  url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  Price: "₹2.57 crore",
  Description: "sporty luxury SUV combining high performance",
},

{
  CompanyName: "Aston Martin",
  Model: "Aston Martin DBX707",
  url: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a",
  Price: "₹4.63 crore",
  Description: "powerful luxury SUV with sporty styling",
},

{
  CompanyName: "Maserati",
  Model: "Maserati Levante",
  url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d",
  Price: "₹1.49 crore",
  Description: "luxury SUV with elegant design",
},

{
  CompanyName: "Ferrari",
  Model: "Ferrari Purosangue",
  url: "https://images.unsplash.com/photo-1592198084033-aade902d1aae",
  Price: "₹7.50 crore",
  Description: "luxury SUV with sporty performance",
},

]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={product} />
  </StrictMode>,
)
