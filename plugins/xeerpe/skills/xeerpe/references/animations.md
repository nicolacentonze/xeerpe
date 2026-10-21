# xeerpe animations

Load the keyframes once in the app entry, or nothing moves (and nothing errors):

```ts
import 'xeerpe/animations.css'
```

An animation adds an `animation` CSS property (plus helper CSS variables for scoped ones). It never adds a background layer. Keyframes are prefixed `xeerpe-`.

Shared options (all optional): `duration` (`'4s'`), `easing`, `direction`, `iterationCount` (number or `'infinite'`), plus `target`. `direction` only matters for `pulse` and `aurora`. Values other than `target` are inserted into CSS unvalidated.

| Animation | Changes                       | Defaults (duration, easing, extras)   | `target`                   |
| --------- | ----------------------------- | ------------------------------------- | -------------------------- |
| `pulse`   | element opacity (1 to 0.7)    | 4s, ease-in-out, alternate, infinite  | no                         |
| `rotate`  | element transform, full turn  | 12s, linear, infinite                 | no                         |
| `breathe` | background size               | 12s, ease-in-out, infinite            | gradients / all            |
| `aurora`  | background size (gentle zoom) | 12s, ease-in-out, alternate, infinite | gradients / all            |
| `shimmer` | background position (sweep)   | 3s, linear, infinite                  | gradients / patterns / all |
| `liquid`  | background position + hue     | 8s, ease-in-out, infinite             | gradients / patterns / all |
| `plasma`  | element filter (hue cycle)    | 6s, linear, infinite                  | no                         |
| `float`   | element transform (bob)       | 6s, ease-in-out, infinite             | no                         |
| `drift`   | background position (wander)  | 10s, ease-in-out, infinite            | gradients / patterns / all |

Guidance:

- `target` defaults to `'gradients'`: gradients move, patterns and effects (grain, vignette) stay put. Use `'all'` to move everything; `'patterns'` moves only patterns over a still gradient. Anything else throws.
- With the default target, grain/vignette/glow stay still while the gradient moves; set `target: 'all'` only if the effects should move too. For a "slow" animation, raise `duration` (defaults are listed above).
- `pulse`, `rotate`, `float`, `plasma` act on the whole element, text included. `rotate` suits square or round elements.
- Sliding animations (`shimmer`, `drift`) enlarge unsized gradients automatically; don't set `backgroundSize` on the gradient you animate.
- Generic form: `.animation('pulse', {})` (options required).
- Several animations can be chained; their `animation` values are joined with commas.
- Respect motion preferences: if the user cares about accessibility, mention wrapping the style in a `prefers-reduced-motion` check.
