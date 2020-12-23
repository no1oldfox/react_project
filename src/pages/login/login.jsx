import React,{Component} from 'react';
import logo from './imgs/logo.png'
import './css/login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class Login extends Component {
  
  pwdValidator = (rule,value)=>{
    if(value.length<4){
      return Promise.reject('密码长度为4-12位')
    }else if(value.length>12){
      return Promise.reject('密码长度为4-12位')
    }else if(!(/^\w+$/).test(value)){
      return Promise.reject('密码必须由字母数字下划线组成')
    }else{
      return Promise.resolve('')
    }
  }
 

  render(){
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      console.log('dengl;ucehng');
    };
    
    return(
      <div className="login">
        <header>
          <img src={logo} alt="logo"/>
          <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
                {
                  max:12,
                  message: '账号长度4-12位'
                },
                {
                  min:4,
                  message: '账号长度4-12位'
                },
                {
                  pattern:/^\w+$/,
                  message:'账号必须由字母，数字，下划线组成'
                }
              ]}
            >
              <Input prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}} className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
                {
                  validator:this.pwdValidator
                }
              ]}
            >
              <Input
                prefix={<LockOutlined style={{color:'rgba(0,0,0,.25)'}} className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button " >
                登录
              </Button>
             
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}