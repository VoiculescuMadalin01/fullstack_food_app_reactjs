import React, {useEffect} from "react";
import {DataTable} from "../components";
import {HiCurrencyDollar} from "../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, getAllProduct} from "../api";
import {setAllProducts} from "../context/actions/productActions";
import {alertNull, alertSuccess} from "../context/actions/alertActions";

function DBItems() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!products) {
            getAllProduct().then((data) => {
                dispatch(setAllProducts(data));
            });
        }
    }, []);

    return (
        <div className="flex items-center justify-center gap-4 pt-6 w-full">
            {products && (
                <DataTable
                    columns={[
                        {
                            title: "Image",
                            field: "imageURL",
                            render: (rowData) => (
                                <img
                                    src={rowData.imageURL}
                                    className="w-32 h-16 object-contain rounded-md"
                                />
                            ),
                        },
                        {
                            title: "Name",
                            field: "product_name",
                        },
                        {
                            title: "Category",
                            field: "product_category",
                        },
                        {
                            title: "Price",
                            field: "product_price",
                            render: (rowData) => (
                                <p className="text-2xl font-semibold text-textColor flex justify-center ">
                                    <HiCurrencyDollar className="text-red-400" />
                                    {parseFloat(rowData.product_price).toFixed(
                                        2
                                    )}
                                </p>
                            ),
                        },
                    ]}
                    data={products}
                    title="Product list!"
                    actions={[
                        {
                            icon: "delete",
                            tooltip: "Delete Data",
                            onClick: (event, rowData) => {
                                if (
                                    window.confirm(
                                        "Are you sure,you want to delete this product?"
                                    )
                                ) {
                                    deleteProduct(rowData.productId).then(
                                        (res) => {
                                            dispatch(
                                                alertSuccess("Product Deleted")
                                            );
                                            setTimeout(() => {
                                                dispatch(alertNull());
                                            }, 2000);
                                            getAllProduct().then((data) => {
                                                dispatch(setAllProducts(data));
                                            });
                                        }
                                    );
                                }
                            },
                        },
                    ]}
                />
            )}
        </div>
    );
}

export default DBItems;
