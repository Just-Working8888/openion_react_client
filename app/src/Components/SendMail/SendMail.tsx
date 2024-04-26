import React from 'react';
import { Button, Card, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const SendMail: React.FC = () => (
    <div className='SendMail'  >

        <div className='form'>
            <h1>Want more tutorials & guides</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.</p>
            <div className="inp">
                <Input style={{ padding: '1rem', maxWidth: '600px' }} size="large" placeholder="large size" prefix={<MailOutlined />} />
                <Button type='primary' style={{ height: '58px', padding: "0 2rem" }}>send</Button>
            </div>

        </div>
        <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a"><stop stop-color="#DFDFDF" offset="0%"></stop><stop stop-color="#4C4C4C" offset="44.317%"></stop><stop stop-color="#333" offset="100%"></stop></radialGradient></defs><g fill="none" fill-rule="evenodd"><g fill="#FFF"><ellipse fill-opacity=".04" cx="185" cy="15.576" rx="16" ry="15.576"></ellipse><ellipse fill-opacity=".24" cx="100" cy="68.402" rx="24" ry="23.364"></ellipse><ellipse fill-opacity=".12" cx="29" cy="251.231" rx="29" ry="28.231"></ellipse><ellipse fill-opacity=".64" cx="29" cy="251.231" rx="8" ry="7.788"></ellipse><ellipse fill-opacity=".12" cx="342" cy="31.303" rx="8" ry="7.788"></ellipse><ellipse fill-opacity=".48" cx="62" cy="126.811" rx="2" ry="1.947"></ellipse><ellipse fill-opacity=".12" cx="78" cy="7.072" rx="2" ry="1.947"></ellipse><ellipse fill-opacity=".64" cx="185" cy="15.576" rx="6" ry="5.841"></ellipse></g><circle fill="url(#ni-a)" cx="276" cy="237" r="200"></circle></g></svg>
    </div>
);

export default SendMail;