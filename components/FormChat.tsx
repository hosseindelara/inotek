import { Button, IconButton, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

import style from '../styles/formChat.module.css'

type PropsCheck = {
    handelupDate: any
}

export default function FormChat({ handelupDate }: PropsCheck): JSX.Element {

    const state: any = useSelector((state: any) => state)


    const [FormData, setFormData] = useState<any>({ id: parseInt(state.Login.idUser), chat: '' })


    const sendDataFrom = async () => {
        try {
            const res = await axios.post(`${state.baseUrl}/chat`, JSON.stringify(FormData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            handelupDate();
            setFormData({ ...FormData, chat: '' })
        } catch (error) {
            console.log(error);
        }
    }

    const handelonSubmit = (e: any): void => {
        e.preventDefault();

        if (!e.target[0].value) {

        }
        else {
            sendDataFrom()
        }
    }

    return (
        <form method='POST' onSubmit={handelonSubmit} className={style.form} >
            <TextField color="secondary" name='chat' value={FormData.chat} onChange={(e) => setFormData({ ...FormData, chat: e.target.value })} className={style.input} />
            <Button color="secondary" type='submit' >
                <SendIcon />
            </Button>
        </form>
    )
}
