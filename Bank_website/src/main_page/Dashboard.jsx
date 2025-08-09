import React from 'react'

function Dashboard() {
    return (
        <div>
            <div className='flex flex-row place-content-center'>
                <h1 className='text-xl text-white'>Dashboard</h1>
            </div>
            <div className='flex flex-row justify-evenly'>
                <div >
                    <div>
                        <h1 className='text-xl text-white'>List of Depositors</h1>
                    </div>
                    <div>
                        <table className='table-auto text-white'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>A/C No.</th>
                                    <th>Balance</th>
                                    <th>Details</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Adam</td>
                                    <td>Adam</td>
                                    <td>Adam</td>
                                    <td>Adam</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-xl text-white'>List of Borrowers</h1>
                    </div>
                    <div>
                        <table className='table-auto text-white'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Loan No.</th>
                                    <th>Amount</th>
                                    <th>Details</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Adam</td>
                                    <td>Adam</td>
                                    <td>Adam</td>
                                    <td>Adam</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;