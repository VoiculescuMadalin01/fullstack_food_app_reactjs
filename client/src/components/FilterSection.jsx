import {motion} from "framer-motion";
import React, {useState} from "react";
import {staggerFadeInOut} from "../animations";
import {IoFastFood} from "../assets/icons";
import {useSelector} from "react-redux";
import {statuses} from "../utils/style";
import SliderCard from "./SliderCard";

function FilterSection() {
    const products = useSelector((state) => state.products);
    const [category, setCategory] = useState("fruits");

    return (
        <motion.div className="w-full flex items-start justify-normal flex-col">
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-1">
                    <p className="text-2xl text-headingColor font-bold">
                        Our Hot Dishes
                    </p>
                    <div className="w-40 h-1 rounded-md bg-orange-500"></div>
                </div>
            </div>
            <div className="w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8">
                {statuses &&
                    statuses.map((data, i) => (
                        <FilterCard
                            key={data.id}
                            data={data}
                            category={category}
                            setCategory={setCategory}
                            index={i}
                        />
                    ))}
            </div>
            <div className="w-full flex items-center justify-evenly flex-wrap gap-4 mt-12">
                {products &&
                    products
                        .filter((data) => data.product_category === category)
                        .map((data, i) => (
                            <SliderCard
                                key={data.productId}
                                data={data}
                                index={i}
                            />
                        ))}
            </div>
        </motion.div>
    );
}

export const FilterCard = ({data, index, category, setCategory}) => {
    return (
        <motion.div
            key={data.id}
            onClick={() => setCategory(data.category)}
            {...staggerFadeInOut(index)}
            className={`group w-28 min-w-[110px] cursor-pointer rounded-md py-6 ${
                category === data.category ? "bg-red-500" : "bg-primary"
            } hover:bg-red-500 shadow-md flex flex-col items-center justify-center gap-4`}
        >
            <div
                className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center group-hover:bg-primary ${
                    category === data.category ? "bg-primary" : "bg-red-500"
                }`}
            >
                <IoFastFood
                    className={`${
                        category === data.category
                            ? "text-red-500"
                            : "text-primary"
                    } group-hover:text-red-500`}
                />
            </div>
            <p
                className={`text-xl font-semibold ${
                    category === data.category
                        ? "text-primary"
                        : "text-textColor"
                }`}
            >
                {data.title}
            </p>
        </motion.div>
    );
};

export default FilterSection;
