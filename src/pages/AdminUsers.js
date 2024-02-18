import { useEffect, useState } from "react";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            // Retrieve the token from the cookie
            

            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '',
                },
            });

            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

return(
 <>
<section className="admin-users-section">
    <div className="container">
        <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users-">
            <table className="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((curUsers, index)=>{
            return (
             <tr key={index}>
                
                    <td>{curUsers.name}</td>
                    <td>{curUsers.email}</td>
                    <td>{curUsers.phone}</td>
                    <td>Edit</td>
                    <td>Delete</td>

               
            </tr>
             );
    })}
                </tbody>
            </table>
      
    </div>
    </section>
</>
);
};



//module.exports = AdminUsers;
export default AdminUsers;