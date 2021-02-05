import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import styles from './cards.module.scss'
import Card from "./card/card";
import Loader from "../loader/loader";
import {
    photosListSelector,
    photosLoadedSelector,
    photosLoadingSelector,
    postsListSelector,
    postsLoadedSelector,
    postsLoadingSelector,
    usersListSelector,
    usersLoadingSelector,
    usersLoadedSelector
} from "../../redux/selectors";
import {loadPhotos, loadPosts, loadUsers} from "../../redux/actions/action";
import {RootStateType} from "../../redux/reducers";
import {CardsPopsType, MapStatePropsPostsType} from "./interface";



const Cards: React.FC<CardsPopsType> = (props) => {
    const {
        posts,
        loadPosts,
        loadPhotos,
        loadUsers,
        loadingPosts,
        loadedPosts,
        loadingPhotos,
        loadedPhotos,
        loadingUsers,
        loadedUsers
    } = props

    console.log('[Cards][props]', props)


    useEffect(() => {
        if (!loadingPosts && !loadedPosts && !loadingPhotos && !loadedPhotos && !loadingUsers && !loadedUsers) {
            loadPhotos()
            loadPosts()
            loadUsers()
        }
    }, [loadPosts, loadPhotos, loadUsers, loadingPosts, loadedPosts, loadingPhotos, loadedPhotos, loadingUsers, loadedUsers])

    if ((loadingPhotos && loadingPosts && loadingUsers) || (!loadedPosts && !loadedPhotos && !loadedUsers)) return <Loader />


    return (
        <div className={styles.cards}>
            <div className={styles.container}>
                <h2 className={styles.title}>Header</h2>
                <div className={styles.inner}>
                    {
                        posts.map(post => (
                            <Card key={post.id} postId={post.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootStateType):MapStatePropsPostsType => {
    return {
        posts: postsListSelector(state),
        loadingPosts: postsLoadingSelector(state),
        loadedPosts: postsLoadedSelector(state),
        photos: photosListSelector(state),
        loadingPhotos: photosLoadingSelector(state),
        loadedPhotos: photosLoadedSelector(state),
        users: usersListSelector(state),
        loadingUsers: usersLoadingSelector(state),
        loadedUsers: usersLoadedSelector(state),
    }
}

export default connect(mapStateToProps, {loadPosts, loadPhotos, loadUsers})(Cards);

