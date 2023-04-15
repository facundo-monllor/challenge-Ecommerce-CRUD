import axios from "axios"
import products from "../data/data.json" assert { type: "json" };

export const getProducts = async (req,res) => {
    try{
        const {name} = req.params
        console.log(name)
        if(name){
          const productFiltrados = products.filter((p) => p.name === name)
          return res.status(200).send(productFiltrados)
        }
        res.status(201).send(products)
    }catch(error){
        console.log(error);
        res.status(400).send(error.message)
    }
}
