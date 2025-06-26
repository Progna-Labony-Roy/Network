const Footer = () => {
  return (
    <div className="bg-violet-100">
      <div className="md:h-60  md:p-20 p-16 lg:px-60 md:flex justify-between text-lg">
        {/* one */}
        <div>
        <h4 className="font-bold">Systems</h4>
          <p className="text-sm py-1">Software Erp System</p>
          <p className="text-sm py-1">Ecommerce Rep System</p>
          <p className="text-sm py-1">Real State Erp System</p>
          <p className="text-sm py-1">Accounting Erp System</p>
          <p className="text-sm">Education Erp System</p>
        </div>

        {/* two */}
        <div>
        <h4 className="font-bold">Solutions</h4>
          <p className="text-sm py-1">App Design and Development</p>
          <p className="text-sm py-1">Digital Marketing</p>
          <p className="text-sm py-1">Website Design and Development</p>
        </div>

        {/* three */}
        <div>
          <h4 className="font-bold">Products</h4>
          <p className="text-sm py-1">Business Strategy</p>
        </div>

        {/* four */}
        <div>
          <h4 className="font-bold">Contacts</h4>
          <p className="text-sm py-1">sales@net.com </p>
          <p className="text-sm py-1">+ (767) 420-6561</p>
          <p className="text-sm py-1">Kolkata</p>
        </div>
      </div>
      <hr className="border" />
      <p className="lg:p-3 text-center p-1">&copy; Copyright - Network. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
