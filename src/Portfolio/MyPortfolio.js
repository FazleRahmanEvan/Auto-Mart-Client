import React from 'react';
import photo from '../images/my.jpg'

const MyPortfolio = () => {
    return (
        <div >
            <h1 className='text-6xl fond-bold text-primary text-center font-bold'>Protfolio</h1>
             <section className='pt-12 text-center'>
                 <h4 className='text-2xl text-primary'>Name: Md. Fazle Rahman Evan</h4>
                 <h4 className='text-2xl text-primary'>Email: evanshakib26@gmail.com</h4>
                 <h4 className='text-2xl text-primary'>Educational Background: B.Sc. in Computer Science and Engineering from Metropolitan University Bangladesh</h4> 
                
             </section>
            
             <section className='pt-8'>
                 <div className=' pt-12 pb-10'>
                     <h2 className='text-4xl font-bold text-secondary text-center'>My Three projects</h2>

                 </div>
             <div style={{textAlign: 'center', justifyContent: 'center'}} className="box-container">
                
                <div className='pt-8'>
                <h4 className='text-primary text-3xl'>Bootstrap Project:Albatross Connvention Hall</h4>
    <button style={{fontSize:'30px', width:'200px'}} ><a style={{color: 'blue', textDecoration:"none"}} href=" https://affectionate-fermi-7a21eb.netlify.app/">Link 1</a></button>
        
                </div>
     <div className='pt-12'>
     <h4 className='text-primary text-3xl'>React Router Project:Bag Pack</h4>
    <button style={{fontSize:'30px', width:'200px'}} ><a style={{color: 'blue', textDecoration:"none"}} 
     
    href="https://venerable-halva-46a2ec.netlify.app/home">Link 2</a></button>
     </div>
    
   <div className='pt-12'>
   <h4 className='text-primary text-3xl'>Full Stack Website: Bike Hunter</h4>
    <button style={{fontSize:'30px', width:'200px'}} ><a style={{color: 'blue', textDecoration:"none"}} href="https://motor-bike-warehouse.web.app/">Link 3</a></button>
   </div>
        </div>
             </section>
      </div>
    );
};

export default MyPortfolio;