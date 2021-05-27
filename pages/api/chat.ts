import type { NextApiRequest, NextApiResponse } from 'next'

const fs = require('fs')

export default (req: NextApiRequest, res: NextApiResponse<{}>) => {

    if (req.method === 'POST') {

        fs.readFile('./pages/api/chat.json', 'utf8', function callback(err: any, data: any) {

            const dataForm = req.body

            if (!dataForm.chat) {
                res.status(400).json({ Message: 'متن چت اجباری است' })
            }
            else {
                const finaly = [...JSON.parse(data), dataForm]

                fs.writeFile('./pages/api/chat.json', JSON.stringify(finaly), 'utf8', () => { })

                res.status(201).json({ Message: 'ok' })
            }



        })
    }
    else {
        res.status(405).json({ Message: 'just request POST method' })
    }



}