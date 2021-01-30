const logger = (store) => (next) => (action) => {
    console.log('[logger][action]', action)
    next(action)
    console.log('[logger][after action]', store.getState())
}

export default logger()
