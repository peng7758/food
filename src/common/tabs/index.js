import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import PropType from 'prop-types'
import { NavLink, Route, Switch } from 'react-router-dom'
import './index.css'
import FormTab from '../../views/home/table';
import Comments from '../../common/comments/index'
import Swiper from '../swiper';
import Employees from '../../views/home/employees/index'





const { Header, Content, Sider, Footer } = Layout;

class Tabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: [
                { id: 1, name: 'tom', msg: '来了 老弟！' },
                { id: 2, name: 'jack', msg: '来了 老弟！' },
                { id: 3, name: 'smit', msg: '来了 老弟！' },
                { id: 4, name: 'chen', msg: '来了 老弟！' },
                { id: 5, name: 'li', msg: '来了 老弟！' },
                { id: 6, name: 'liu', msg: '来了 老弟！' },
            ]
        }
    }


    render() {
        const { tabs } = this.props
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        {
                            tabs.map(item => {
                                return (
                                    <Menu.Item key={item.id}>
                                        <Icon type={item.type} />
                                        <span className="nav-text"><NavLink to={'/home/' + item.type} className='colr'>{item.name}</NavLink></span>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} ></Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            <Switch>
                                <Route path='/home/user' render={() => <FormTab></FormTab>}></Route>
                                <Route path='/home/fire' render={() => <Employees></Employees>}></Route>
                                <Route path='/home/trophy' render={() => <div><h1>预订</h1></div>}></Route>
                                <Route path='/home/heart' render={() => <div><h1>考勤</h1></div>}></Route>
                                <Route path='/home/meh' render={() => <div><h1>财务管理</h1></div>}></Route>
                                <Route path='/home/crown' render={() => <Swiper comment={this.state.comment}></Swiper>}></Route>
                            </Switch>
                        </div>
                    </Content>
                    <Footer>
                        <Switch>
                            <Route path='/home/crown' render={() => <Comments></Comments>}></Route>
                        </Switch>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}


Tabs.propType = {
    tabs: PropType.array.isRequired
}

Tabs.defaultProps = {
    tabs: []
}

export default Tabs