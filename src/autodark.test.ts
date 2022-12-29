import {css, html, runTailwindWithAutoDark} from "../test/runner";
import type {Config} from "tailwindcss";

it('auto dark', () => {
    const config: Config = {
        content: [{raw: html`<h1 class="font-bold">Hello, World</h1>`}],
    }
    const input = css`@tailwind utilities;`
    const expectedOutput = css`.font-bold { font-weight: 700 }`
    return runTailwindWithAutoDark(input, config).then(output => {
        expect(output).toEqual(expectedOutput)
    })
})
