namespace SpriteKind {
    export const myselfsprite = SpriteKind.create()
}
/**
 * If a tile/Sprite is on the left or bottom of the Tile map, Make sure it is flipped so that it is shown properly. This map has arrows for reference
 */
tiles.setCurrentTilemap(tilemap`TEST`)
Render.setViewMode(ViewMode.raycastingView)
let mySprite = Render.getRenderSpriteVariable()
