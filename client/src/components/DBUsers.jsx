import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllUsers} from "../api";
import {setAllUserDetails} from "../context/actions/allUsersAction";
import {Avatar} from "../assets";
import DataTable from "./DataTable";

function DBUsers() {
    const allUsers = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllUsers().then((data) => {
            dispatch(setAllUserDetails(data));
        });
    }, []);

    return (
        <div className="flex items-center justify-center gap-4 pt-6 w-full">
            {allUsers && allUsers.length > 0 && (
                <DataTable
                    columns={[
                        {
                            title: "Image",
                            field: "photoURL",
                            render: (rowData) => (
                                <img
                                    src={
                                        rowData.photoURL
                                            ? rowData.photoURL
                                            : Avatar
                                    }
                                    className="w-32 h-16 object-contain rounded-full"
                                />
                            ),
                        },
                        {
                            title: "Name",
                            field: "displayName",
                        },
                        {
                            title: "Email",
                            field: "email",
                        },
                        {
                            title: "Verified",
                            field: "emailVerified",
                            render: (rowData) => (
                                <p
                                    className={`px-2 py-1 w-32 text-center text-primary rounded-md 
                        ${
                            rowData.emailVerified
                                ? "bg-emerald-500"
                                : "bg-red-500"
                        }`}
                                >
                                    {rowData.emailVerified
                                        ? "Verified"
                                        : "Not Verified"}
                                </p>
                            ),
                        },
                    ]}
                    data={allUsers}
                    title="Users list!"
                    // actions={[
                    //     {
                    //         icon: "edit",
                    //         tooltip: "Edit Data",
                    //         onClick: (event, rowData) => {
                    //             alert(
                    //                 "You want to update " + rowData.productId
                    //             );
                    //         },
                    //     },
                    //     {
                    //         icon: "delete",
                    //         tooltip: "Delete Data",
                    //         onClick: (event, rowData) => {
                    //             if (
                    //                 window.confirm(
                    //                     "Are you sure,you want to delete this product?"
                    //                 )
                    //             ) {
                    //                 deleteProduct(rowData.productId).then(
                    //                     (res) => {
                    //                         dispatch(
                    //                             alertSuccess("Product Deleted")
                    //                         );
                    //                         setTimeout(() => {
                    //                             dispatch(alertNull());
                    //                         }, 2000);
                    //                         getAllProduct().then((data) => {
                    //                             dispatch(setAllProducts(data));
                    //                         });
                    //                     }
                    //                 );
                    //             }
                    //         },
                    //     },
                    // ]}
                />
            )}
        </div>
    );
}

export default DBUsers;
