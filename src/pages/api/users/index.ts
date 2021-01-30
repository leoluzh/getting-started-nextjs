import type { NextApiRequest , NextApiResponse } from 'next';
import users from "../../../data/users"

//listing all users ...
export default ( request : NextApiRequest , response : NextApiResponse ) => {
    response.status( 200 ).json( users )
}