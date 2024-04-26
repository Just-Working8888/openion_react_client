// Header.tsx
import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss'
import logo from '../../assets/icon/logo.svg'
import { Avatar, Button, Input, Tooltip } from 'antd';
import { BellOutlined, CloseOutlined, DownOutlined, HeartOutlined, InfoCircleOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons';
import MainBtn from 'Components/MainBtn/MainBtn';
import navItems from '../../data/test/headeritems.json'

import { Link } from 'react-router-dom';
import Logo from 'Components/Logo/Logo';


const HeaderComponent: React.FC = () => {

    const [top, setTop] = useState<boolean>(true)

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (

        <header className={classes.header}>
            <nav style={!top ? { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: '0.3s' } : {}} className={classes.header_nav}>
                <div className={classes.header_nav_logo}>
                    <Logo />

                </div>




                <div className={classes.header_nav_user}>

                    <div className={classes.header_nav_not}>
                        <BellOutlined />
                        <HeartOutlined />
                    </div>
                    <Avatar shape="square" size={32} icon={<UserOutlined />} />
                    Ермаков Е.
                    <DownOutlined />
                </div>

            </nav>
            <nav className={classes.header_bot}>
                <div className={classes.header_bot_ul}>
                    {
                        navItems.map((item, index) => <Link key={index} to={item.href}>{item.title}</Link>)
                    }
                </div>
                <div className={classes.header_bot_nav}>
                    <MainBtn size={32} title='Ваш менеджер' icon={<WechatOutlined />} />
                    <h1>%</h1>
                    <h1>Акции</h1>
                    <h1>Блог</h1>
                </div>
            </nav>

        </header >

    );
};

export default HeaderComponent;
