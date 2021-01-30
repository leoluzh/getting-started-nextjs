import axios from 'axios'
import { GetServerSideProps , NextPage } from 'next' 
import { User } from '../../models/user'
import * as React from 'react' 


interface UsersListProps {
    users: User[];
}

const UsersList : NextPage<UsersListProps> = ( props ) => {
    const { users } = props ;
    //const [ users , setUsers ] = React.useState<User[]>([])
    //React.useEffect(()=>{
        //3001 - server running in docker image ....
    //  axios.get('http://localhost:3001/api/users')   
    //      .then( response => setUsers( response.data ) ) 
    //},[])

    return (
        <ul>
            { users.map( u => <li>{ u.name } - { u.email }</li>)}
        </ul>
    );

}

export default UsersList;

export const getServerSideProps : GetServerSideProps = async ( context ) => {
    //3000 - node running inside docker image.
    const data = await axios.get('http://localhost:3000/api/users');
    return {
        props: {
            users: data
        }
    }
}