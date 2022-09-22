import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer classNameName="py-4 bg-light mt-auto">
                    <div classNameName="container-fluid px-4">
                        <div classNameName="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <Link to="#">Privacy Policy</Link>
                                &middot;
                                <Link to="#">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
    );
};

export default Footer;