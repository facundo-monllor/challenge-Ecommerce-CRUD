import products from "../data/data.json" assert { type: "json" };
import fsPromises from "fs/promises"
import path from "path";

const dataFilePath = path.join(process.cwd(), "/src/data/data.json");

export const postProducts = async (req,res) => {
    try{
        const {name, description, price, image} = req.body;
        if(!name ||!description ||!price ||!image){
            return res.status(400).json({message: "All fields are required"})
        }
        
        const newId = products.at(-1).id + 1

        const newProduct = {
            id: newId,
            name,
            description,
            price,
            image
        }

        products.push(newProduct)

        const updatedData = JSON.stringify(products)

        await fsPromises.writeFile(dataFilePath, updatedData)

        res.status(200).send(products)
    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}