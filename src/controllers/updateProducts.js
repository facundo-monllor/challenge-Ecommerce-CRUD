import products from "../data/data.json" assert { type: "json" };
import fsPromises from "fs/promises"
import path from "path";

const dataFilePath = path.join(process.cwd(), "/src/data/data.json");

export const updateProducts = async (req,res) => {
    try{
        const {id} = req.params
        const {name, description, price, image} = req.body

        let productFind = products.find((p) => p.id == id)
        let productPosition = products.indexOf(products.find((p) => p.id == id))

        if(!productFind){
            res.status(400).send("Producto no encontrado")
        }
        
        productFind = {
            id,
            name : name ? name : productFind.name,
            description : description ? description : productFind.description,
            price : price ? price : productFind.price,
            image: image ? image : productFind.image,
        }
        
        products[productPosition] = productFind

        const updatedData = JSON.stringify(products)

        await fsPromises.writeFile(dataFilePath, updatedData)

        res.status(200).send(products)
    }catch(error){
        console.log(error);
        res.status(400).send(error.message)
    }
}
