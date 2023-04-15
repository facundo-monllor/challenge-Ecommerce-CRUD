import products from "../data/data.json" assert { type: "json" };

export const getProducts = async (req,res) => {
    try{
        const {name} = req.query
        console.log(name)
        if(name){
          const productFiltrados = products.filter((p) => p.name.toLowerCase() === name.toLowerCase())
          return res.status(200).send(productFiltrados)
        }
        res.status(201).send(products)
    }catch(error){
        console.log(error);
        res.status(400).send(error.message)
    }
}
