let i = image.create(80, 40)
images.print(
i,
"hello",
0,
0,
10
)
images.printCenter(
i,
"world",
20,
6
)
let mySprite = sprites.create(i, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
mySprite.vx = Math.randomRange(-200,200)
mySprite.vy = Math.randomRange(-200,200)
