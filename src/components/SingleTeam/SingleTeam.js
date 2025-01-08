import React from 'react';
import { Link } from 'react-router-dom';

const SingleTeam = ({number,image,name,title,objectFit}) => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="team-box text-center mb-60">
                    <div className="team-thumb h4team-thumb mb-25 pos-rel">
                    <img src={image} alt="" style={{ width: "217px", height: "217px", objectFit: objectFit }} />
                        {/* <Link className="team-link" to="/doctorDetails">0{number}</Link> */}
                    </div>
                    <div className="team-content h4team-content mb-15">
                        <h3 className='team__name'>{name}</h3>
                        <h6>{title}</h6>
                    </div>
                    <div className="h4team-social">
                        <ul className="list-inline">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeam;