import assert from 'node:assert/strict'
import test from 'node:test'
import { Builder } from '../dist/index.mjs'

const mesh = () => ({
    background: '#000000',
    backgroundSize: '200% 200%',
    layers: [
        { from: '#ff0000', to: 'transparent' },
        { from: '#0000ff', to: 'transparent' },
    ],
})

test('mesh size applies to every mesh image before the next gradient', () => {
    const style = new Builder().meshGradient(mesh()).linearGradient({ from: '#000000', to: '#ffffff', backgroundSize: '50% 50%' }).toStyle()

    assert.equal(style.backgroundSize, '200% 200%, 200% 200%, 50% 50%')
})

test('patterns and shadows preserve mesh size alignment', () => {
    const style = new Builder()
        .glow()
        .grid({ backgroundSize: '40px 40px' })
        .meshGradient(mesh())
        .linearGradient({ from: '#000000', to: '#ffffff' })
        .toStyle()

    assert.equal(style.backgroundSize, '40px 40px, 200% 200%, 200% 200%, auto')
})

test('shimmer expands unsized gradients while preserving pattern and mesh sizes', () => {
    const style = new Builder()
        .grid({ backgroundSize: '40px 40px' })
        .meshGradient(mesh())
        .linearGradient({ from: '#000000', to: '#ffffff' })
        .shimmer()
        .toStyle()

    assert.equal(style.backgroundSize, '40px 40px, 200% 200%, 200% 200%, 200% 100%')
})

test('a shadow alone does not add a background size', () => {
    assert.equal(new Builder().glow().toStyle().backgroundSize, undefined)
})
