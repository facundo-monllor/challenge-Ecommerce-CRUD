import axios from "axios"
import products from "../data/data.json" assert { type: "json" };

export const getProducts = async (req,res) => {
    try{
        const {namee} = req.params
        console.log(namee)
        if(namee){
          const productFiltrados = products.filter((p) => p.name === namee)
          return res.status(200).send(productFiltrados)
        }
        res.status(201).send(products)
    }catch(error){
        console.log(error);
        res.status(400).send(error.message)
    }
}
