import React from 'react'

import BiliButton from './index'

export default class Default extends React.Component {
    render() {
        return (<div>
            <div>
                <BiliButton size='middle' block={false}>按钮1</BiliButton>
            </div>
        </div>)
    }
}