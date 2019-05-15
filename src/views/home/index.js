import React from 'react'
import './index.less'
import Tabs from '../../common/tabs/index'
import { HashRouter as Router } from 'react-router-dom'


class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: [
        { id: 1, name: '菜单管理', type: 'user' },
        { id: 2, name: '员工管理', type: 'fire' },
        { id: 3, name: '预订', type: 'trophy' },
        { id: 4, name: '考勤', type: 'heart' },
        { id: 5, name: '财务管理', type: 'meh' },
        { id: 6, name: '顾客留言', type: 'crown' },
        
      ]
    }


  }
  render() {
    return (
      <div>
        <Router>
          <Tabs tabs={this.state.tabs}></Tabs>
        </Router>
      </div>
    )
  }

}

export default Home