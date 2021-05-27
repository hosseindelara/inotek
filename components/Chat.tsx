import { Avatar, Badge } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import style from '../styles/chat.module.css'
import FormChat from './FormChat'
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }),
)(Badge);


export default function Chat() {

    const { Login, baseUrl }: any = useSelector((state: any) => state);

    const [reload, setReload] = useState<boolean>(false);

    const [DataFetch, setDataFetch] = useState([])


    const handelupDate = () => setReload(!reload);

    const getData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/chatuser`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.data
            setDataFetch(data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getData()
        return () => {

        }
    }, [reload])


    return (
        <div className={style.main} >
            <div className={style.hederChat} >
                <span>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar>{Login.idUser}</Avatar>
                    </StyledBadge>
                    {` کاربر ${Login.idUser}`}</span>
                <small>ورود در {new Date(Login.loginDate).constructor()}</small>
            </div>
            <div className={style.boxChat}>
                {
                    DataFetch.map((item: any, index: number) => (
                        <div key={index} className={parseInt(Login.idUser) === item.id ? style.user : style.mogabel} >
                            <p>{item.chat}</p>
                        </div>
                    ))
                }

            </div>
            <FormChat handelupDate={handelupDate} />
        </div>
    )
}
