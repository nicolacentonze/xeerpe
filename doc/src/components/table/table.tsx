import classes from './table.module.css'

const Table = (props: React.TableHTMLAttributes<HTMLTableElement>) => {
    return (
            <table className={classes.table} {...props} />
    )
}

export default Table