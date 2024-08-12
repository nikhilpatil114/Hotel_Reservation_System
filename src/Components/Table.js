import React from 'react'
import { Button } from 'react-bootstrap'

export default function Table({ onClickCustomer, showTable }) {
    return (
        <div>

            <Button variant="primary" onClick={onClickCustomer}>
                {showTable ? 'Customer' : 'Customer'}
            </Button>

        </div>
    )
}
