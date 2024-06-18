import { BarsOutlined, SnippetsOutlined } from "@ant-design/icons"
import {  Divider, Image, Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import { useLocation, useNavigate } from "react-router-dom";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { Logout } from "../../auth/actions/logout/Logout";
import { privateRoutes } from "../../../shared/config/routes";
import { ImageContainer } from "./styles/ImageContainer";
import logo from '../../../assets/img/logo-light.png'
import buildlogo from '../../../assets/img/build-logo.png'
import { useState } from "react";

const menuItems = [
    {
        key:'0',
        icon:<SnippetsOutlined />,
        label: 'Registros',
        path: privateRoutes.records

    },
    
    {
        key:'1',
        icon:<BarsOutlined />,
        label: 'Usuarios',
        path: privateRoutes.users
    },
] 

export const AppSidebar:React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()

    const menu = menuItems.map((item)=>{
        return {
            ...item,
            onClick:()=>navigate(item.path)
        }
    }) as ItemType[]

    const opened = ((location && menuItems.findIndex((item)=>item.path === location.pathname)) || 0).toString()

    return (
        <Sider
            trigger={null}
            collapsible 
            collapsed={collapsed}
            theme="dark"
            onMouseEnter={() => setCollapsed(false)}
            onMouseLeave={() => setCollapsed(true)}
        >
            <ImageContainer collapsed={collapsed}>
                {!collapsed ? 
                    <Image
                        src={logo}
                        preview={false}
                        height={'65px'}
                    /> : 
                    <Image 
                        src={buildlogo}
                        preview={false}
                        height={'55px'}
                    />
                }
            </ImageContainer>

            <Divider />
                
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[opened]}
                items={menu}
            />

            <Divider />

            <Logout collapsed={collapsed}/>
        </Sider>
    )
}