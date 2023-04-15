import products from "../data/data.json" assert { type: "json" };
import fsPromises from "fs/promises"
import path from "path";

const dataFilePath = path.join(process.cwd(), "/src/data/data.json");

export const deleteProducts = async (req,res) => {
    try{
        const {id} = req.params

        const productFind = products.find((p) => p.id == id)
        if(!productFind){
            return res.status(400).send("ID invalido")
        }
        
        const filtrados = products.filter((p) => p.id != productFind.id)

        const updatedData = JSON.stringify(filtrados)

        await fsPromises.writeFile(dataFilePath, updatedData)

        res.status(200).send(filtrados)
    }catch(error){
        console.log(error);
        res.status(400).send(error.message)
    }
}
