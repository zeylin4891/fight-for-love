namespace SpriteKind {
    export const 裝飾 = SpriteKind.create()
    export const 金幣 = SpriteKind.create()
    export const 樹 = SpriteKind.create()
    export const 花 = SpriteKind.create()
    export const 草 = SpriteKind.create()
    export const 公主 = SpriteKind.create()
    export const 魔王 = SpriteKind.create()
    export const 爸爸 = SpriteKind.create()
    export const 媽媽 = SpriteKind.create()
    export const 路人 = SpriteKind.create()
    export const 動畫主角 = SpriteKind.create()
    export const pony = SpriteKind.create()
    export const 企鵝 = SpriteKind.create()
    export const 出發小隊 = SpriteKind.create()
    export const 箭 = SpriteKind.create()
    export const 回家小隊 = SpriteKind.create()
    export const 薑餅人 = SpriteKind.create()
    export const 大地圖主角 = SpriteKind.create()
    export const 主角 = SpriteKind.create()
}
function 第五關卡 () {
    if (主遊戲程式 == 0) {
        tiles.setTilemap(tilemap`層級22`)
        大地圖主角繳 = sprites.create(assets.image`主角2`, SpriteKind.大地圖主角)
        scene.cameraFollowSprite(大地圖主角繳)
        animation.runImageAnimation(
        大地圖主角繳,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        for (let value of sprites.allOfKind(SpriteKind.主角)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
            value.destroy()
        }
        大地圖主角繳.setPosition(136, 214)
        controller.moveSprite(大地圖主角繳, 50, 50)
    } else if (主遊戲程式 == 1) {
        主角 = sprites.create(assets.image`主角0`, SpriteKind.主角)
        企鵝 = sprites.create(assets.image`myImage6`, SpriteKind.企鵝)
        企鵝.follow(主角)
        controller.moveSprite(主角, 90, 0)
        for (let value of sprites.allOfKind(SpriteKind.大地圖主角)) {
            value.destroy()
        }
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("冥間地獄5-1", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage14`)
        tiles.setTilemap(tilemap`第五大關之一`)
        scene.cameraFollowSprite(主角)
    } else if (主遊戲程式 == 2) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("冥間地獄5-2", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage14`)
        tiles.setTilemap(tilemap`第五大關之二`)
        scene.cameraFollowSprite(主角)
    } else if (主遊戲程式 == 3) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("冥間地獄5-3", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage14`)
        tiles.setTilemap(tilemap`第五大關之三`)
        scene.cameraFollowSprite(主角)
    } else if (主遊戲程式 == 4) {
        game.over(true, effects.confetti)
    } else {
    	
    }
    tiles.placeOnRandomTile(主角, assets.tile`myTile6`)
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(企鵝, assets.tile`tile71`)
    for (let value of tiles.getTilesByType(assets.tile`tile71`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    主角.ay = 410
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        金幣 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.金幣)
        tiles.placeOnTile(金幣, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        金幣,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        70,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
        火 = sprites.create(assets.image`myImage9`, SpriteKind.Enemy)
        tiles.placeOnTile(火, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        火,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        火.startEffect(effects.fire)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
        蘑菇 = sprites.create(assets.image`myImage22`, SpriteKind.裝飾)
        tiles.placeOnTile(蘑菇, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        怪物 = sprites.create(assets.image`myImage10`, SpriteKind.Enemy)
        tiles.placeOnTile(怪物, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile114`)) {
        異形怪 = sprites.create(assets.image`myImage4`, SpriteKind.Enemy)
        tiles.placeOnTile(異形怪, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        異形怪,
        "c 60 0 -50 0 0 0",
        2000,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.大地圖主角, assets.tile`myTile59`, function (sprite, location) {
    主遊戲程式 += 1
    第五關卡()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (主角.vy == 0) {
        主角.vy = -180
    }
})
sprites.onOverlap(SpriteKind.公主, SpriteKind.魔王, function (sprite, otherSprite) {
    公主.follow(魔王)
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile118`, function (sprite, location) {
    動畫程式 = 0
    結尾動畫()
})
function 開場動畫 () {
    scene.setBackgroundImage(assets.image`myImage46`)
    effects.confetti.startScreenEffect(1000)
    主遊戲程式 = 0
    game.setDialogTextColor(10)
    game.splash("很久很久以前...")
    game.splash("在中古世紀西歐時代，有著伊洛凡王國跟聖斯米雅王國兩大強國，")
    game.splash("數百年來都與他們國家一直被一個名叫阿薩布魯大魔王侵擾，")
    game.splash("接下來會發生什麼事呢?讓我們繼續看下去。")
    game.splash("動畫播出同時不要按任何按鍵")
    game.splash("除了互動鍵")
    路人 = sprites.create(img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    路人,
    [img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `],
    200,
    true
    )
    路人.setPosition(139, 110)
    路人.setVelocity(-24, 0)
    公主 = sprites.create(assets.image`myImage0`, SpriteKind.公主)
    animation.runImageAnimation(
    公主,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f c c f . . . 
        . . . . . f f f 5 c 5 5 c f . . 
        . . . . f b c b c 5 5 5 5 f . . 
        . . . f b c c c c c b c b f . . 
        . . . f c c c c c c c c c f f . 
        . . . f c c c f f d c c c c f . 
        . . . f b b b f b f d d c c f . 
        . . . f b b b b 1 f d d c f . . 
        . . f f b b b f d d d d f . . . 
        . . f b b b b f f b b b f . . . 
        . . . f b b f d f 3 3 3 f . . . 
        . . . . f b f d f 3 3 3 f . . . 
        . . . . . f b f b 3 b 3 b f . . 
        . . . . . f f 1 3 1 3 1 f f . . 
        . . . . . . f f b b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f c c f . . . 
        . . . . . f f f 5 c 5 5 c f . . 
        . . . . f b c b c 5 5 5 5 f . . 
        . . . f b c c c c c b c b f . . 
        . . . f c c c c c c c c c f f . 
        . . . f c c c f f d c c c c f . 
        . . . f b b b f b f d d c c f . 
        . . . f b b b b 1 f d d c f . . 
        . . f f b b b f d d d d f . . . 
        . . f b b b b f f b b b f . . . 
        . . . f b b f d f 3 3 3 f . . . 
        . . . . f b f d f 3 3 3 f f . . 
        . . . . . f b 1 3 1 3 1 b f . . 
        . . . . . f f f b b f f f . . . 
        `],
    500,
    true
    )
    公主.setPosition(6, 107)
    公主.setVelocity(23, 0)
    pause(1000)
    公主.say("先來去逛市集好了", 1500)
    pause(2000)
    魔王 = sprites.create(assets.image`myImage10`, SpriteKind.魔王)
    魔王.setVelocity(0, 55)
    魔王.setPosition(106, 10)
    魔王.say("哈哈!終於找到你了", 1600)
    pause(1800)
    公主.say("啊!啊!啊!救命!!!", 3000)
    if (魔王.y > 95) {
        魔王.setVelocity(0, -55)
    }
    pause(5000)
    game.showLongText("過了一個小時後...", DialogLayout.Bottom)
    公主他爸 = sprites.create(assets.image`myImage`, SpriteKind.爸爸)
    公主他爸.setPosition(73, 67)
    公主他爸.setVelocity(0, 35)
    公主他媽 = sprites.create(assets.image`myImage1`, SpriteKind.媽媽)
    公主他媽.setPosition(87, 67)
    公主他媽.setVelocity(0, 35)
    pause(1000)
    if (公主他媽.y > 85) {
        公主他媽.setVelocity(0, 0)
    }
    if (公主他爸.y > 85) {
        公主他爸.setVelocity(0, 0)
    }
    scene.cameraShake(2, 500)
    pause(700)
    公主他媽.say("我的寶貝女兒呢!", 2000)
    pause(2200)
    公主他爸.say("勇士你能幫我拯救公主嗎?", 3000)
    pause(3200)
    game.splash("是否願意拯救公主")
    for (let value of sprites.allOfKind(SpriteKind.爸爸)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.媽媽)) {
        value.destroy()
    }
    scene.setBackgroundImage(assets.image`動畫場景2`)
    動畫主角 = sprites.create(assets.image`主角1`, SpriteKind.動畫主角)
    動畫主角.setPosition(8, 92)
    動畫主角.setVelocity(25, 0)
    animation.runImageAnimation(
    動畫主角,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f . . . f f f f f . . . 
        . . f d 1 f . f b 1 1 1 d f . . 
        . . . f d d f 1 1 b b 1 d f . . 
        . . . . f 1 1 d 1 1 1 1 1 b f . 
        . . . . . f 1 1 1 c c c c 1 f . 
        . . . . . f 1 4 4 c 1 f 4 c f . 
        . . . . . f c 4 d d 1 f d f . . 
        . . . . f 2 f c c d d d d f . . 
        . . . f 2 e f a c 4 4 c c f . . 
        . . f 2 2 4 f 8 f b 8 8 f . . . 
        . f 2 2 4 f a f 6 f b a f . . . 
        . 2 2 2 e f a a 6 6 f c f . . . 
        . f 2 4 f . f a 8 f c f f . . . 
        . . e f f . f f f f f f . . . . 
        . . . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f . . . f f f f f . . . 
        . . f d 1 f . f b 1 1 1 d f . . 
        . . . f d d f 1 1 b b 1 d f . . 
        . . . . f 1 1 d 1 1 1 1 1 b f . 
        . . . . . f 1 1 1 c c c c 1 f . 
        . . . . . f 1 4 4 c 1 f 4 c f . 
        . . . . . f c 4 d d 1 f d f . . 
        . . . . f 2 f c c d d d d f . . 
        . . . f 2 e f a c 4 4 c c f . . 
        . . f 2 2 4 f 8 f b 8 8 f . . . 
        . f 2 2 4 f a f 6 f b a f . . . 
        . 2 2 2 e f a a 6 6 f c f . . . 
        . f 2 4 f . f a 8 f c f f . . . 
        . . e f f . f f f f f f . . . . 
        . . . . . . . f . . f f . . . . 
        `],
    400,
    true
    )
    pause(2380)
    animation.stopAnimation(animation.AnimationTypes.All, 動畫主角)
    if (動畫主角.x > 65) {
        動畫主角.x = 65
        動畫主角.setVelocity(0, 0)
    }
    動畫主角.say("夥伴快出來!!", 2000)
    pause(2200)
    企鵝 = sprites.create(assets.image`myImage2`, SpriteKind.企鵝)
    企鵝.setPosition(78, 61)
    企鵝.setVelocity(0, 13)
    animation.runImageAnimation(
    企鵝,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 1 1 1 1 1 f . . . . 
        . . . . f 1 f 1 1 1 f 1 f . . . 
        . . . . f 1 f 1 4 1 f 1 f . . . 
        . . . . f c 1 4 4 4 1 c f . . . 
        . . . . f c 1 1 1 1 1 c f . . . 
        . . . . f c c 1 1 1 c c f . . . 
        . . . . . f c 1 1 1 c f . . . . 
        . . . . . 4 4 f f f 4 4 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 1 1 1 1 1 f . . . . 
        . . . . f 1 f 1 1 1 f 1 f . . . 
        . . . . f 1 f 1 4 1 f 1 f . . . 
        . . . . f c 1 4 4 4 1 c f . . . 
        . . . . f c 1 1 1 1 1 c f . . . 
        . . . . f c c 1 1 1 c c f . . . 
        . . . . . f c 1 1 1 c f . . . . 
        . . . . . 4 4 f f f 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    pony = sprites.create(assets.image`myImage7`, SpriteKind.pony)
    pony.setPosition(148, 90)
    pony.setVelocity(-34, 0)
    animation.runImageAnimation(
    pony,
    [img`
        ........................
        .........ff.............
        ........f55f............
        .....fff5555fff.........
        ff..f4444555577f........
        f2ff24444455ff77f.......
        f22f224fffff11f7f.......
        .f2f22f1111111f7f.......
        .ff22f1111111f77f.......
        ..f22f1ff111f77f........
        ..f2f11ff1111ffaf..f....
        ...f111ff1111faafff8f...
        ...f11111111faaff422f...
        ...f111111111ff55442f...
        ....f1111111ff11554f....
        .....fffffff1ffff5f.....
        .......f111111111f.ff...
        .......f1111111111f22f..
        ......f11111111111f44f..
        ......f111111111111f7ff.
        .....f1f11fffff1111f7f..
        .....f4f77f...f7f44ff...
        .....f2f55f...f5f22f....
        ......ffff.....ffff.....
        `,img`
        ........................
        .........ff.............
        ........f55f............
        .....fff5555fff.........
        ff..f4444555577f........
        f2ff24444455ff77f.......
        f22f224fffff11f7f.......
        .f2f22f1111111f7f.......
        .ff22f1111111f77f.......
        ..f22f1ff111f77f........
        ..f2f11ff1111ffaf..f....
        ...f111ff1111faafff8f...
        ...f11111111faaff422f...
        ...f111111111ff55442f...
        ....f1111111ff11554f....
        .....fffffff1ffff5f.....
        .......f111111111f.ff...
        .......f1111111111f22f..
        ......f11111111111f44f..
        ......f111111111111f7ff.
        .....f111fffff111f1f7f..
        .....f77f4f..f44f7fff...
        .....f55f2f..f22f5f.....
        ......fffff...fffff.....
        `],
    400,
    true
    )
    pause(1620)
    animation.stopAnimation(animation.AnimationTypes.All, pony)
    if (企鵝.y > 78) {
        企鵝.setVelocity(0, 0)
    }
    if (pony.x < 95) {
        pony.x = 95
        pony.setVelocity(0, 0)
    }
    企鵝.say("王子找我有什麼事嗎?", 2000)
    pause(2300)
    動畫主角.say("公主被抓走了我們要去救她!!", 2000)
    pause(2300)
    pony.say("我可以載你們去冒險!!", 2300)
    pause(2000)
    scene.setBackgroundImage(assets.image`myImage51`)
    for (let value of sprites.allOfKind(SpriteKind.pony)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.動畫主角)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
        value.destroy()
    }
    出發小隊 = sprites.create(assets.image`myImage42`, SpriteKind.出發小隊)
    出發小隊.setVelocity(50, 0)
    出發小隊.setPosition(5, 49)
    animation.runImageAnimation(
    出發小隊,
    assets.animation`myAnim`,
    300,
    true
    )
    pause(500)
    出發小隊.say("衝RRRRRR!")
    pause(4000)
    for (let value of sprites.allOfKind(SpriteKind.出發小隊)) {
        value.destroy()
    }
}
function 結尾動畫2 () {
	
}
function 第四關卡 () {
    if (主遊戲程式 == 0) {
        tiles.setTilemap(tilemap`層級22`)
        大地圖主角繳 = sprites.create(assets.image`主角2`, SpriteKind.大地圖主角)
        scene.cameraFollowSprite(大地圖主角繳)
        animation.runImageAnimation(
        大地圖主角繳,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        for (let value of sprites.allOfKind(SpriteKind.主角)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
            value.destroy()
        }
        大地圖主角繳.setPosition(231, 165)
        controller.moveSprite(大地圖主角繳, 50, 50)
    } else if (主遊戲程式 == 1) {
        主角 = sprites.create(assets.image`主角0`, SpriteKind.主角)
        企鵝 = sprites.create(assets.image`myImage6`, SpriteKind.企鵝)
        企鵝.follow(主角)
        controller.moveSprite(主角, 90, 0)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("深海洞窟4-1", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage18`)
        tiles.setTilemap(tilemap`第四大關之一`)
        scene.cameraFollowSprite(主角)
        for (let value of sprites.allOfKind(SpriteKind.大地圖主角)) {
            value.destroy()
        }
    } else if (主遊戲程式 == 2) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("深海洞窟4-2", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage18`)
        tiles.setTilemap(tilemap`第四大關之二`)
        scene.cameraFollowSprite(主角)
    } else if (主遊戲程式 == 3) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("深海洞窟4-3", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage18`)
        tiles.setTilemap(tilemap`第四大關之三`)
        scene.cameraFollowSprite(主角)
    }
    tiles.placeOnRandomTile(主角, assets.tile`myTile6`)
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(企鵝, assets.tile`tile71`)
    for (let value of tiles.getTilesByType(assets.tile`tile71`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    主角.ay = 410
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        金幣 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.金幣)
        tiles.placeOnTile(金幣, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        金幣,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        70,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile107`)) {
        小鯊鯊 = sprites.create(assets.image`myImage70`, SpriteKind.Enemy)
        tiles.placeOnTile(小鯊鯊, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        小鯊鯊,
        [img`
            .............ccfff..............
            ...........ccddbcf..............
            ..........ccddbbf...............
            ..........fccbbcf...............
            .....fffffccccccff.........ccc..
            ...ffbbbbbbbcbbbbcfff....ccbbc..
            ..fbbbbbbbbcbcbbbbcccff.cdbbc...
            ffbbbbbbffbbcbcbbbcccccfcdbbf...
            fbcbbb11ff1bcbbbbbcccccffbbf....
            fbbb11111111bbbbbcccccccbbcf....
            .fb11133cc11bbbbcccccccccccf....
            ..fccc31c111bbbcccccbdbffbbcf...
            ...fc13c111cbbbfcddddcc..fbbf...
            ....fccc111fbdbbccdcc.....fbbf..
            ........ccccfcdbbcc........fff..
            .............fffff..............
            `,img`
            .............ccfff..............
            ............cddbbf..............
            ...........cddbbf...............
            ..........fccbbcf............ccc
            ....ffffffccccccff.........ccbbc
            ..ffbbbbbbbbbbbbbcfff.....cdbbc.
            ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            fbcbbbbbffbbcbcbbbcccccfffdbbf..
            fbbb1111ff1bcbcbbbcccccccbbbcf..
            .fb11111111bbbbbbcccccccccbccf..
            ..fccc33cc11bbbbccccccccfffbbcf.
            ...fc131c111bbbcccccbdbc...fbbf.
            ....f33c111cbbbfdddddcc.....fbbf
            .....ff1111fbdbbfddcc........fff
            .......cccccfbdbbfc.............
            .............fffff..............
            `,img`
            ..............cfff..............
            ............ccddbf..............
            ...........cbddbff.........ccc..
            ..........fccbbcf.........cbbc..
            ...fffffffccccccff.......cdbc...
            .ffcbbbbbbbbbbbbbcfff....cdbf...
            fcbbbbbbbbbcbbbbbbcccff.cdbf....
            fbcbbbbffbbbcbcbbbcccccffdcf....
            fbb1111ffbbbcbcbbbccccccbbcf....
            .fb11111111bbcbbbccccccccbbcf...
            ..fccc33cb11bbbbcccccccfffbbf...
            ...fc131c111bbbcccccbdbc..fbbf..
            ....f33c111cbbccdddddbc....fff..
            .....ff1111fdbbccddbcc..........
            .......cccccfdbbbfcc............
            .............fffff..............
            `,img`
            .............ccfff..............
            ............cddbbf..............
            ...........cddbbf...............
            ..........fccbbcf............ccc
            ....ffffffccccccff.........ccbbc
            ..ffbbbbbbbbbbbbbcfff.....cdbbc.
            ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            fbcbbbbbffbbcbcbbbcccccfffdbbf..
            fbbb1111ff1bcbcbbbcccccccbbbcf..
            .fb11111111bbbbbbcccccccccbccf..
            ..fccc33cc11bbbbccccccccfffbbcf.
            ...fc131c111bbbcccccbdbc...fbbf.
            ....f33c111cbbbfdddddcc.....fbbf
            .....ff1111fbdbbfddcc........fff
            .......cccccfbdbbfc.............
            .............fffff..............
            `],
        500,
        true
        )
        animation.runMovementAnimation(
        小鯊鯊,
        "c 60 0 -50 0 0 0",
        3000,
        true
        )
        if (小鯊鯊.vx < 0) {
            小鯊鯊.image.flipX()
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile109`)) {
        海草1 = sprites.create(assets.image`myImage28`, SpriteKind.裝飾)
        tiles.placeOnTile(海草1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile110`)) {
        海草2 = sprites.create(assets.image`myImage27`, SpriteKind.裝飾)
        tiles.placeOnTile(海草2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.薑餅人, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile69`, function (sprite, location) {
    主遊戲程式 = 0
    for (let value of sprites.allOfKind(SpriteKind.主角)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
        value.destroy()
    }
    大地圖主角繳.setPosition(73, 66)
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    第三關卡()
})
scene.onOverlapTile(SpriteKind.大地圖主角, assets.tile`myTile61`, function (sprite, location) {
    主遊戲程式 += 1
    第四關卡()
})
scene.onOverlapTile(SpriteKind.大地圖主角, assets.tile`myTile116`, function (sprite, location) {
    動畫程式 += 1
    結尾動畫()
})
function 結尾動畫 () {
    if (動畫程式 == 0) {
        scene.setBackgroundImage(assets.image`myImage51`)
        tiles.setTilemap(tilemap`層級30`)
        回家小隊第一組 = sprites.create(assets.image`myImage57`, SpriteKind.回家小隊)
        回家小隊第二組 = sprites.create(assets.image`myImage58`, SpriteKind.回家小隊)
        回家小隊第一組.setVelocity(-18, 0)
        回家小隊第一組.setPosition(134, 99)
        回家小隊第二組.setVelocity(-18, 0)
        回家小隊第二組.setPosition(159, 53)
        animation.runImageAnimation(
        回家小隊第一組,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............fff.ff..............
            ...........f555fccffff..........
            ........fff555fc55c5fff.........
            ...ff..f444455f5555cbcbf........
            ...f2ff2444445fbcbcccccbf.......
            ...f22f224fffffcccccccccf.......
            ....f2f22f111fccccdffcccf.......
            ....ff22f1111fccddfbfbbbf.......
            .....f22f1ff11fcddf1bbbbf.......
            .....f2f11ff11ffddddfbbbff......
            ......f111ff11ffbbbffbbbbf......
            ......f11111111f333fdfbbf.......
            ......f11111111f333fdfbf........
            .......f111111fb3b3bfbf.........
            ........ffffffff13131ff.........
            ..........f11111ddbbfffff.......
            ..........f11111dd111f22f.......
            .........f11111111111f44f.......
            .........f111111111111f7ff......
            ........f1f11fffff1111f7f.......
            ........f4f77f...f7f44ff........
            ........f2f55f...f5f22f.........
            .........ffff.....ffff..........
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................ff..............
            ............ffffccffff..........
            ...........f555c55c5fff.........
            ........fff555f5555cbcbf........
            ...ff..f444455fbcbcccccbf.......
            ...f2ff2444445fcccccccccf.......
            ...f22f224fffffcccdffcccf.......
            ....f2f22f111fccddfbfbbbf.......
            ....ff22f1111fccddf1bbbbf.......
            .....f22f1ff11ffddddfbbbf.......
            .....f2f11ff11ffbbbffbbbbf......
            ......f111ff11ff333fdfbbff......
            ......f11111111f333fdfbf........
            ......f11111111b3b3bfbf.........
            .......f111111ff13131ff.........
            ........fffffff1ddbbf...........
            ..........f11111dd11fffff.......
            ..........f1111111111f22f.......
            .........f11111111111f44f.......
            .........f111111111111f7ff......
            ........f111fffff111f1f7f.......
            ........f77f4f..f44f7fff........
            ........f55f2f..f22f5ff.........
            .........fffff...fffff..........
            `],
        500,
        true
        )
        animation.runImageAnimation(
        回家小隊第二組,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..fffff...ff............
            .fd111bf.f1df...........
            .fd1bb11fddf............
            fb11111d11f.............
            f1cccc111f..............
            fc4f1c441f..............
            .fdf1dd4cf........fff...
            .fddddccf2f.....ff11ff..
            .fcc44cafe2f...f411f1f..
            ..f88bf8f422f.f4441f1cf.
            ..fabf6faf422f.ff1111cf.
            ..fcf66aafe222..f111fcf.
            ..ffcf8af.f42f..f11ffcf.
            ...ffffff.ffe...fff4ccf.
            ....fff..........f444f..
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..fffff...ff............
            .fd111bf.f1df...........
            .fd1bb11fddf............
            fb11111d11f.............
            f1cccc111f........fff...
            fc4f1c441f......ff11ff..
            .fdf1dd4cf.....f411f1f..
            .fddddccf2f...f4441f1cf.
            .fcc44cafe2f...ff1111cf.
            ..f88bf8f422f...f111fcf.
            ..fabf6faf422f..f11ffcf.
            ..fcf66aafe222..fff4ccf.
            ..ffcf8af.f42f...f444f..
            ...ffffff.ffe...........
            ....f.ff................
            `],
        500,
        true
        )
        game.showLongText("公主:謝謝你帶我回家", DialogLayout.Bottom)
        game.showLongText("王子:帶公主回來只是小事", DialogLayout.Bottom)
        game.showLongText("公主:等等就快到家了!", DialogLayout.Bottom)
        for (let value of sprites.allOfKind(SpriteKind.回家小隊)) {
            value.destroy()
        }
        scene.setBackgroundImage(assets.image`myImage46`)
        effects.confetti.startScreenEffect(5000)
        圍觀群眾第一組 = sprites.create(img`
            .....cccfff.......fffff............cc.......................
            ...ff555555ff...fffffffff..........c3c......fff.fffff.......
            ..f555555555f...ffffffcfff......ccc333cc...fffffccccff......
            .c55555555555f.ffffcfffcff....ccbc3333cccc.ffffbccccccf.....
            .c5555555db55f.fcffccfffccff.cbb3b3333b3bbcfffc3ccccccf.....
            f5555555b44d5f.fccffffefffff.cb33bb33bb33bc.f33ccccccccf....
            f55555cc444b5f.fffffffeefff...f333bbbb333c..fffccccc4ccf....
            fb555bcbc44fff.ffeefbfeeff....ff33333333f...ffffccc44eff....
            cbbbbbe1cddff...fe4e1f44f.....ffeebfeeef....ff44fbf44eff....
            cbbbbf4ddddf....fffe4444f.....fffb1fbbef.....f4d41fddff.....
            .cbb4eee444f.....feeeeeff......ffbbbbbbf.....fff4ddddf......
            ..ff4dde999f.....e44e777f......eefeeeef.......fee444ef......
            ...fedde999f.....e44e777f......ebbebb3f.......4dde333f......
            ...fbeeb3b33f....feef666f......ebbe3333f......edde333f......
            ...ffb3b3b3ff.....ffffff........ee3333bc......feef666f......
            .....ffbbff........fff...........ffffff........ffffff.......
            `, SpriteKind.路人)
        圍觀群眾第一組.setPosition(0, 107)
        圍觀群眾第一組.setVelocity(18, 0)
        animation.runImageAnimation(
        圍觀群眾第一組,
        assets.animation`myAnim1`,
        500,
        true
        )
        圍觀群眾第一組.say("公主回來了!!!", 2000)
        if (圍觀群眾第一組.x > 42) {
            圍觀群眾第一組.x = 42
            圍觀群眾第一組.setVelocity(0, 0)
        }
        公主他爸 = sprites.create(assets.image`myImage`, SpriteKind.爸爸)
        公主他爸.setPosition(73, 67)
        公主他爸.setVelocity(0, 24)
        公主他媽 = sprites.create(assets.image`myImage1`, SpriteKind.媽媽)
        公主他媽.setPosition(87, 67)
        公主他媽.setVelocity(0, 24)
        公主他媽.say("寶貝女兒終於回來了", 1500)
        if (公主他媽.y > 82) {
            公主他媽.setVelocity(0, 0)
        }
        if (公主他爸.y > 82) {
            公主他爸.setVelocity(0, 0)
        }
        回家小隊第一組 = sprites.create(assets.image`myImage57`, SpriteKind.回家小隊)
        回家小隊第一組.setPosition(160, 97)
        回家小隊第一組.setVelocity(-23, 0)
        animation.runImageAnimation(
        回家小隊第一組,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............fff.ff..............
            ...........f555fccffff..........
            ........fff555fc55c5fff.........
            ...ff..f444455f5555cbcbf........
            ...f2ff2444445fbcbcccccbf.......
            ...f22f224fffffcccccccccf.......
            ....f2f22f111fccccdffcccf.......
            ....ff22f1111fccddfbfbbbf.......
            .....f22f1ff11fcddf1bbbbf.......
            .....f2f11ff11ffddddfbbbff......
            ......f111ff11ffbbbffbbbbf......
            ......f11111111f333fdfbbf.......
            ......f11111111f333fdfbf........
            .......f111111fb3b3bfbf.........
            ........ffffffff13131ff.........
            ..........f11111ddbbfffff.......
            ..........f11111dd111f22f.......
            .........f11111111111f44f.......
            .........f111111111111f7ff......
            ........f1f11fffff1111f7f.......
            ........f4f77f...f7f44ff........
            ........f2f55f...f5f22f.........
            .........ffff.....ffff..........
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................ff..............
            ............ffffccffff..........
            ...........f555c55c5fff.........
            ........fff555f5555cbcbf........
            ...ff..f444455fbcbcccccbf.......
            ...f2ff2444445fcccccccccf.......
            ...f22f224fffffcccdffcccf.......
            ....f2f22f111fccddfbfbbbf.......
            ....ff22f1111fccddf1bbbbf.......
            .....f22f1ff11ffddddfbbbf.......
            .....f2f11ff11ffbbbffbbbbf......
            ......f111ff11ff333fdfbbff......
            ......f11111111f333fdfbf........
            ......f11111111b3b3bfbf.........
            .......f111111ff13131ff.........
            ........fffffff1ddbbf...........
            ..........f11111dd11fffff.......
            ..........f1111111111f22f.......
            .........f11111111111f44f.......
            .........f111111111111f7ff......
            ........f111fffff111f1f7f.......
            ........f77f4f..f44f7fff........
            ........f55f2f..f22f5ff.........
            .........fffff...fffff..........
            `],
        500,
        true
        )
        回家小隊第二組 = sprites.create(assets.image`myImage58`, SpriteKind.回家小隊)
        回家小隊第二組.setPosition(160, 105)
        回家小隊第二組.setVelocity(-23, 0)
        animation.runImageAnimation(
        回家小隊第二組,
        [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..fffff...ff............
            .fd111bf.f1df...........
            .fd1bb11fddf............
            fb11111d11f.............
            f1cccc111f..............
            fc4f1c441f..............
            .fdf1dd4cf........fff...
            .fddddccf2f.....ff11ff..
            .fcc44cafe2f...f411f1f..
            ..f88bf8f422f.f4441f1cf.
            ..fabf6faf422f.ff1111cf.
            ..fcf66aafe222..f111fcf.
            ..ffcf8af.f42f..f11ffcf.
            ...ffffff.ffe...fff4ccf.
            ....fff..........f444f..
            `,img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..fffff...ff............
            .fd111bf.f1df...........
            .fd1bb11fddf............
            fb11111d11f.............
            f1cccc111f........fff...
            fc4f1c441f......ff11ff..
            .fdf1dd4cf.....f411f1f..
            .fddddccf2f...f4441f1cf.
            .fcc44cafe2f...ff1111cf.
            ..f88bf8f422f...f111fcf.
            ..fabf6faf422f..f11ffcf.
            ..fcf66aafe222..fff4ccf.
            ..ffcf8af.f42f...f444f..
            ...ffffff.ffe...........
            ....f.ff................
            `],
        500,
        true
        )
        if (回家小隊第一組.x < 110) {
            回家小隊第一組.setVelocity(0, 0)
            回家小隊第一組.x = 110
        }
        if (回家小隊第二組.x < 110) {
            回家小隊第二組.setVelocity(0, 0)
            回家小隊第二組.x = 110
        }
        animation.stopAnimation(animation.AnimationTypes.All, 回家小隊第一組)
        animation.stopAnimation(animation.AnimationTypes.All, 回家小隊第二組)
        回家小隊第二組.say("我把公主救回來了", 2000)
        回家小隊第一組.say("爸媽!我好想你們", 2000)
        公主他爸.say("我好感動", 1000)
        公主他爸.say("我決定把我的女兒嫁給你", 2000)
    }
}
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile105`, function (sprite, location) {
    主遊戲程式 += 1
    第四關卡()
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile58`, function (sprite, location) {
    主遊戲程式 = 0
    for (let value of sprites.allOfKind(SpriteKind.主角)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    大地圖主角繳.setPosition(73, 66)
    第一關卡()
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile25`, function (sprite, location) {
    主遊戲程式 += 1
    第三關卡()
})
scene.onOverlapTile(SpriteKind.大地圖主角, assets.tile`myTile101`, function (sprite, location) {
    主遊戲程式 += 1
    第三關卡()
})
function 第一關卡 () {
    if (主遊戲程式 == 0) {
        tiles.setTilemap(tilemap`層級22`)
        大地圖主角繳 = sprites.create(assets.image`主角2`, SpriteKind.大地圖主角)
        scene.cameraFollowSprite(大地圖主角繳)
        animation.runImageAnimation(
        大地圖主角繳,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        for (let value of sprites.allOfKind(SpriteKind.主角)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
            value.destroy()
        }
        大地圖主角繳.setPosition(10, 18)
        controller.moveSprite(大地圖主角繳, 50, 50)
    } else if (主遊戲程式 == 1) {
        主角 = sprites.create(assets.image`主角0`, SpriteKind.主角)
        企鵝 = sprites.create(assets.image`myImage6`, SpriteKind.企鵝)
        企鵝.follow(主角)
        controller.moveSprite(主角, 90, 0)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("廣闊原野1-1", DialogLayout.Center)
        game.splash("遊戲玩法(請勿跳過)")
        game.splash("WASD為上下左右鍵")
        game.splash("A為跳躍")
        game.splash("B為攻擊鍵")
        scene.cameraFollowSprite(主角)
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
            11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
            11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
            111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
            111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
            ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
            dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
            dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
            ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
            ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
            ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
            dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
            9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
            999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
            9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
            99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
            999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
            999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
            9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
            9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
            9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
            9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
            9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
            9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
            9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
            9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
            9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
            9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
            9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
            9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
            9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
            9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
            9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
            9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
            9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
            9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
            9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
            6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setTilemap(tilemap`第一大關之一`)
        for (let value of sprites.allOfKind(SpriteKind.大地圖主角)) {
            value.destroy()
        }
    } else if (主遊戲程式 == 2) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("廣闊原野1-2", DialogLayout.Center)
        scene.cameraFollowSprite(主角)
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
            11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
            11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
            111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
            111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
            ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
            dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
            dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
            ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
            ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
            ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
            dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
            9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
            999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
            9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
            99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
            999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
            999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
            9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
            9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
            9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
            9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
            9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
            9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
            9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
            9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
            9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
            9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
            9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
            9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
            9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
            9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
            9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
            9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
            9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
            9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
            9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
            6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setTilemap(tilemap`第一大關之二`)
    } else if (主遊戲程式 == 3) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .bd111111111111111111db.
            bd1dbbbbbbbbbbbbbbbbd1db
            b1dbbbbbbbbbbbbbbbbbbd1b
            b1bd1111111111111111db1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1b111111111111111111b1b
            b1bd1111111111111111db1b
            bd1bbbbbbbbbbbbbbbbbb1db
            bbd111111111111111111dbb
            .bbbbbbbbbbbbbbbbbbbbbb.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("廣闊原野1-3", DialogLayout.Center)
        scene.cameraFollowSprite(主角)
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
            11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
            11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
            111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
            111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
            ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
            dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
            dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
            ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
            ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
            ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
            dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
            9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
            999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
            9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
            99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
            999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
            999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
            9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
            9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
            9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
            9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
            9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
            9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
            9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
            9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
            9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
            9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
            9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
            9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
            9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
            9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
            9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
            9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
            9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
            9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
            9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
            6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setTilemap(tilemap`第一大關之三`)
    }
    tiles.placeOnRandomTile(主角, assets.tile`myTile6`)
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(企鵝, assets.tile`tile71`)
    for (let value of tiles.getTilesByType(assets.tile`tile71`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    主角.ay = 410
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        金幣 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.金幣)
        tiles.placeOnTile(金幣, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        金幣,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        70,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        草 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 . . 8 . . 6 . . . . 
            . . . . . 7 . 7 7 . . 7 . 7 . . 
            . 7 . . 7 7 8 7 7 . 7 7 8 7 . . 
            . 7 7 . 8 7 7 7 7 6 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            8 7 7 6 7 7 7 7 7 7 6 7 7 7 8 7 
            7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 8 
            7 8 7 7 7 7 7 8 6 7 7 7 6 7 7 7 
            `, SpriteKind.裝飾)
        tiles.placeOnTile(草, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        草,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 . . 8 . . 6 . . . . 
            . . . . . 7 . 7 7 . . 7 . 7 . . 
            . 7 . . 7 7 8 7 7 . 7 7 8 7 . . 
            . 7 7 . 8 7 7 7 7 6 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            8 7 7 6 7 7 7 7 7 7 6 7 7 7 8 7 
            7 7 7 7 7 6 7 7 7 7 7 7 7 7 7 8 
            7 8 7 7 7 7 7 7 6 7 7 7 6 7 7 7 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 7 . . 8 . . 6 . . . . 
            . . . . . 7 . 7 7 . . 7 . 7 . . 
            . 7 . . 7 7 6 7 7 . 7 7 8 7 . . 
            . 8 7 . 8 7 7 7 7 6 7 7 7 7 7 . 
            7 7 7 7 7 7 7 7 7 7 7 6 7 7 7 8 
            7 7 7 7 7 7 7 7 6 7 7 7 7 7 7 7 
            7 7 8 7 7 7 8 7 7 7 7 7 7 7 8 7 
            `],
        900,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        花 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a 3 . . a 3 . . . . . 
            . . . . . 3 3 a 3 3 . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . 7 . . 7 . . 7 . . . . . 
            . . . . . 7 . 7 7 6 7 . . . . . 
            . . . . . . 7 6 6 . . . . . . . 
            `, SpriteKind.裝飾)
        tiles.placeOnTile(花, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        樹 = sprites.create(img`
            .....75....757....57..7.....77..
            ..5.55555.577775..755.7..7757...
            ..5.577.565747.766777766775e777.
            ....775.77577667677676776767777.
            55.757.75676777777777767c77667..
            7e5454777777765567776766677677.7
            ..77757777777566667676566777677.
            .5.7657577775777777667677766766.
            .7777674576767777676677677776767
            ..77..77777577777777577757767c67
            ..775755777755777777577777776777
            .55557755.7567777777677777566.66
            .557777ee7677767767767767667677.
            .577.77777777767767e67776767....
            .5577777.775777776776776676777.6
            5..777777.77777777776767767766..
            5.557...77777777776767767667.66.
            ..555.7777.77.756767cc667677676.
            ...7...77777.777676657767776776.
            .....77....7.5577e7665.7...666..
            .....57....77..666767..7.6......
            .....7..........4eeee.6.........
            ................46ee6...........
            ................4eeec...........
            ................4eeec...........
            ...............e4eece...........
            ...............eeeece...........
            ..............44eeecce..........
            ............444eeeeccc..........
            .........eee44ee.ececccec.......
            .......eeee.4ee..ece.cccec......
            ....eee....e......e...eee.ccee..
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, SpriteKind.裝飾)
        tiles.placeOnTile(樹, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        樹,
        [img`
            .....75....757....57..7.....77..
            ..5.55555.577775..755.7..7757...
            ..5.577.565747.766777766775e777.
            ....775.77577667677676776767777.
            55.757.75676777777777767c77667..
            7e5454777777765567776766677677.7
            ..77757777777566667676566777677.
            .5.7657577775777777667677766766.
            .7777674576767777676677677776767
            ..77..77777577777777577757767c67
            ..775755777755777777577777776777
            .55557755.7567777777677777566.66
            .557777ee7677767767767767667677.
            .577.77777777767767e67776767....
            .5577777.775777776776776676777.6
            5..777777.77777777776767767766..
            5.557...77777777776767767667.66.
            ..555.7777.77.756767cc667677676.
            ...7...77777.777676657767776776.
            .....77....7.5577e7665.7...666..
            .....57....77..666767..7.6......
            .....7..........4eeee.6.........
            ................46ee6...........
            ................4eeec...........
            ................4eeec...........
            ...............e4eece...........
            ...............eeeece...........
            ..............44eeecce..........
            ............444eeeeccc..........
            .........eee44ee.ececccec.......
            .......eeee.4ee..ece.cccec......
            ....eee....e......e...eee.ccee..
            `,img`
            ................................
            .....75....757....57..7.....77..
            ..5.55555.577775..755.7..7757...
            ..5.577.565747.766777766775e777.
            ....775.77577667677676776767777.
            55.757.75676777777777767c77667..
            7e5454777777765567776766677677.7
            ..77757777777566667676566777677.
            .5.7657577775777777667677766766.
            .7777674576767777676677677776767
            ..77..77777577777777577757767c67
            ..775755777755777777577777776777
            .55557755.7567777777677777566.66
            .557777ee7677767767767767667677.
            .577.77777777767767e67776767....
            .5577777.775777776776776676777.6
            5..777777.77777777776767767766..
            5.557...77777777776767767667.66.
            ..555.7777.77.756767cc667677676.
            ...7...77777.777676657767776776.
            .....77....7.5577e7665.7...666..
            .....57....77..666767..7.6......
            .....7..........4eeee.6.........
            ................46ee6...........
            ................4eeec...........
            ...............e4eece...........
            ...............eeeece...........
            ..............44eeecce..........
            ............444eeeeccc..........
            .........eee44ee.ececccec.......
            .......eeee.4ee..ece.cccec......
            ....eee....e......e...eee.ccee..
            `],
        800,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        怪物 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy)
        tiles.placeOnTile(怪物, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        怪物,
        "c 60 0 -50 0 0 0",
        3000,
        true
        )
        animation.runImageAnimation(
        怪物,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f b c c c c b f . . . . . 
            . . f c c c c c c c c f . . . . 
            . f b c c c c c c c c b f . . . 
            . f c b b b b b b c c c f . . . 
            . f c f f b b f f c c c f . . . 
            . f c c c c c c c c c c f . . . 
            . . f c c c c b f c c b f f . . 
            . . . f f f f f c c b f c c f . 
            . . f c 2 c c c b b f c c c c f 
            . f c c 2 c c c f c b c c b f f 
            f 1 1 1 1 c b f c b c b b f . . 
            f 1 1 1 1 1 b b b b b b b f . . 
            f b 1 1 1 1 1 b b b b b f f . . 
            . f b 1 1 1 1 1 1 b b b f . . . 
            . . f f f f f f f f f f . . . . 
            `,img`
            . . . f f f f f f . . . . . . . 
            . . f b c c c c b f . . . . . . 
            . f c c c c c c c c f . . . . . 
            f b c c c c c c c c b f . . . . 
            f c c b b b b c c c c f . . . . 
            f c f f b b f f c c c f . . . . 
            f c c c c c c c c c c f . . . . 
            . f c c c c b f c c b f . . . . 
            . . f f f f f c c b f f f f . . 
            . . f b 2 c c c f c c c c c f . 
            . f b c c 2 c c c f b c c c c f 
            . f 1 1 1 1 c b b c b b b f f f 
            . f 1 1 1 1 1 b b b b b b f . . 
            . f b 1 1 1 1 1 b b b b b f . . 
            . . f b 1 1 1 1 1 c b b f f . . 
            . . . f f f f f f f f f f . . . 
            `],
        200,
        true
        )
        if (怪物.vx < 0) {
            怪物.image.flipX()
        }
    }
}
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile104`, function (sprite, location) {
    主遊戲程式 += 1
    第五關卡()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . . f f . . 
        . . . 1 b b b c c d d d c f f . 
        . . . . 1 . . . . . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 主角, 200, 0)
    animation.runImageAnimation(
    主角,
    assets.animation`myAnim0`,
    1000,
    false
    )
    pause(1000)
})
scene.onOverlapTile(SpriteKind.大地圖主角, assets.tile`myTile99`, function (sprite, location) {
    主遊戲程式 += 1
    第一關卡()
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile8`, function (sprite, location) {
    主遊戲程式 += 1
    第二關卡()
})
scene.onOverlapTile(SpriteKind.大地圖主角, assets.tile`myTile62`, function (sprite, location) {
    主遊戲程式 += 1
    第二關卡()
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile115`, function (sprite, location) {
    主遊戲程式 = 0
    for (let value of sprites.allOfKind(SpriteKind.主角)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
        value.destroy()
    }
    大地圖主角繳.setPosition(73, 66)
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    第五關卡()
})
function 第三關卡 () {
    if (主遊戲程式 == 0) {
        tiles.setTilemap(tilemap`層級22`)
        大地圖主角繳 = sprites.create(assets.image`主角2`, SpriteKind.大地圖主角)
        scene.cameraFollowSprite(大地圖主角繳)
        animation.runImageAnimation(
        大地圖主角繳,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        for (let value of sprites.allOfKind(SpriteKind.主角)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
            value.destroy()
        }
        大地圖主角繳.setPosition(200, 85)
        controller.moveSprite(大地圖主角繳, 50, 50)
    } else if (主遊戲程式 == 1) {
        主角 = sprites.create(assets.image`主角0`, SpriteKind.主角)
        企鵝 = sprites.create(assets.image`myImage6`, SpriteKind.企鵝)
        企鵝.follow(主角)
        controller.moveSprite(主角, 90, 0)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("糖果天堂3-1", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage30`)
        tiles.setTilemap(tilemap`第三大關之一`)
        scene.cameraFollowSprite(主角)
        for (let value of sprites.allOfKind(SpriteKind.大地圖主角)) {
            value.destroy()
        }
    } else if (主遊戲程式 == 2) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("糖果天堂3-2", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage30`)
        tiles.setTilemap(tilemap`第三大關之二`)
        scene.cameraFollowSprite(主角)
    } else if (主遊戲程式 == 3) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("糖果天堂3-3", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage30`)
        tiles.setTilemap(tilemap`第三大關之三`)
        scene.cameraFollowSprite(主角)
    }
    tiles.placeOnRandomTile(主角, assets.tile`myTile6`)
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(企鵝, assets.tile`tile71`)
    for (let value of tiles.getTilesByType(assets.tile`tile71`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    主角.ay = 410
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        金幣 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.金幣)
        tiles.placeOnTile(金幣, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        金幣,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        70,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile55`)) {
        肥肥薑餅人 = sprites.create(assets.image`myImage63`, SpriteKind.Enemy)
        tiles.placeOnTile(肥肥薑餅人, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        肥肥薑餅人,
        "c 60 0 -50 0 0 0",
        3000,
        true
        )
        if (肥肥薑餅人.vx < 0) {
            肥肥薑餅人.image.flipX()
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile106`)) {
        遮陽傘 = sprites.create(assets.image`myImage60`, SpriteKind.裝飾)
        tiles.placeOnTile(遮陽傘, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile113`)) {
        蛋糕 = sprites.create(assets.image`myImage65`, SpriteKind.裝飾)
        tiles.placeOnTile(蛋糕, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile112`)) {
        蘑菇怪物 = sprites.create(assets.image`myImage64`, SpriteKind.Enemy)
        tiles.placeOnTile(蘑菇怪物, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        蘑菇怪物,
        "c 60 0 -50 0 0 0",
        3000,
        true
        )
        animation.runImageAnimation(
        蘑菇怪物,
        [img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 9 9 9 9 b . . . 
            . c c b b 1 1 9 9 9 9 9 b b . . 
            c c b 9 1 1 9 9 9 9 9 1 1 b . . 
            c b 9 9 9 9 9 9 9 9 9 1 1 b . . 
            f b b c c c c b 9 9 9 9 9 c . . 
            f b c c c d d d b b 9 9 9 9 c . 
            f b c b d d d d d d b b 9 9 b c 
            . c b d c d d d d d d b c 9 9 c 
            . c d d c d d d c d d c c c 9 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d b f f c c c b f 
            . . c d d d d b d d b f b b f f 
            . . . c d d d b b d d f f f f . 
            . . . f f b b f b b b b . . . . 
            . . . f b b b f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 9 9 9 9 b . . . 
            . c c b b 1 1 9 9 9 9 9 b b . . 
            c c c 9 1 1 1 9 9 9 9 1 1 b . . 
            c b 9 9 9 9 9 9 9 9 9 1 1 b . . 
            f b b c c c c b b 9 9 1 1 c . . 
            f b c c b d d d d b b 9 9 c c . 
            f b c d d d d d d d b b 9 9 b c 
            . c d d c d d d d d d b b 9 9 c 
            . c d d c d d d c d d b c 9 9 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b b f f d d c c c b f 
            . . c d d b d d b f c c b b f f 
            . . . c d b b d d f c c f f f . 
            . . . . c f b b b b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 9 9 9 9 b . . . 
            . c c b 1 1 9 9 9 9 9 9 b b . . 
            c c c 9 1 1 1 9 9 9 9 9 9 b . . 
            c b 9 9 9 9 9 9 9 9 9 1 1 b . . 
            f b b c c c c b 9 9 9 1 1 c . . 
            f b c c c d d d b b 9 9 9 c c . 
            f b c b d d d d d d b b 9 9 b c 
            . c b d d d d d d d d b c 9 9 c 
            . c d c c d d d d d d c c c 9 f 
            . f d d d d d c c d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d b f f c b b f f 
            . . f b d d d b b d d f f f f . 
            . . f f f c c b d d d f . . . . 
            `,img`
            . . . . . . . . b b b b . . . . 
            . . . . b b b b 9 9 9 9 b . . . 
            . c c b b 1 1 9 9 9 9 9 b b . . 
            c c 9 9 1 1 9 9 9 9 9 1 1 b . . 
            c b 9 9 9 9 9 9 9 9 9 1 1 b . . 
            f b b c c c 9 9 9 9 9 9 9 c . . 
            f b c c c b b b b 9 9 9 9 9 c . 
            f b c c d d d d d b b 9 9 9 9 c 
            . c c d c d d d d d d b c 9 9 c 
            . c b d c d d d c d d c c c 9 f 
            . f d d d d d c d d d c c c b f 
            . f d b b b d d d d d c c c b f 
            . . c d d d d d d d b c b b f f 
            . . f f d d d d c c b f f f f . 
            . f f b b f f c c b d d b f . . 
            . f b b b f f . . b d d d f . . 
            `],
        300,
        true
        )
        if (蘑菇怪物.vx < 0) {
            蘑菇怪物.image.flipX()
        }
    }
}
sprites.onOverlap(SpriteKind.主角, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.spray, 500)
    music.bigCrash.play()
})
function 第二關卡 () {
    if (主遊戲程式 == 0) {
        tiles.setTilemap(tilemap`層級22`)
        大地圖主角繳 = sprites.create(assets.image`主角2`, SpriteKind.大地圖主角)
        scene.cameraFollowSprite(大地圖主角繳)
        animation.runImageAnimation(
        大地圖主角繳,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 1 1 1 1 f f . . . . 
            . . . . f d 1 1 1 1 d f . . . . 
            . . . f 1 1 1 1 1 1 1 1 f . . . 
            . . . f b c c c c c f b f . . . 
            . . . f f c e e e e c f f . . . 
            . . . . f b f 4 4 f b f . . . . 
            . . . f 4 1 f d d f 1 4 f . . . 
            . . . f e d d d d d d e f . . . 
            . . . . f c 4 4 4 4 e f . . . . 
            . . . 6 6 f 8 8 b 8 f 6 4 . . . 
            . . . 6 d f b c a a f d 6 . . . 
            . . . 4 6 f c b a b f 6 6 . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        for (let value of sprites.allOfKind(SpriteKind.主角)) {
            value.destroy()
        }
        for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
            value.destroy()
        }
        大地圖主角繳.setPosition(73, 66)
        controller.moveSprite(大地圖主角繳, 50, 50)
    } else if (主遊戲程式 == 1) {
        主角 = sprites.create(assets.image`主角0`, SpriteKind.主角)
        企鵝 = sprites.create(assets.image`myImage6`, SpriteKind.企鵝)
        企鵝.follow(主角)
        controller.moveSprite(主角, 90, 0)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("赤熱沙地2-1", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage26`)
        tiles.setTilemap(tilemap`第二大關之一`)
        scene.cameraFollowSprite(主角)
        for (let value of sprites.allOfKind(SpriteKind.大地圖主角)) {
            value.destroy()
        }
    } else if (主遊戲程式 == 2) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("赤熱沙地2-2", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage26`)
        tiles.setTilemap(tilemap`第二大關之二`)
        scene.cameraFollowSprite(主角)
    } else if (主遊戲程式 == 3) {
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("赤熱沙地2-3", DialogLayout.Center)
        scene.setBackgroundImage(assets.image`myImage26`)
        tiles.setTilemap(tilemap`第二大關之三`)
        scene.cameraFollowSprite(主角)
    }
    tiles.placeOnRandomTile(主角, assets.tile`myTile6`)
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(企鵝, assets.tile`tile71`)
    for (let value of tiles.getTilesByType(assets.tile`tile71`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    主角.ay = 410
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        金幣 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.金幣)
        tiles.placeOnTile(金幣, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        金幣,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 4 4 4 4 4 5 5 f . . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 4 5 5 5 5 5 5 5 5 f . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 4 5 f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 4 5 5 5 f . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 5 4 4 4 5 f . . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 4 5 5 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . f 5 4 4 4 4 4 5 f . . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 4 5 5 5 5 5 5 5 f . . 
            . . . f 5 5 5 5 5 5 5 5 5 f . . 
            . . . . f 5 5 5 5 5 5 5 f . . . 
            . . . . . f 5 5 5 5 5 f . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        70,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile103`)) {
        螃蟹 = sprites.create(assets.image`myImage69`, SpriteKind.Enemy)
        tiles.placeOnTile(螃蟹, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        螃蟹,
        "c 60 0 -50 0 0 0",
        3000,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile45`)) {
        遮陽傘 = sprites.create(assets.image`myImage62`, SpriteKind.裝飾)
        tiles.placeOnTile(遮陽傘, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile102`)) {
        椰子樹 = sprites.create(assets.image`myImage68`, SpriteKind.裝飾)
        tiles.placeOnTile(椰子樹, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile111`)) {
        猴子 = sprites.create(assets.image`myImage72`, SpriteKind.Enemy)
        tiles.placeOnTile(猴子, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        猴子,
        "c 60 0 -50 0 0 0",
        3000,
        true
        )
        animation.runImageAnimation(
        猴子,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `],
        800,
        true
        )
        if (猴子.vx < 0) {
            猴子.image.flipX()
        }
    }
}
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile1`, function (sprite, location) {
    主遊戲程式 += 1
    第一關卡()
})
sprites.onOverlap(SpriteKind.主角, SpriteKind.金幣, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile108`, function (sprite, location) {
    主遊戲程式 = 0
    for (let value of sprites.allOfKind(SpriteKind.主角)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
        value.destroy()
    }
    大地圖主角繳.setPosition(73, 66)
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    第四關卡()
})
scene.onOverlapTile(SpriteKind.主角, assets.tile`myTile44`, function (sprite, location) {
    主遊戲程式 = 0
    for (let value of sprites.allOfKind(SpriteKind.主角)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.企鵝)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.裝飾)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.金幣)) {
        value.destroy()
    }
    大地圖主角繳.setPosition(200, 85)
    第二關卡()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    music.bigCrash.play()
})
let 猴子: Sprite = null
let 椰子樹: Sprite = null
let 螃蟹: Sprite = null
let 蘑菇怪物: Sprite = null
let 蛋糕: Sprite = null
let 遮陽傘: Sprite = null
let 肥肥薑餅人: Sprite = null
let projectile: Sprite = null
let 樹: Sprite = null
let 花: Sprite = null
let 草: Sprite = null
let 圍觀群眾第一組: Sprite = null
let 回家小隊第二組: Sprite = null
let 回家小隊第一組: Sprite = null
let 海草2: Sprite = null
let 海草1: Sprite = null
let 小鯊鯊: Sprite = null
let 出發小隊: Sprite = null
let pony: Sprite = null
let 動畫主角: Sprite = null
let 公主他媽: Sprite = null
let 公主他爸: Sprite = null
let 路人: Sprite = null
let 動畫程式 = 0
let 魔王: Sprite = null
let 公主: Sprite = null
let 異形怪: Sprite = null
let 怪物: Sprite = null
let 蘑菇: Sprite = null
let 火: Sprite = null
let 金幣: Sprite = null
let 大地圖主角繳: Sprite = null
let 主遊戲程式 = 0
let 企鵝: Sprite = null
let 主角: Sprite = null
開場動畫()
主角 = sprites.create(assets.image`主角1`, SpriteKind.主角)
企鵝 = sprites.create(assets.image`myImage6`, SpriteKind.企鵝)
企鵝.follow(主角)
controller.moveSprite(主角, 90, 0)
主遊戲程式 = 0
第一關卡()
game.onUpdate(function () {
    if (主角.vy < 0) {
        主角.setImage(assets.image`主角1`)
        主角.setImage(assets.image`主角5`)
    } else if (主角.vy > 0) {
        主角.setImage(assets.image`主角3`)
    } else if (主角.vy % -2 == 0) {
        主角.setImage(assets.image`主角4`)
    }
    if (主角.vx < 0) {
        主角.image.flipX()
    }
})
