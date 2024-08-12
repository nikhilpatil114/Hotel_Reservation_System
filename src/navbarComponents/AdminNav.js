import React from 'react'

export default function AdminNav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg " style={{ backgroundColor: "#FA8072" }}>
                <b><a class="navbar-brand" href="#" >Admin</a></b>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" id='admin'></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <b><a class="nav-item nav-link active" href="/" >Logout<span class="sr-only">(current)</span></a></b>
                        <b><button class="nav-item nav-link" href="/booking" >Bookings</button></b>
                        <b><a class="nav-item nav-link" href="#" >Hotels</a></b>

                    </div>
                </div>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}
