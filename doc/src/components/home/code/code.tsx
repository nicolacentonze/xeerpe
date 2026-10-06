import classes from './code.module.css'
import {CodeProps} from "@/src/models/home.ts";

const TOKEN = /('[^']*'|\b(?:new|import|from|const)\b|\.\w+(?=\()|\b\d+(?:\.\d+)?\b)/g

const tokenClass = (token: string): string | undefined => {
    if (token.startsWith("'")) return classes.string
    if (token.startsWith('.')) return classes.method
    if (/^\d/.test(token)) return classes.number
    if (/^(new|import|from|const)$/.test(token)) return classes.keyword
    return undefined
}

const Code = ({code, className}: CodeProps) => (
    <pre className={`${classes.code}${className ? ` ${className}` : ''}`}>
        <code>
            {code.split(TOKEN).map((part, i) => {
                const tokenClassName = tokenClass(part)
                return tokenClassName
                    ? <span key={i} className={tokenClassName}>{part}</span>
                    : part
            })}
        </code>
    </pre>
)

export default Code
