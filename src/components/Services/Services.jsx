import './Services.css';

const Services = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-10">

     

      {/* Card 1 */}
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">ECOMMERCE ERP SYSTEM</h2>
          <p>Ecommerce ERP is the merging of your ecommerce platform and a modern, cloud-based ERP system. Together, they strengthen the breadth and depth of your organization by integrating your processes.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">SOFTWARE ERP SYSTEM</h2>
          <p>All of your financial and operational data are managed by a software enterprise resource planning (ERP) system that is hosted in the cloud. Providing visibility into real-time data across all departments, reducing the need for manual data input and reconciliations.</p>
        </div>
      </div>


      {/* Card 3 */}
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">ACCOUNTING ERP SYSTEM</h2>
          <p>With the aid of this ERP system, your company's accounting processes may be automated, which increases efficiency, guarantees compliance.</p>
        </div>
      </div>


      {/* Card 4 */}
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">REAL ESTATE ERP SYSTEM</h2>
          <p>This web-based property management program requires no downloads or CDs for installation, and all upgrades are conducted automatically.</p>
        </div>
      </div>


      {/* Card 5 */}
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">EDUCATION ERP SYSTEM</h2>
          <p>It is challenging to run a school when you must handle administrative tasks, student education, the admissions process, financial management, and much more.</p>
          <div className="card-actions justify-end"> 
          </div>
        </div>
      </div>

         {/* Card 6 */}
         <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Web Development</h2>
          <p>We build dynamic, responsive websites that are tailored to your business needs. From front-end design to back-end development, we ensure seamless performance and user engagement across all devices.</p>
        </div>
      </div>
      </div>
                
    </div>
  );
};


export default Services;
