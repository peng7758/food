import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';
import PicturesWall from '../pictures/index'
import './style.css'

const { Option } = Select;

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  onCloseTo = (e) => {
    this.setState({
      visible: false,
    });
    // let action = {

    // }
    // store.dispatch(action)
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button className="fm" type="primary" onClick={this.showDrawer}>
          <Icon type="plus" />新增菜单
        </Button>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  })(<Input placeholder="请输入菜名" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <PicturesWall></PicturesWall>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Owner">
                  {getFieldDecorator('owner', {
                    rules: [{ required: true, message: 'Please select an owner' }],
                  })(
                    <Select placeholder="记录者">
                      <Option value="xiao">Xiaoxiao Fu</Option>
                      <Option value="mao">Maomao Zhou</Option>
                      <Option value="da">Dada Ge</Option>
                      <Option value="xx">Xiaoxiao Jie</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Type">
                  {getFieldDecorator('type', {
                    rules: [{ required: true, message: 'Please choose the type' }],
                  })(
                    <Select placeholder="请输入菜系">
                      <Option value="user">粤菜</Option>
                      <Option value="heart">湘菜</Option>
                      <Option value="fire">川菜</Option>
                      <Option value="crown">苏菜</Option>
                      <Option value="star">浙菜</Option>
                      <Option value="trophy">徽菜</Option>
                      <Option value="meh">鲁菜</Option>
                      <Option value="thunderbolt">闽菜</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Approver">
                  {getFieldDecorator('approver', {
                    rules: [{ required: true, message: 'Please choose the approver' }],
                  })(
                    <Select placeholder="审批人">
                      <Option value="jack">Jack Ma</Option>
                      <Option value="tom">Tom Liu</Option>
                      <Option value="smit">Smit Chen</Option>
                      <Option value="wite">Wite Wang</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="DateTime">
                  {getFieldDecorator('dateTime', {
                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                  })(
                    <DatePicker.RangePicker
                      style={{ width: '100%' }}
                      getPopupContainer={trigger => trigger.parentNode}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'please enter url description',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="请输入菜品描述" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button onClick={this.onCloseTo} type="primary">
              确认
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}


const DrawerF = Form.create()(DrawerForm);

export default DrawerF