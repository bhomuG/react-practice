const Footer=() => {
    return(
        <>
            <footer className="footer ">
        <div className="container d-flex-wrap footer_sec d-flex justify-between ">

            <div className="footer_box1">
                <div>
                   
                </div>

                <div className="footer_icon d-flex">
                    <div className="footer_radius text-center">
                        <img src="./assets/icon/cib_facebook-f.svg" alt=""/>
                    </div>
                    <div className="footer_radius text-center">
                        <img src="./assets/icon/cib_pinterest-p.svg" alt=""/>
                    </div>
                    <div className="footer_radius text-center">
                       
                    </div>
                </div>
            </div>
            <div>
                <ul className="footer_list">
                    <li>
                        <h2 className="footer_list_head">Company</h2>
                    </li>
                    <li> <a className="footer_list_item" href="/">Our Story</a></li>
                    <li> <a className="footer_list_item" href="/">Sustainability</a></li>
                    <li> <a className="footer_list_item" href="/">Craftsmanship</a></li>
                    <li> <a className="footer_list_item" href="/">Stockists</a></li>
                    <li> <a className="footer_list_item" href="/">Company,Legal,& GDRP</a></li>
                </ul>
            </div>
            <div>
                <ul className="footer_list">
                    <li>
                        <h2 className="footer_list_head">Customer</h2>
                    </li>
                    <li> <a className="footer_list_item" href="/">Contact Us</a></li>
                    <li> <a className="footer_list_item" href="/">Shipping & Delivery</a></li>
                    <li> <a className="footer_list_item" href="/">Returns & Exchanges</a></li>
                    <li> <a className="footer_list_item" href="/">Product Care</a></li>
                    <li> <a className="footer_list_item" href="/">FAQ</a></li>
                </ul>
            </div>
            <div className="footer_email_mob">  
                <h1 className="footer_box4_head">Sign Up for Our Newsletter</h1>
                <form className="footer_form">
                    <div className="footer_email">
                        <input type="email" name="" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="footer_submit">
                        <button className="footer_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 16L16 12L12 8" stroke="#D8D8D8" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M8 12H16" stroke="#D8D8D8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <p className="footer_box4_para">Subscribe to our Newsletter for 10% off your first order</p>
                </form>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer ;