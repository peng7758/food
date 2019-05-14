import React from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import PropType from 'prop-types'
import { NavLink } from 'react-router-dom'
import './index.css'

const { Header, Content, Sider } = Layout;

class Tabs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

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
                                        <span className="nav-text"><NavLink to={ '/' + item.type } className='colr'>{item.name}</NavLink></span>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        </div>
                    </Content>

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