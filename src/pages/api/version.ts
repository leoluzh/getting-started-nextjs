import type { NextApiRequest , NextApiResponse } from 'next'

type Data = {
    name: string
    version: string
}

export default ( request : NextApiRequest , response: NextApiResponse<Data> ) => {
    response.status(200).json({ name: "getting-stated-nextjs" , version: "1.0.0" });
}