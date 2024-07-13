 // Import Bootstrap CSS

 import PriceCard from "../home/price/PriceCard";

 import "../home/price/price.css";
 
 const Pricing = () => {
   return (
     <>
       <section className="pricing mb">
         <div className="container">
           <div className="heading text-center"> {/* Added Bootstrap classes */}
             <br />
             <br />
             <br />
             <h1 style={{ color: "white" }}>Dhrona Silambam</h1>
             <br />
             <br/>
             <h1 style={{fontSize:"30px"}}>Fee pay</h1>
           </div>
           <div className="price row justify-content-center"> {/* Added Bootstrap classes */}
             <div className="col-md-6"> {/* Added Bootstrap classes */}
               <PriceCard />
             </div>
           </div>
         </div>
       </section>
     </>
   );
 };
 
 export default Pricing;