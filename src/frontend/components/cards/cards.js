import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import styles from './cards.module.scss'
import Card from "./card/card";
import Loader from "../loader/loader";
import {createStructuredSelector} from "reselect";
import {postsListSelector, postsLoadedSelector, postsLoadingSelector, postsSelector} from "../../redux/selectors";
import {loadPosts} from "../../redux/actions/action";

const Cards = (props) => {
    const {
        posts,
        loadPosts,
        loading,
        loaded,
    } = props
    console.log('[Cards][props]', props)

    useEffect(() => {
        if (!loading && !loaded) loadPosts()
    }, [loadPosts, loading, loaded])

    if (loading || !loaded) return <Loader />

    return (
        <div className={styles.cards}>
            <div className={styles.container}>
                <h2 className={styles.title}>Header</h2>
                <div className={styles.inner}>
                    <Card />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state
})

export default connect(mapStateToProps,
    {loadPosts}
)(Cards)