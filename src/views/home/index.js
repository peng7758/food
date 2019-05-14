import React from 'react'
import './index.less'
import Tabs from '../../common/tabs/index'



class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tabs :[
        {id:1,name:'粤菜',type:'user'},
        {id:2,name:'川菜',type:'fire'},
        {id:3,name:'徽菜',type:'trophy'},
        {id:4,name:'湘菜',type:'heart'},
        {id:5,name:'鲁菜',type:'meh'},
        {id:6,name:'苏菜',type:'crown'},
        {id:7,name:'浙菜',type:'star'},
        {id:8,name:'闽菜',type:'thunderbolt'},
      ]
    }


  }
  render() {
    return (
      <diV>
        <Tabs tabs={ this.state.tabs }></Tabs>
      </diV>
    )
  }

}

export default Home