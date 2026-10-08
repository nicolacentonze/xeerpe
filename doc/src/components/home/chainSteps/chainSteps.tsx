import {Builder} from 'xeerpe'
import classes from './chainSteps.module.css'
import Code from '@cmp/codeBlock/highlightedCode.tsx'
import ChainTabs from '@cmp/home/chainSteps/chainTabs.tsx'
import {chains} from "@/src/data/home.ts";
import {ChainStep} from "@/src/models/home.ts";

const ChainPanel = ({steps}: { steps: ChainStep[] }) => {
    const fullChain = ['new Builder()', ...steps.map((step) => step.code), '.toStyle()']
        .join('\n')
        .replace(/\n\./g, '\n  .')

    return (
        <div className={classes.chain}>
            <ol className={classes.steps}>
                {steps.map((step, index) => {
                    const builder = new Builder()
                    steps.slice(0, index + 1).forEach((previous) => previous.apply(builder))

                    return (
                        <li key={step.title} className={classes.step}>
                            <div className={classes.frame}>
                                <div className={classes.preview} style={builder.toStyle()} />
                            </div>
                            <span className={classes.index}>{String(index + 1).padStart(2, '0')}</span>
                            <h3 className={classes.title}>{step.title}</h3>
                            <p className={classes.description}>{step.description}</p>
                            <code className={classes.label}>{step.label}</code>
                        </li>
                    )
                })}
            </ol>

            <div className={classes.result}>
                <span className={classes.resultLabel}>The whole chain</span>
                <Code code={fullChain} />
            </div>
        </div>
    )
}

const ChainSteps = () => (
    <ChainTabs
        tabs={chains.map((chain) => ({
            id: chain.id,
            label: chain.name,
            panel: <ChainPanel steps={chain.steps} />,
        }))}
    />
)

export default ChainSteps
