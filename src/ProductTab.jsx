import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
};


    return (
        <div style={styles}>
            <Product title="Logistics MX Master" idx={0} />
            <Product title="Apple Pencil" idx={1} />
            <Product title="Zebronics Zeb-transform" idx={2} />
            <Product title="Petronics Toad" idx={3} />
 
        </div>
    );
};

export default ProductTab;