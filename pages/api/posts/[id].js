import {client} from "../../../contentful";
export default async function  id(req, res) {
    const
    {
        id
    } = req.query;

    const r = await  client.getEntry(id);
    return  res.status(200).json(r)
}