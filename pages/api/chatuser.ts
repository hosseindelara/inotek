import type { NextApiRequest, NextApiResponse } from 'next'

import chat from './chat.json'

type chat = {
    id: number
    chat: string
}


export default (req: NextApiRequest, res: NextApiResponse<chat[] | { Message: string }>) => {

    if (req.method === 'GET') {

        res.status(200).json(chat)

    }
    else {
        res.status(405).json({ Message: 'just request Get method' })
    }



}