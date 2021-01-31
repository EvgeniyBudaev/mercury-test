import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import styles from './cards.module.scss'
import Card from "./card/card";
import Loader from "../loader/loader";
import {postsListSelector, postsLoadedSelector, postsLoadingSelector} from "../../redux/selectors";
import {loadPosts} from "../../redux/actions/action";
import {RootStateType} from "../../redux/reducers";

interface IPost {
    id: number,
    userId: number,
    title: string,
    body: string
}

type MapStatePropsType = {
    posts: Array<IPost>,
    loading: boolean,
    loaded: boolean
}

type MapDispatchPropsType = {
    loadPosts: () => void
}

type CardsPopsType = MapStatePropsType & MapDispatchPropsType

const Cards: React.FC<CardsPopsType> = (props) => {
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
                    {
                        posts.map(post => (
                            <Card key={post.id} post={post} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootStateType):MapStatePropsType => {
    return {
        posts: postsListSelector(state),
        loading: postsLoadingSelector(state),
        loaded: postsLoadedSelector(state),
    }
}

export default connect(mapStateToProps, {loadPosts})(Cards);