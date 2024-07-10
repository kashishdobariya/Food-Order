import React, { useState } from 'react'
import CommanSection from '../Components/CommanSection'
/*import ProductCard from '../Category/ProductCard'*/
import { useParams } from 'react-router-dom'
import products from '../fakedata/products';

export default function Fooddetail() {
   const { id }  = useParams()
   console.log(id);

   const Product = products.find(item => item.id === id)
   console.log(Product);

   const { title, price, desc, category, image01, image02, image03 } = Product;

   const [preImage, setpreImage] = useState(image01);

   const [tab, setTab] =useState('desc')
   
  //  const[allProduct, setAllProduct] = useState(products);

  //  useEffect(() => {
     
  //     if(category === "Burger"){
  //        const FilterProduct = products.filter(item => item.category === 'Burger')
  //        console.log(FilterProduct);
  //        setAllProduct(FilterProduct)
  //     }
  
  //    if(category === "Pizza"){
  //       const FilterProduct = products.filter(item => item.category === 'Pizza')
  //       console.log(FilterProduct);
  //       setAllProduct(FilterProduct)
  //    }
  
  //    if(category === "Bread"){
  //       const FilterProduct = products.filter(item => item.category === 'Bread')
  //       console.log(FilterProduct);
  //       setAllProduct(FilterProduct)
  //    }
    
  //   },[category])
    
    return (
    <div>
       <CommanSection title={title}></CommanSection>
       <section className='container'>
          <div className='row'>
             <div className='col-lg-4 col-md-4 col-sm-12'>
                 <div onClick={() => setpreImage(image01)}>
                      <img src={image01} alt='' className='burger-img-set'></img>
                 </div>
                  <div  onClick={() => setpreImage(image02)}>
                      <img src={image02} alt='' className='burger-img-set'></img>
                  </div>
                  <div  onClick={() => setpreImage(image03)}>
                      <img src={image03} alt='' className='burger-img-set'></img>
                  </div>
                </div>

             <div className='col-lg-4 col-md-4 col-sm-12'>
             <img src={preImage} alt='' className='w-75'></img>
                  
             </div>
             <div className='col-lg-4 col-md-4 col-sm-12 mt-5'>
                 <h2>{title}</h2>
                 <h3 className='text-danger'>Price: ${price}</h3>
                 <h5>Category: {category}</h5>
                 <button className='btn btn-danger mt-3'>Add to Cart</button>
                </div>

              </div>
          </section>
          <section className='container mb-5'>
             <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                    <h4 className='text-danger' onClick={() => setTab('desc')}>Description</h4>
                 </div>
                 <div className='col-lg-3 col-md-3 col-sm-3'>
                    <h4 onClick={() => setTab('reView')}>Review</h4>
                 </div>
                 {
                   tab === 'desc' ?(
                     <div>
                     <p>{desc}</p>
                     </div>) : (
                         <div>
                         <h3>kashish</h3>
                         <p>kashish@gmail.com</p>
                         <h4>Greate Product</h4>
      
                         <h3>kashish</h3>
                         <p>kashish@gmail.com</p>
                         <h4>Greate Product</h4>
      
                         <h3>kashish</h3>
                         <p>kashish@gmail.com</p>
                         <h4>Greate Product</h4>

                         <div className='bg-color d-flex justify-content-center'>
                     <input className=' form-control mt-4 w-50' type='text' placeholder='enter your name'></input>
                  </div>

                  <div className='bg-color d-flex justify-content-center'>
                     <input className=' form-control mt-4 w-50' type='text' placeholder='enter your name'></input>
                  </div>

                  <div className='bg-color d-flex justify-content-center'>
                     <input className=' form-control mt-4 w-50' type='text' placeholder='enter your name'></input>
                  </div>

                  <div className='bg-color d-flex justify-content-center pt-4'>
                     <button className='btn w-25 bg-danger text-light'>Submit</button>
                  </div>
                      </div>
                      
                        
                     )
                  }
            </div>
          </section>
          {/* <section className='container'>
             <h2>Related Product</h2>
          <div className='row'>
            {
               allProduct.map((item) =>{
                   return <div className='col-lg-3'>
                  <ProductCard items={item}></ProductCard>
                  </div>
                })
            }
        </div>
          </section> */}

          
    </div>
  )
}