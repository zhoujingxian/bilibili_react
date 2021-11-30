import React from 'react'

import styles from './index.module.scss'
import {withRouter} from "react-router-dom";
import BiliGrid from "../../components/bili-grid";
import BiliVideo from "../../components/bili-videoTitle";
import Count from "../../utils/count";

class Cell extends React.Component {
    state = {
        prev: true,
        recData: []
    }


    render() {
        let prev1, topData, bottomData, recData;
        if (this.props.location.pathname.length === 10) {
            recData = this.props.recData;
            prev1 = true
        } else {
            topData = this.props.recData.slice(0, 4)
            bottomData = this.props.recData.slice(4)
            prev1 = false
        }
        return (
            <div>
                {
                    prev1 && <div className={styles.recHeader}>
                        <BiliGrid moreTitle={'排行榜'} moreIcon={true} moreUrl={'/rank'} moreStyle={{color: "#ffa726"}}>
                            {
                                recData[0].data.map((value, index) => (
                                    <BiliVideo key={index} title={value.title} src={value.cover} viewCounts={Count(value.viewCounts)}
                                               comment={Count(value.comment)}
                                               url={'/detail'}/>
                                ))
                            }
                        </BiliGrid>
                        {
                            recData.map((value, index) => (
                                    value.name !== '推荐' && <BiliGrid key={index} title={value.name} moreUrl={value.path}>
                                        {
                                            recData[index].data.map((value, index) => (
                                                <BiliVideo key={index} title={value.title} src={value.cover} viewCounts={Count(value.viewCounts)}
                                                           comment={Count(value.comment)} url={'/detail'}/>
                                            ))
                                        }
                                    </BiliGrid>
                                ))
                        }
                    </div>
                }
                {
                    !prev1 && <div className={styles.cellBox}>
                        <BiliGrid>
                            {
                                topData.map((value, index) => (
                                    <BiliVideo key={index} title={value.title} src={value.cover} viewCounts={Count(value.viewCounts)}
                                               comment={Count(value.comment)}
                                               url={'/detail'}/>
                                ))
                            }
                        </BiliGrid>
                        {
                            <BiliGrid title={'最新视频'}>
                                {
                                    bottomData.map((value, index) => (
                                        <BiliVideo key={index} title={value.title} src={value.cover} viewCounts={Count(value.viewCounts)}
                                                   comment={Count(value.comment)}
                                                   url={'/detail'}/>
                                    ))
                                }
                            </BiliGrid>

                        }
                    </div>
                }
            </div>

        )
    }
}

export default withRouter(Cell)