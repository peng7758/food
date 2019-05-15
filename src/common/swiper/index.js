import React from 'react'
import { Carousel } from 'antd';
import './style.css'



class Swiper extends React.Component {
    constructor(props) {
        super(props)


        this.state = {

        }

    }

    render() {
        const { comment } = this.props
        return (
            <Carousel autoplay>
                {
                    comment.map(item => {
                        return (
                            <div key={ item.id }>
                                <h1>{ item.name }</h1>
                            </div>
                        )
                    })
                }
            </Carousel>
        )
    }
}

export default Swiper