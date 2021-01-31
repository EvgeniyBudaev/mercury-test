import React from 'react'
import styles from './card.module.scss'
import {ICard} from "./interface";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/reducers";
import {postSelector} from "../../../redux/selectors";
import {IPostId} from "../../../redux/types";


const Card: React.FC<ICard> = (props) => {
    const {postId} = props
    const {title, body} = props.post
    console.log('[Card][props]', props)


    return (
        <div className={styles.card}>
            <div className={styles.inner}>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.text}>{body}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootStateType, ownProps: IPostId) => {
    return {
        post: postSelector(state, ownProps)
    }
}


export default connect(mapStateToProps)(Card)