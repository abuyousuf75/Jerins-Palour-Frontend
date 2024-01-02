

const Footer = () => {
    return (
        <footer className="md:flex md:text-start text-center md:justify-around p-10 text-base bg-[#F63E7B] text-white">
            {/* for title*/}

            <div className="footerTitle w-[25%]">
                <p>H#000 (0th Floor), Road #00 </p>
               <p> New DOHS, Mohakhali, Dhaka, Bangladesh</p>
               
            </div>
            
            <nav>
            <header className="footer-title">Company</header> 
            <ul className="leading-8">
              <li>About</li>
              <li>Project</li>
              <li>Our Team</li>
              <li>Terms Conditions</li>
              <li>Submit Listing</li>
            </ul>
          </nav> 
            <nav>
            <header className="footer-title">Quick Links</header> 
            <ul className="leading-8">
              <li>About</li>
              <li>Project</li>
              <li>Our Team</li>
              <li>Terms Conditions</li>
              <li>Submit Listing</li>
            </ul>
          </nav> 
          <nav>
          <header className="footer-title">About Us</header>
            <div className="w-[320px]">
            <p>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Purus commodo ipsum
          duis laoreet maecenas. Feugiat </p> 
            </div>
          <div className="grid grid-flow-col gap-4">
            
          </div>
        </nav>
        
      
        </footer>
    );
};

export default Footer;