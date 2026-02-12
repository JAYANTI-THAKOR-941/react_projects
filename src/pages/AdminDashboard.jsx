
const AdminDashboard = ()=>{
    const isAdmin = false;
    return(
        <>
            {/* {isAdmin ? <h1>Welcome Admin</h1> : <h1>Please login as Admin</h1>} */}
           
           {isAdmin && <h1>Welcome Admin</h1>}

        </>
    )
}

export default AdminDashboard;