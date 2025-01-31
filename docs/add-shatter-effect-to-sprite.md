

  # Shatter Effect

The `addShatterEffect` function allows you to create a dynamic shatter animation for your sprite. This effect simulates breaking or shattering the sprite into multiple pieces, which can be useful for destruction animations, transitions, or special effects in games.

## Usage

```javascript
const result = await sprite.addShatterEffect(description, shatterOptions, options);
```

### Parameters

1. `description` (string): A text description of the sprite you want to generate and apply the shatter effect to.
2. `shatterOptions` (object, optional): Customization options for the shatter effect.
3. `options` (object, optional): General options for sprite generation.

### Shatter Options

The `shatterOptions` object can include the following properties:

- `pieces` (number, default: 12): The number of pieces the sprite will shatter into.
- `spread` (number, default: 100): How far the shattered pieces will spread from the original position.
- `frames` (number, default: 15): The number of animation frames to generate for the shatter effect.
- `pattern` (string, default: 'radial'): The pattern for breaking the sprite. Options are 'radial' or 'grid'.

### Return Value

The function returns an object with the following properties:

- `original` (string): Base64-encoded string of the original sprite image.
- `shatterFrames` (array): An array of Base64-encoded strings representing each frame of the shatter animation.
- `settings` (object): The settings used to generate the effect, including pieces, spread, frames, and pattern.

## Example

```javascript
const shatterResult = await sprite.addShatterEffect('red crystal', {
  pieces: 20,
  spread: 150,
  frames: 20,
  pattern: 'grid'
});

console.log(shatterResult.original); // Base64 string of the original sprite
console.log(shatterResult.shatterFrames.length); // Number of animation frames
console.log(shatterResult.settings); // Applied shatter effect settings
```

## Tips for Using Shatter Effect

1. Adjust the `pieces` value to control the granularity of the shatter effect. More pieces create a more detailed break but may increase processing time.

2. Use a higher `spread` value for a more explosive effect, or a lower value for a subtle crumble.

3. Increase the `frames` count for a smoother animation, especially when using a large `spread` value.

4. Experiment with both 'radial' and 'grid' patterns to see which works best for your specific sprite and desired effect.

5. For best results, use sprites with clear, distinct shapes or objects that make sense to shatter (e.g., crystals, rocks, or solid objects).

6. Consider using the shatter effect in combination with other effects like particle systems or sound effects to enhance the overall impact of the animation in your game or application.

  