
import React from 'react'
import  { useState , useEffect} from 'react'
import Helment from '../Components/Helmet'
import ProductCard from '../Category/ProductCard'
import products from '../fakedata/products'
import Testimonial from '../Slider/Slider'

export default function Home() {

   const[allProduct, setAllProduct] = useState(products);
    const[category, setCategory] = useState("All");
    const[hotPizza, setHotpizza] = useState([]);


    useEffect(() => {
      if(category === "All"){
        setAllProduct(products)
      }
  
      if(category === "BURGER"){
         const FilterProduct = products.filter(item => item.category === 'Burger')
         console.log(FilterProduct);
         setAllProduct(FilterProduct)
      }
     
  
     if(category === "PIZZA"){
        const FilterProduct = products.filter(item => item.category === 'Pizza')
        console.log(FilterProduct);
        setAllProduct(FilterProduct)
     }
  
     if(category === "BREAD"){
        const FilterProduct = products.filter(item => item.category === 'Bread')
        console.log(FilterProduct);
        setAllProduct(FilterProduct)
     }
    
    },[category])

    useEffect(()=>{
      const  FilterPizza =  products.filter(item=>item.category === 'Pizza')
      const SlicePizza = FilterPizza.slice(0,4)
      setHotpizza(SlicePizza)


   },[])



  return <Helment title='Home'>
  <div>
     <section className='container'>
       <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
              <h4 className='mt-5'>Easy Way to make an order</h4>
              <h1 className='size mt-3'>Hungry ? just wait food at your door</h1>
              <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button className='btn btn-danger mt-4'>Order Now </button>
              <button className='btn mt-4 ms-4 text-danger'>see Allfoods</button>
              <div className='row mt-4'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                <p>100% secure CheckOut</p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                <p>No Shipping Charge</p>
                </div>
              </div>



          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
             <img src='assets/img/hero.png' alt='' className='w-100 img-fluid'></img>
          </div>

       </div>
     </section>

     <section className='container'>
       <div className='row d-flex justify-content-between'>
         <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='border border-3 row bg-color rounded-3'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <img src='assets/img/category-01.png' alt='' className='p-3'></img>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 mt-4'>
                 <h4>Fast Food</h4>
              </div>
            </div>
         </div>
         <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className='border border-3 row bg-color rounded-3'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <img src='assets/img/category-02.png' alt='' className='p-3'></img>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 mt-4'>
                 <h4>Pizza</h4>
              </div>
            </div>
         </div>
         <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className='border border-3 row bg-color rounded-3'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <img src='assets/img/category-03.png' alt='' className='p-3'></img>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 mt-4'>
                 <h4>Asian Food</h4>
              </div>
            </div>
         </div>
         <div className='col-lg-3 col-md-6 col-sm-12'>
         <div className='border border-3 row bg-color rounded-3'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <img src='assets/img/category-04.png' alt='' className='p-3'></img>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 mt-4'>
                 <h4>Row Meat</h4>
              </div>
            </div>
         </div>
        </div>
     </section>

     <section className='container'>
       <div className='row'>
          <h5 className='text-center mt-5 text-danger'>What We are serve</h5>
          <h2 className='text-center mt-3'>Just Sit Back at home</h2>
          <h2 className='text-center'>we will take care</h2>
          <p  className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p  className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

       </div>
     </section>

     <section className='container'>
        <div className='row mt-5'>
           <div className='col-lg-4 col-md-4 col-sm-12'>
              <img src='assets/img/service-01.png' alt=''></img>
              <h2>Quick Delivery</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
           </div>
           <div className='col-lg-4 col-md-4 col-sm-12'>
           <img src='assets/img/service-02.png' alt=''></img>
              <h2>Super Dine In</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
           </div>
           <div className='col-lg-4 col-md-4 col-sm-12'>
           <img src='assets/img/service-03.png' alt=''></img>
              <h2>Easy Pic Up</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
           </div>
        </div>
     </section>

     <section className='container'>
        <div className='row'>
           <h2 className='text-center mt-5'>Popular Foods</h2>
       </div>
      <div className='row'>
         <div className='col-lg-12'>
            <div className='food_category d-flex align-items-center justify-content-center gap-4 p-3'>
                <button className=' btn-lg foodbtnActive text-danger' onClick={() => setCategory('All')}>All</button>
                 <button className='all-btn-home'  onClick={() => setCategory('BURGER')}>
                <img src='assets/img/hamburger.png' alt='' className='w-25'></img> Burger</button>

                <button className='all-btn-home'  onClick={() => setCategory('PIZZA')}>
                <img src='assets/img/pizza.png' alt='' className='w-25'></img> Pizza</button>

                 <button className='all-btn-home'  onClick={() => setCategory('BREAD')}>
                 <img src='assets/img/bread.png' alt='' className='w-25'></img> Bread</button>
              </div>
          </div>
       </div>
        <div className='row'>
          {
             allProduct.map((item) =>{
                 return <div className='col-lg-3' key={item.id}>
                <ProductCard items={item}></ProductCard>
                </div>
              })
          }
      </div>
   </section>

   <section className='container'>
     <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
           <img src='assets/img/location.png' alt='' className='img-fluid'></img>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
           <h2>Why Tasty Treat ?</h2>
           <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

           <h5 className='mt-5'><span className="material-symbols-outlined mt-3">check_circle</span> Fresh and tasty foods</h5>

           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

           <h5 className='mt-5'><span className="material-symbols-outlined mt-3">check_circle</span> Quality support</h5>

           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

           <h5 className='mt-5'><span className="material-symbols-outlined mt-3">check_circle</span> Order form any location</h5>

           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

     </div>
   </section>
   <section className='container'>
     <div className='row'>
        <h2 className='text-center mt-5 fs-1'>Hot Pizza</h2>
         <div className='row mt-5'>
          {
             hotPizza.map((item) =>{
                return (
                   <div className='col-lg-3 col-md-4' key={item.id}>
                       <ProductCard items={item}></ProductCard>
                   </div>
                )
             })
          }
         </div>
     </div>
   </section>

   <section className='container'>
     <div className='row mt-5'>
        <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
        <h4 className='text-danger'>Testimonial</h4>
        <h2 className='fs-1 mt-3'>What our customers are saying</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <Testimonial></Testimonial>

        </div>

        <div className='col-lg-6 col-md-12 col-sm-12'>
           <img src='assets/img/network.png' alt='' className='img-fluid'></img>
        </div>
     </div>
   </section>


</div>
</Helment>

}