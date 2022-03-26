import './App.css';
import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"



function App() {

  const carsArray = [
    { 
      title: "Продаю Audi",
      price: 5000,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit mollitia autem. Facere eius voluptate omnis",
      img: "https://cdn.motor1.com/images/mgl/v11Lb/s1/4x3/audi-a3-limousine-2020.webp"
    },
    { 
      title: "Продаю BMW",
      price: 4000,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit mollitia autem. Facere eius voluptate omnis",
      img: "https://www.avtovzglyad.ru/media/article/BMW_8-Series_Gran_Coupe_2020.jpg.740x555_q85_box-21%2C0%2C1239%2C914_crop_detail_upscale.jpg"
    },
    { 
      title: "Продаю Honda",
      price: 8000,
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae impedit mollitia autem. Facere eius voluptate omnis",
      img: "https://images.drive.ru/i/0/5fdb3acfec05c4982e000035.jpg"
    },
  ]

  return (
    <div className="App">
      <Header />

      <div className='container mt-5'>
        <div className='row justify-content-between'>
          {
            carsArray.map((item) => <Card 
            title = {item.title}
            price = {item.price}
            imgUrl = {item.img}
            description = {item.description}
            />)
          }
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
