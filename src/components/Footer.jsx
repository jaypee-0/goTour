import React from "react";

const Footer = () => {
    return ( 
        <footer className="pt-4">
            <hr />
            <div className="d-sm-flex pb-4">
            <div className="col-sm-7">
                <h2><span className="style-orange">Go</span>Tour</h2>
            </div>
                
            <div className="col-sm-3">
                <h4>Quicklinks</h4>
                <p>blog</p>
                <p>support</p>
                <p>affiliates</p>
                <p>terms & conditions</p>
            </div>
            <div className="col-sm-2">
                <h4>Quicklinks</h4>
                <p>123 hallinton way, lagos</p>
                <p>0806786438, 08175487653</p>
                <p>gotour@gmail.com</p>
            </div>   
            </div>        
            <p className ="text-center py-3"> ©Copyright GoTour 2022 </p>           
        </footer>
    );
};
export default Footer;