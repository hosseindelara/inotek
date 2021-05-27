import { Button, TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import style from '../styles/login.module.css';
import { loginuser } from '../redux/actions/loginActions'

export default function Login() {

    const dispatch = useDispatch()



    const handelOnSubmit = (e: any): void => {
        e.preventDefault();

        let form: any = { [e.target[0].name]: e.target[0].value }

        if (!e.target[0].value) {
            toast.error('ایدی کاربری را وارد کنید', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            dispatch(loginuser({ login: true, ...form, loginDate: new Date().getTime() }))
        }

    }

    return (
        <div>
            <form noValidate onSubmit={handelOnSubmit} autoComplete="off" className={style.boxfrom} >

                <TextField name='idUser' label="ایدی کاربری" variant="outlined" />
                <Button type='submit' variant="contained" color="primary"> ورود</Button>
            </form>
        </div>
    )
}
