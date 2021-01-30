import type { NextApiRequest , NextApiResponse } from 'next';
import users from '../../../data/users';

export default ( request: NextApiRequest , response: NextApiResponse ) => {
    const {
        query: { id }
    } = request ;

    //the plus in front of variable is a cast to number
    const user = users.find( u => u.id === +id )

    //javascript way to check if value is present
    if( user ){
        //200 - ok status - found
        response.status(200).json( user )
    }else{
        //404 - not found
        response.status(404).json( { error: "User not found" } )
    }

}