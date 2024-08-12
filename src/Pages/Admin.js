import React, { useState } from 'react'
import AdminNav from '../navbarComponents/AdminNav'
import { Button, Container } from 'react-bootstrap';

// import hotel from './images/hotel.jpg'

function Admin() {

    

   
    return (
        <div>

            <AdminNav />
            <div style={{ display: "flex" ,backgroundColor:"#FFC0CB"}}>

                <div class="col-md-8">
                    <div class="content" >
                        <h1>Welcome Admin</h1>
                        
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="image-container">
                        <img src="https://images.picxy.com/cache/2021/10/5/d5f085dceaec732d15ea7f4c4cdc16e9.jpg" alt="Image Description" height="550px" width="440px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
