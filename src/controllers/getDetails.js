import products from "../data/data.json" assert { type: "json" };


export const getDetails = async (req,res) => {
    try{
        const {idDetails} = req.params

        const productFind = products.find(p => p.id = idDetails).description
        console.log(productFind)

        res.status(200).send(productFind)
    }catch(error){
        console.log(error);
        res.status(400).send(error.message)
    }
}