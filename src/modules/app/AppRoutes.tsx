import { privateRoutes, publicRoutes } from "../../shared/config/routes"
import { Login } from "../auth/actions/login/Login"
import { SignUp } from "../auth/actions/signup/Signup"
import { RecordsPage } from "../records/RecordsPage"

export interface AppRoutes {
    path:string,
    name:string,
    component:React.ReactNode,
    icon?:React.ReactNode
}

export const PUBLIC_ROUTES:AppRoutes[] = [
    {
        path: '/',
        name:'Login',
        component: <Login />
    },
    {
        path: publicRoutes.login,
        name:'Login',
        component: <Login />
    },
    {
        path: publicRoutes.signup,
        name:'Signup',
        component:<SignUp />
    },
]

export const PRIVATE_ROUTES:AppRoutes[] = [
    {
        path: privateRoutes.records,
        name:'Records',
        component: <RecordsPage />
    },
]