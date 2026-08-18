import classes from './loading.module.css'

const GuideSlugLoading = () => {
    return (
        <div className={classes.guideLoading}>
            <div className={classes.spinner} />
            <p>Loading page…</p>
        </div>
    )
}

export default GuideSlugLoading