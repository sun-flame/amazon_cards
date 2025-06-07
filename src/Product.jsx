import "./Product.css";
import Price from "./Price";

function Product ({ title, idx }) {
    let oldPrices = ["12,000", "11,900", "5677", "599"];
    let newPrices = ["89000", "5688", "2999", "300"];
    let description = [
        "80000 DPI",
        "intutive surface",
        "designed for ipad pro",
        "wireless",
    ];
    return (
        <div className="Product">
            <h4> {title} </h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
};

export default Product;