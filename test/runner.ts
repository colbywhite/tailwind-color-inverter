import path from 'path'
import postcss from 'postcss'
import tailwind from 'tailwindcss'
import type {Config} from 'tailwindcss'
import autodark from '../src'
import prettier from "prettier";

type CSSString = string & {format: 'css'}
type HTMLString = string & {format: 'html'}

function toCss(input: string): CSSString {
    return prettier.format(input, {parser: 'css',}) as CSSString
}

function toHtml(input: string): HTMLString {
    return prettier.format(input, {parser: 'html',}) as HTMLString
}

export const css = (...args: Parameters<typeof String.raw>) => {
    return toCss(String.raw(...args))
}

export const html = (...args: Parameters<typeof String.raw>) => {
    return toHtml(String.raw(...args))
}

export async function runTailwindWithAutoDark(input: CSSString, config: Config) {
    config.plugins ??= []
    if (!config.plugins.includes(autodark)) {
        config.plugins.push(autodark)
    }
    return runTailwind(input, config)
}

export async function runTailwind(input: CSSString, config: Config) {
    const {currentTestName} = expect.getState()
    const result = await postcss(tailwind(config)).process(input, {
        from: `${path.resolve(__filename)}?test=${currentTestName}`,
    })
    return toCss(result.css)
}
