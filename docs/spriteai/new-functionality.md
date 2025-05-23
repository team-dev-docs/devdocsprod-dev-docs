# 🎮 Exciting New SpriteAI Functions! 🚀

Get ready to level up your game development with these spicy new additions to the SpriteAI SDK! 🌶️🔥

## 🌳 generateEnvironmentSprites: Create Epic Game Worlds! 🏞️

```javascript
async function generateEnvironmentSprites(description, options = {})
```

Transform your imagination into stunning environment tilesets with this magical function! 🧙‍♂️✨

### 🎨 Options to Customize Your World:

- 🧱 `elements`: Number of unique tiles (default: 4)
- 📏 `size`: Canvas size (default: '1024x1024')
- 🖌️ `style`: Art style (default: 'pixel-art')
- 📍 `padding`: Space between tiles (default: 1)
- 🏰 `theme`: Set the mood (default: 'fantasy')

### 🚀 Example: Craft a Mystical Forest!

```javascript
const forestTileset = await generateEnvironmentSprites('enchanted fairy forest', {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
});
console.log('Forest tileset created:', forestTileset.tileset);
```

## 🗡️ generateItemSprites: Equip Your Heroes! 🛡️

```javascript
async function generateItemSprites(description, options = {})
```

Forge legendary items and gear with this powerful function! ⚔️🛠️

### 🎭 Options to Customize Your Loot:

- 🔢 `itemCount`: Number of items to generate (default: 4)
- 📏 `size`: Canvas size (default: '1024x1024')
- 🖌️ `style`: Art style (default: 'pixel-art')
- 📍 `padding`: Space between items (default: 1)
- 🏷️ `itemType`: Category of items (default: 'equipment')
- 🎨 `background`: Background color (default: 'white')

### 🚀 Example: Craft Medieval Weaponry!

```javascript
const weaponSheet = await generateItemSprites('legendary medieval weapons', {
  itemCount: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  itemType: 'weapon',
  background: 'transparent',
  save: true
});
console.log('Weapon sheet forged:', weaponSheet.itemSheet);
```

## 🕺 fetchAvailableAnimationStates: Unleash the Moves! 💃

```javascript
async function fetchAvailableAnimationStates()
```

Discover all the groovy animation states your characters can bust out! 🕴️🎵

### 🚀 Example: Get Those Funky Moves!

```javascript
const animationMoves = await fetchAvailableAnimationStates();
console.log('Time to dance with these moves:', animationMoves);
```

## 🎨 fetchAvailableSpriteStyles: Style It Up! 🖌️

```javascript
async function fetchAvailableSpriteStyles()
```

Explore the artistic realms available for your sprite creations! 🖼️🌈

### 🚀 Example: Discover Your Art Style!

```javascript
const artStyles = await fetchAvailableSpriteStyles();
console.log('Choose your artistic weapon:', artStyles);
```

## 🎉 Conclusion: Let's Make Some Game Magic! 🧙‍♂️

With these new functions, you're all set to create breathtaking environments, epic items, and stylish characters! Remember, the only limit is your imagination (and maybe your API quota 😉). Now go forth and create some legendary games! 🏆🎮

Happy coding, game dev rockstars! 🤘😎