// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "TEST":
            case "level1":return tiles.createTilemap(hex`1000100001010102010101010101010101010101010303030503030303030303030303010403030505030303030303030303030101030505050505050505030303030301010303050503030303030303030303010103030305030303030303030303030101030303030303030303030303030301010303030303030303030303030303010103030503030303030303030303030101030305030303030303030303030301010303050303030303030303030303010103030503030303030303030303030101050505050503030303030303030301010305050503030303030303030303010103030503030303030303030303030201010401010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1300110009090b090b090b090b090b090b0a0a0a0c0c0c0b04030303030303030303030303030307080c0902010101010101010101010101010107080c0b02010101010101010101010101010107080c0902010101010101010101010101010107080c0b02010101010101010101010101010107080c0902010101010101010101010101010107080c0b02010101010101010101010101010107080c090e010101010101010101010101010107080c0b02010101010101010101010101011211080c0902010101010101011001010101010107080c0b02010101010101010d01010101010107080c0902010101010101010f01010101010107080c0b02010101010101010101010101010107080c0902010101010101010101010101010107080c0b06050505050505050505050505050507080c0b090b090b090b090b090b090b0a0a0a0c0c0c`, img`
2222222222222222222
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2.................2
2222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath8,sprites.castle.tilePath7,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile9,myTiles.tile7,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile13":
            case "tile15":return tile15;
            case "myTile14":
            case "tile16":return tile16;
            case "myTile15":
            case "tile17":return tile17;
            case "myTile16":
            case "tile18":return tile18;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
