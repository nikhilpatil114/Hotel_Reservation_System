import React from 'react'
import CustomerNav from '../navbarComponents/CustomerNav'
import Booking from '../Components/Booking'

const Customer = () => {
    return (
        <div>
            <CustomerNav />
            <div style={{ display: "flex",backgroundColor:"#FFC0CB"}}>
                
                <div class="col-md-8">
                    <div class="content">
                        
                        
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="image-container">
                        <img src="https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_640.jpg" alt="Image Description" height="550px" width="440px"   />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Customer
