# Working with Spritesheets

This guide will help you understand how to work with the generated spritesheets, including interpreting the metadata, extracting individual frames, and integrating the spritesheets into game engines or animation systems.

## Understanding the Metadata

When you generate a spritesheet using the `generateCharacterSpritesheet` function, you receive metadata along with the spritesheet image. This metadata contains crucial information about the spritesheet structure:

```javascript
metadata: {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  totalFrames: 24,
  dimensions: {
    width: 1024,
    height: 1024
  },
  frameData: {
    idle: { row: 0, frames: 6, startFrame: 0, endFrame: 5 },
    walk: { row: 1, frames: 6, startFrame: 6, endFrame: 11 },
    run: { row: 2, frames: 6, startFrame: 12, endFrame: 17 },
    attack: { row: 3, frames: 6, startFrame: 18, endFrame: 23 }
  }
}
```

* `states`: An array of animation states in the spritesheet.

* `framesPerState`: The number of frames for each animation state.

* `totalFrames`: The total number of frames in the spritesheet.

* `dimensions`: The width and height of the entire spritesheet.

* `frameData`: Detailed information about each animation state, including its row in the spritesheet, number of frames, and the start and end frame indices.

## Extracting Individual Frames

To extract individual frames from the spritesheet, you'll need to calculate the position and size of each frame based on the metadata:

1. Calculate frame dimensions:

   ```javascript
   const frameWidth = metadata.dimensions.width / metadata.framesPerState;
   const frameHeight = metadata.dimensions.height / metadata.states.length;
   ```

2. Extract a specific frame:

   ```javascript
   function extractFrame(spritesheet, state, frameIndex) {
     const stateData = metadata.frameData[state];
     const x = frameIndex * frameWidth;
     const y = stateData.row * frameHeight;
     
     return spritesheet.crop(x, y, frameWidth, frameHeight);
   }
   ```

## Integrating into Game Engines or Animation Systems

To integrate the spritesheet into your game engine or animation system:

1. Load the spritesheet image into your engine.

2. Create animation clips for each state:

   ```javascript
   function createAnimationClip(state) {
     const stateData = metadata.frameData[state];
     return {
       name: state,
       startFrame: stateData.startFrame,
       endFrame: stateData.endFrame,
       frameRate: 10 // Adjust as needed
     };
   }

   const animationClips = metadata.states.map(createAnimationClip);
   ```

3. Set up your animation controller to use these clips:

   ```javascript
   const animator = new Animator(spritesheet, animationClips);
   animator.play('idle'); // Start with idle animation
   ```

4. Update the animation in your game loop:

   ```javascript
   function update(deltaTime) {
     animator.update(deltaTime);
   }
   ```

## Tips for Working with Spritesheets

* Keep the spritesheet and its metadata together in your project.

* Use the `frameData` to easily switch between animation states.

* If you need to modify the spritesheet (e.g., change colors), make sure to preserve the original structure.

* When scaling the spritesheet, maintain the aspect ratio to avoid distortion.

By following these guidelines, you can effectively work with the generated spritesheets in your game development projects.
