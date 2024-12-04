namespace SpriteKind {
    export const plante = SpriteKind.create()
    export const hus = SpriteKind.create()
    export const traktor = SpriteKind.create()
    export const bomuld = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gardener,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 f f 7 7 7 f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . . f 7 7 f 7 f f 7 f 7 7 f . . 
        . . f f f 7 7 f f 7 7 f f f . . 
        . f f 7 f 7 f 7 7 f 7 f 7 f f . 
        . f 7 7 f f 7 7 7 7 f 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . . f 7 d d d d d d 7 f . . . 
        . . e e f f f f f f f f e e . . 
        . . d d f 7 7 7 7 7 7 f d d . . 
        . . d d f 7 7 7 7 7 7 f d d . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 f f 7 7 7 f . . . 
        . . . f f f f 7 7 f f f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . . f 7 7 f 7 f f f 7 f 7 f . . 
        . . f f f 7 f 7 7 7 7 f f f . . 
        . . f 7 7 f f 7 7 7 f 7 7 f . . 
        . f f 7 f f 7 7 7 f 7 7 7 f f . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        . . . f 7 d d d d d d 7 f . . . 
        . . . e f f f f f f f f e e . . 
        . . . . f 7 7 7 7 7 e . . . . . 
        . . . . f e f f f f e e . . . . 
        . . . . e e e . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 f f 7 7 7 f . . . 
        . . f f f f f 7 7 f f f f f . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . . f 7 7 f 7 f f 7 f 7 7 f . . 
        . . f f f 7 7 f f 7 7 f f f . . 
        . f f 7 f 7 f 7 7 f 7 f 7 f f . 
        . f 7 7 f f 7 7 7 7 f 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . . f 7 d d d d d d 7 f . . . 
        . . e e f f f f f f f f e e . . 
        . . d d f 7 7 7 7 7 7 f d d . . 
        . . d d f 7 7 7 7 7 7 f d d . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 7 7 7 7 f f . . . . 
        . . . f 7 7 7 f f 7 7 7 f . . . 
        . . . f f f f 7 7 f f f f . . . 
        . . f f 7 7 7 7 7 7 7 7 f f . . 
        . . f 7 f 7 f f f 7 f 7 7 f . . 
        . . f f f 7 7 7 7 f 7 f f f . . 
        . . f 7 7 f 7 7 7 f f 7 7 f . . 
        . f f 7 7 7 f 7 7 7 f f 7 f f . 
        . f f 7 7 7 7 7 7 7 7 7 7 f f . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . e e f f f f f f f f e . . . 
        . . d d f 7 7 7 7 7 7 f d . . . 
        . . . d e e f f f f e f d . . . 
        . . . . . . . . . e e e . . . . 
        `],
    500,
    true
    )
    if (Animation == 1) {
        traktor2.setImage(img`
            ....bbbfcccccfbbb....
            ......bcccccccb......
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            .....bb2222222bb.....
            ..cd.bb2222222bb.dc..
            .fff.bb2222222bb.fff.
            .fcf.bb2222222bb.fcf.
            dcffcbb2222222bbcffcd
            dcffcbb2222222bbcffcd
            dfcfcbb2222222bbcfcfd
            dcfccbb2222222bbcffcd
            dcffcbb2222222bbcfcfd
            .fcf.bb2222222bb.cffd
            .ffc.bb2222222bb.cfc.
            .fff.bbcccccccbb.fff.
            ....22bfffffffb22....
            .bbcc2ccccccccc2ccbb.
            .bfcf2fcccccccf2fcfb.
            .bdcb2fcccccccf2bcdb.
            .cfcf2fcccccccf2fcfc.
            eefff22fffffff22fffee
            eebbb22222222222bbbee
            eeeecf222222222fceeee
            eeeec22222222222ceeee
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222cfeeeeeeeeefc2222
            eeeeffdddddddddffeeee
            ffff.............ffff
            `)
        animation.runImageAnimation(
        traktor2,
        [img`
            ....bbbfcccccfbbb....
            ......bcccccccb......
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            .....bb2222222bb.....
            ..cd.bb2222222bb.dc..
            .fff.bb2222222bb.fff.
            .fcf.bb2222222bb.fcf.
            dcffcbb2222222bbcffcd
            dcffcbb2222222bbcffcd
            dfcfcbb2222222bbcfcfd
            dcfccbb2222222bbcffcd
            dcffcbb2222222bbcfcfd
            .fcf.bb2222222bb.cffd
            .ffc.bb2222222bb.cfc.
            .fff.bbcccccccbb.fff.
            ....22bfffffffb22....
            .bbcc2ccccccccc2ccbb.
            .bfcf2fcccccccf2fcfb.
            .bdcb2fcccccccf2bcdb.
            .cfcf2fcccccccf2fcfc.
            eefff22fffffff22fffee
            eebbb22222222222bbbee
            eeeecf222222222fceeee
            eeeec22222222222ceeee
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222cfeeeeeeeeefc2222
            eeeeffdddddddddffeeee
            ffff.............ffff
            `,img`
            ....bbbfcccccfbbb....
            ......bcccccccb......
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            .....bb2222222bb.....
            ..cd.bb2222222bb.dc..
            .fff.bb2222222bb.fff.
            .ffc.bb2222222bb.cfc.
            dfcfcbb2222222bbccffd
            dcffcbb2222222bbcfcfd
            dcfccbb2222222bbcffcd
            dfcfcbb2222222bbcfcfd
            dcffcbb2222222bbcffcd
            .cff.bb2222222bb.ffcd
            .fcf.bb2222222bb.fcf.
            .fff.bbcccccccbb.fff.
            ....22bfffffffb22....
            .bbcc2ccccccccc2ccbb.
            .bfcf2fcccccccf2fcfb.
            .bdcb2fcccccccf2bcdb.
            .cfcf2fcccccccf2fcfc.
            eefff22fffffff22fffee
            eebbb22222222222bbbee
            eeeecf222222222fceeee
            eeeec22222222222ceeee
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222cfeeeeeeeeefc2222
            eeeeffdddddddddffeeee
            ffff.............ffff
            `,img`
            ....bbbfcccccfbbb....
            ......bcccccccb......
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            .....bb2222222bb.....
            ..cd.bb2222222bb.dc..
            .fff.bb2222222bb.fff.
            .fcf.bb2222222bb.fcf.
            dffccbb2222222bbccffd
            dffccbb2222222bbccffd
            dfcfcbb2222222bbcfcfd
            dcfccbb2222222bbccffd
            dffccbb2222222bbcfcfd
            .fcf.bb2222222bb.ffcd
            .cff.bb2222222bb.cfc.
            .fff.bbcccccccbb.fff.
            ....22bfffffffb22....
            .bbcc2ccccccccc2ccbb.
            .bfcf2fcccccccf2fcfb.
            .bdcb2fcccccccf2bcdb.
            .cfcf2fcccccccf2fcfc.
            eefff22fffffff22fffee
            eebbb22222222222bbbee
            eeeecf222222222fceeee
            eeeec22222222222ceeee
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222cfeeeeeeeeefc2222
            eeeeffdddddddddffeeee
            ffff.............ffff
            `,img`
            ....bbbfcccccfbbb....
            ......bcccccccb......
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            .....bb2222222bb.....
            ..cd.bb2222222bb.dc..
            .fff.bb2222222bb.fff.
            .cff.bb2222222bb.cfc.
            dfcfcbb2222222bbcffcd
            dffccbb2222222bbcfcfd
            dcfccbb2222222bbccffd
            dfcfcbb2222222bbcfcfd
            dffccbb2222222bbccffd
            .ffc.bb2222222bb.cffd
            .fcf.bb2222222bb.fcf.
            .fff.bbcccccccbb.fff.
            ....22bfffffffb22....
            .bbcc2ccccccccc2ccbb.
            .bfcf2fcccccccf2fcfb.
            .bdcb2fcccccccf2bcdb.
            .cfcf2fcccccccf2fcfc.
            eefff22fffffff22fffee
            eebbb22222222222bbbee
            eeeecf222222222fceeee
            eeeec22222222222ceeee
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222cfeeeeeeeeefc2222
            eeeeffdddddddddffeeee
            ffff.............ffff
            `],
        250,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.traktor, SpriteKind.plante, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    [img`
        . 1 1 1 e e f . . . . . . . . . 
        . . 1 e e f . . . . . . . . . . 
        . . f e f . . 1 1 . . . . . . . 
        . . f e f . 1 1 1 . . . . . . . 
        . . . f e 1 1 1 . . . . . . . . 
        . . . . f e 1 . . . . . . . . . 
        . 1 1 . . f e f . . . . . . . . 
        . 1 1 1 f e e f . . . . . . . . 
        . . f f e e f . . . . . . . . . 
        . . f e e f 1 1 . . . . . . . . 
        . . f e f . 1 1 . . . . . . . . 
        . . f e f . 1 1 1 . . . . . . . 
        . . . f e f . 1 1 . . . . . . . 
        . . . . f e f . . . . . . . . . 
        . . . . 1 e e f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . 1 1 1 e e f . . . . 
        . . . . . . . 1 e e f . . 1 . . 
        . . . . . . . f e f . . 1 1 . . 
        . . . . . . . f e f . 1 1 . . . 
        . . . . . . . . f e 1 1 1 . . . 
        . . . 1 1 1 1 f e f e 1 . . . . 
        . . . . 1 1 f e e f . . . . . . 
        . . . . f f e e f . . . . . . . 
        . . . . f e e f 1 1 . . . . . . 
        . . . . f e f 1 1 1 . . . . . . 
        . . . f e f . . . . . . . . . . 
        . . . . f e f . . . . . . . . . 
        . . . . 1 e e f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f . . . . . 
        . . . . . . . . . 1 e f . . . . 
        . . . . . . . . . f e f . . . . 
        . . . . 1 1 1 1 f e f f . . . . 
        . . . . . 1 1 f e e f e 1 . . . 
        . . . . . f f e e f . . . . . . 
        . . . . . f e e f 1 1 . . . . . 
        . . . . . f e f 1 1 1 . . . . . 
        . . . . f e f . . . . . . . . . 
        . . . . 1 e e f . . . . . . . . 
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
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f e e f . . . 1 1 . . 
        . . . . . f e 1 . . 1 f e 1 . . 
        . . . . f e f . . 1 f e e 1 . . 
        . . . . 1 e e f f f e e f . . . 
        `],
    100,
    false
    )
    pause(400)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    if (info.score() == 159) {
        game.showLongText("du er nu færdig med at høste bomuld", DialogLayout.Bottom)
        game.showLongText("tilføj bomulds sprøgsmål her", DialogLayout.Bottom)
        level += 1
        level_styrer()
    }
})
// Tyngdekraft
// Hoppefunktion
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Hop opad
    lastbil.vy = -100
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, traktor2)
    animation.stopAnimation(animation.AnimationTypes.All, Gardener)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gardener,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f 7 7 7 7 f f . . . . 
        . . f 7 7 7 f 7 7 7 7 f f . . . 
        . . f 7 7 7 7 f f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 f f f f . . . 
        . f 7 7 f f f f 7 7 7 7 f . . . 
        . f f f d d d f f f f f f f . . 
        . f d d d d f 9 e d d e f f . . 
        . . f d d d f 1 d d d e e f . . 
        . . . f d d d d d e e e f . . . 
        . . . f e 3 3 3 e e f f . . . . 
        . . . f 7 7 7 e d d f . . . . . 
        . . . f 7 7 7 e d d f . . . . . 
        . . . f 8 8 7 f e e f . . . . . 
        . . . . f f f e f f . . . . . . 
        . . . . . . e e e . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f 7 7 7 7 f f . . . . 
        . . f 7 7 7 f 7 7 7 7 f f . . . 
        . . f 7 7 7 7 f f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 f f f f . . . 
        . f 7 7 f f f f 7 7 7 7 f . . . 
        . f f f d d e f f f f f f f . . 
        . f d d d d f 9 e d d e f f . . 
        . . f d d d f 1 d d d e e f . . 
        . . . f 3 3 3 e e e e e f . . . 
        . . . f 7 7 e d d 7 f . . . . . 
        . . . f 7 7 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f e e f f f f e f f . . . . 
        . . . e e e . . . e e . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f 7 7 7 7 f f . . . . 
        . . f 7 7 7 f 7 7 7 7 f f . . . 
        . . f 7 7 7 7 f f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 f f f f . . . 
        . f 7 7 f f f f 7 7 7 7 f . . . 
        . f f f d d e f f f f f f f . . 
        . f d d d d f 9 e d d d f f . . 
        . . f d d d f 1 d d d d e f . . 
        . . . f d d d d d d d e f . . . 
        . . . f e 3 3 3 e e f f . . . . 
        . . . f 7 7 7 e d d f . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 8 8 7 f e e f . . . . . 
        . . . . f f f e f f . . . . . . 
        . . . . . . e e e . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f 7 7 7 7 f f . . . . 
        . . f 7 7 7 f 7 7 7 7 f f . . . 
        . . f 7 7 7 7 f f 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 f f f f . . . 
        . f 7 7 f f f f 7 7 7 7 f . . . 
        . f f f e e e f f f f f f f . . 
        . f d d d d f 9 e d d d f f . . 
        . . f d d d f 1 d d d d e f . . 
        . . . f d d d d d e e e f . . . 
        . . . f e 3 3 3 e d d f . . . . 
        . . . f 7 7 7 7 e d d f . . . . 
        . . f f 5 5 7 7 f e e f . . . . 
        . . f e e f f f f e f f . . . . 
        . . . e e e . . . e e . . . . . 
        `],
    500,
    true
    )
    if (Animation == 1) {
        traktor2.setImage(img`
            ...............5d122f22222f2.......
            .................ffffffffff2f......
            .................f29d99999de.......
            .................f299d99d99e.......
            .................f29d99999ded......
            .................f222999992f2......
            .................f222222ffeee2ee...
            .......feeeefee22f22d11f2ffffffe...
            ....f222222222222f22d1f2fffffffff..
            ....fff22ff222222f22122ffffffffffd.
            ....fff22ff222222f22dfffffffffffff.
            ....5fffffff22222f22f2fffff5555ffff
            ....fffffffff2222f22ffffff5eeee45ff
            2222ffffffffff222fff2ffff5e4554e5ff
            222fffff55fffff222222ffff4e55554e5f
            .22fff5e4e5ffff222222fffe4454e54e5f
            ....ff4555effffff2ff2ffff5e55554e5f
            ....ff4455efff...2..2.fff5ee444e5ff
            ....ff5e4e5fff...2222..fff54eee5eff
            ....ffff5efff...........fffe555fff.
            .....fffffff.............ffffffff..
            .......ffff...............fffff....
            `)
        animation.runImageAnimation(
        traktor2,
        [img`
            ...............5d122f22222f2.......
            .................ffffffffff2f......
            .................f29d99999de.......
            .................f299d99d99e.......
            .................f29d99999ded......
            .................f222999992f2......
            .................f222222ffeee2ee...
            .......feeeefee22f22d11f2ffffffe...
            ....f222222222222f22d1f2fffffffff..
            ....fff22ff222222f22122ffffffffffd.
            ....fff22ff222222f22dfffffffffffff.
            ....5fffffff22222f22f2ffff5555fffff
            ....fffffffff2222f22fffff5eeee45fff
            2222ffffffffff222fff2fff5e4554e5fff
            222fffff55fffff222222fff4e55554e5ff
            .22fff5e4e5ffff222222ffe4454e54e5ff
            ....ff4555effffff2ff2fff5e55554e5ff
            ....ff4455efff...2..2.ff5ee444e5fff
            ....ff5e4e5fff...2222..ff54eee5efff
            ....ffff5efff...........ffe555ffff.
            .....fffffff.............ffffffff..
            .......ffff...............fffff....
            `,img`
            ...............5d122f22222f2.......
            .................ffffffffff2f......
            .................f29d99999de.......
            .................f299d99d99e.......
            .................f29d99999ded......
            .................f222999992f2......
            .................f222222ffeee2ee...
            .......feeeefee22f22d11f2ffffffe...
            ....f222222222222f22d1f2fffffffff..
            ....fff22ff222222f22122ffffffffffd.
            ....fff22ff222222f22dfffffffffffff.
            ....5fffffff22222f22f2fffff555fffff
            ....fffffffff2222f22fffff55eee5efff
            2222ffffffffff222fff2ffff4e444e5fff
            222ffff5ee5ffff222222fff5e45554e5ff
            .22fff5e55eefff222222fff5e55e54e5ff
            ....ff545545fffff2ff2fff5e55454e5ff
            ....fffe54efff...2..2.ff5e4555e4eff
            ....fff5445fff...2222..ff5ee4ee5fff
            ....fffffffff...........ff54455fff.
            .....fffffff.............fffeffff..
            .......ffff...............fffff....
            `,img`
            ...............5d122f22222f2.......
            .................ffffffffff2f......
            .................f29d99999de.......
            .................f299d99d99e.......
            .................f29d99999ded......
            .................f222999992f2......
            .................f222222ffeee2ee...
            .......feeeefee22f22d11f2ffffffe...
            ....f222222222222f22d1f2fffffffff..
            ....fff22ff222222f22122ffffffffffd.
            ....fff22ff222222f22dfffffffffffff.
            ....5fffffff22222f22f2fffff555effff
            ....fffffffff2222f22fffffe5eee45fff
            2222ffffffffff222fff2ffff5e444ee5ff
            222ffff55ffffff222222fff5e45555e5ff
            .22fff5e4e5ffff222222fff5e45e4544ef
            ....ffe5554ffffff2ff2fff5e45555e4ff
            ....ffe5544fff...2..2.fff5e4554e5ff
            ....ff5e4e5fff...2222..ff54eeee5fff
            ....fffe5ffff...........fff5555fff.
            .....fffffff.............ffffffff..
            .......ffff...............fffff....
            `,img`
            ...............5d122f22222f2.......
            .................ffffffffff2f......
            .................f29d99999de.......
            .................f299d99d99e.......
            .................f29d99999ded......
            .................f222999992f2......
            .................f222222ffeee2ee...
            .......feeeefee22f22d11f2ffffffe...
            ....f222222222222f22d1f2fffffffff..
            ....fff22ff222222f22122ffffffffffd.
            ....fff22ff222222f22dfffffffffffff.
            ....5fffffff22222f22f2fffff555fffff
            ....fffffffff2222f22fffff55eee5efff
            2222ffffffffff222fff2ffff4e444e5fff
            222ffff5445ffff222222fff5e45554e5ff
            .22ffffe54effff222222fff5e55e54e5ff
            ....ff545545fffff2ff2fff5e55454e5ff
            ....ff5e55eeff...2..2.ff5e4555e4eff
            ....fff5ee5fff...2222..ff5ee4ee5fff
            ....fffffffff...........ff54455fff.
            .....fffffff.............fffeffff..
            .......ffff...............fffff....
            `],
        250,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, traktor2)
    animation.stopAnimation(animation.AnimationTypes.All, Gardener)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, traktor2)
    animation.stopAnimation(animation.AnimationTypes.All, Gardener)
})
function Level1 () {
    Gardener = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f e d d e f f f f . . 
        . f f d f 9 f d d f 9 f d f f . 
        . f d d d 1 f d d f 1 d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d 3 3 3 3 d d f . . . 
        . . 7 7 f 7 7 7 7 7 7 f 7 7 . . 
        . . d d f 7 7 7 7 7 7 f d d . . 
        . . d d f 7 7 8 8 7 7 f d d . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `, SpriteKind.Player)
    Gardener.vy = 20
    controller.moveSprite(Gardener, 30, 30)
    scene.cameraFollowSprite(Gardener)
    Animation = 0
    traktor2 = sprites.create(img`
        .......2f22222f221d5...............
        ......f2ffffffffff.................
        .......ed99999d92f.................
        .......e99d99d992f.................
        ......ded99999d92f.................
        ......2f299999222f.................
        ...ee2eeeff222222f.................
        ...effffff2f11d22f22eefeeeef.......
        ..fffffffff2f1d22f222222222222f....
        .dffffffffff22122f222222ff22fff....
        .fffffffffffffd22f222222ff22fff....
        ffff5555fffff2f22f22222fffffff5....
        ff54eeee5ffffff22f2222fffffffff....
        ff5e4554e5ffff2fff222ffffffffff2222
        f5e45555e4ffff222222fffff55fffff222
        f5e45e4544efff222222ffff5e4e5fff22.
        f5e45555e5ffff2ff2ffffffe5554ff....
        ff5e444ee5fff.2..2...fffe5544ff....
        ffe5eee45fff..2222...fff5e4e5ff....
        .fff555efff...........fffe5ffff....
        ..ffffffff.............fffffff.....
        ....fffff...............ffff.......
        `, SpriteKind.traktor)
    gård = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c4444444446622
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c22
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee22..7
        ....644444444c66f4e44e44e44e44ee66c44444442ee2.7
        .....64eee444c66f4e44e44e44e44ee66c444eee4622.7.
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6..7.76
        `, SpriteKind.hus)
    Points = 0
    animation.runImageAnimation(
    gård,
    [img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c4444444446622
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c22
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee22..7
        ....644444444c66f4e44e44e44e44ee66c44444442ee2.7
        .....64eee444c66f4e44e44e44e44ee66c444eee4622.7.
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c11eeeeeeeeeeeee..611c4444444446666
        666e2222222e4c164e44e44e44e44..e61c4e2222222e666
        666eeeeeeeee4c164e44e44e44e44..e61c4eeeeeeeee666
        666eddddddde4c664e4effffffe44..e66c4eddddddde666
        666edffdffde4c664effffffffff4..e66c4edffdffde666
        666edccdccde4c664effffffffffe..e66c4edccdccde666
        666eddddddde4c664eeeeeeeeeeee..e66c4eddddddde666
        c66edffdffde4c664e44e44e44e44..e66c4edffdffde66c
        c66edccdccde4c664e44e44e44e44..e66c4edccdccde66c
        cc66666666664c664e44e44e44fee..e66c46666666666cc
        .c66444444444c664e44e44e44fff..e66c4444444446622
        ..c64eee4eee4c664e44e44e44f44..e66c4eee4eee46c22
        ...c4eee4eee4c664e44e44e44eff..e66c4eee4eee22..7
        ....644444444c664e44e44e44e44..e66c44444442ee2.7
        .....64eee444c664e44e44e44e44..e66c444eee4622.7.
        ......6ccc666c664e44e44e44e44..e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eeeeeeeeeeee....611c4444444446666
        666e2222222e4c14e44e4e44e44....e61c4e2222222e666
        666eeeeeeeee4c14e44e4e44e44....e61c4eeeeeeeee666
        666eddddddde4c64e4efffffe44....e66c4eddddddde666
        666edffdffde4c64efffffffff4....e66c4edffdffde666
        666edccdccde4c64efffffffffe....e66c4edccdccde666
        666eddddddde4c64eeeeeeeeeee....e66c4eddddddde666
        c66edffdffde4c64e44e4e44e44....e66c4edffdffde66c
        c66edccdccde4c64e44e4e44e44....e66c4edccdccde66c
        cc66666666664c64e44e4e44fee....e66c46666666666cc
        .c66444444444c64e44e4e44fff....e66c4444444446622
        ..c64eee4eee4c64e44e4e44f44....e66c4eee4eee46c22
        ...c4eee4eee4c64e44e4e44eff....e66c4eee4eee22..7
        ....644444444c64e44e4e44e44....e66c44444442ee2.7
        .....64eee444c64e44e4e44e44....e66c444eee4622.7.
        ......6ccc666c64e44e4e44e44....e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eeeeeeee........611c4444444446666
        666e2222222e4c14e4e4e4e........e61c4e2222222e666
        666eeeeeeeee4c14e4e4e4e........e61c4eeeeeeeee666
        666eddddddde4c64eeffffe........e66c4eddddddde666
        666edffdffde4c64effffff........e66c4edffdffde666
        666edccdccde4c64effffff........e66c4edccdccde666
        666eddddddde4c64eeeeeee........e66c4eddddddde666
        c66edffdffde4c64e4e4e4e........e66c4edffdffde66c
        c66edccdccde4c64e4e4e4e........e66c4edccdccde66c
        cc66666666664c64e4e4e4f........e66c46666666666cc
        .c66444444444c64e4e4e4f........e66c4444444446622
        ..c64eee4eee4c64e4e4e4f........e66c4eee4eee46c22
        ...c4eee4eee4c64e4e4e4e........e66c4eee4eee22..7
        ....644444444c64e4e4e4e........e66c44444442ee2.7
        .....64eee444c64e4e4e4e........e66c444eee4622.7.
        ......6ccc666c64e4e4e4e........e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eeeee...........611c4444444446666
        666e2222222e4c14ee44...........e61c4e2222222e666
        666eeeeeeeee4c14ee44...........e61c4eeeeeeeee666
        666eddddddde4c64efff...........e66c4eddddddde666
        666edffdffde4c64efff...........e66c4edffdffde666
        666edccdccde4c64efff...........e66c4edccdccde666
        666eddddddde4c64eeee...........e66c4eddddddde666
        c66edffdffde4c64ee44...........e66c4edffdffde66c
        c66edccdccde4c64ee44...........e66c4edccdccde66c
        cc66666666664c64ee44...........e66c46666666666cc
        .c66444444444c64ee44...........e66c4444444446622
        ..c64eee4eee4c64ee44...........e66c4eee4eee46c22
        ...c4eee4eee4c64ee44...........e66c4eee4eee22..7
        ....644444444c64ee44...........e66c44444442ee2.7
        .....64eee444c64ee44...........e66c444eee4622.7.
        ......6ccc666c64ee44...........e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eee.............611c4444444446666
        666e2222222e4c14e4.............e61c4e2222222e666
        666eeeeeeeee4c14e4.............e61c4eeeeeeeee666
        666eddddddde4c64ef.............e66c4eddddddde666
        666edffdffde4c64ef.............e66c4edffdffde666
        666edccdccde4c64ef.............e66c4edccdccde666
        666eddddddde4c64ee.............e66c4eddddddde666
        c66edffdffde4c64e4.............e66c4edffdffde66c
        c66edccdccde4c64e4.............e66c4edccdccde66c
        cc66666666664c64e4.............e66c46666666666cc
        .c66444444444c64e4.............e66c4444444446622
        ..c64eee4eee4c64e4.............e66c4eee4eee46c22
        ...c4eee4eee4c64e4.............e66c4eee4eee22..7
        ....644444444c64e4.............e66c44444442ee2.7
        .....64eee444c64e4.............e66c444eee4622.7.
        ......6ccc666c64e4.............e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116ee............611c4444444446666
        666e2222222e4c16e4e............e61c4e2222222e666
        666eeeeeeeee4c16e4e............e61c4eeeeeeeee666
        666eddddddde4c66f4e............e66c4eddddddde666
        666edffdffde4c66f4e............e66c4edffdffde666
        666edccdccde4c66f4e............e66c4edccdccde666
        666eddddddde4c66f4e............e66c4eddddddde666
        c66edffdffde4c66e4e............e66c4edffdffde66c
        c66edccdccde4c66e4e............e66c4edccdccde66c
        cc66666666664c66e4e............e66c46666666666cc
        .c66444444444c66e4e............e66c4444444446622
        ..c64eee4eee4c66f4e............e66c4eee4eee46c22
        ...c4eee4eee4c66f4e............e66c4eee4eee22..7
        ....644444444c66f4e............e66c44444442ee2.7
        .....64eee444c66f4e............e66c444eee4622.7.
        ......6ccc666c66e4e............e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eee.............611c4444444446666
        666e2222222e4c14e4.............e61c4e2222222e666
        666eeeeeeeee4c14e4.............e61c4eeeeeeeee666
        666eddddddde4c64ef.............e66c4eddddddde666
        666edffdffde4c64ef.............e66c4edffdffde666
        666edccdccde4c64ef.............e66c4edccdccde666
        666eddddddde4c64ee.............e66c4eddddddde666
        c66edffdffde4c64e4.............e66c4edffdffde66c
        c66edccdccde4c64e4.............e66c4edccdccde66c
        cc66666666664c64e4.............e66c46666666666cc
        .c66444444444c64e4.............e66c4444444446622
        ..c64eee4eee4c64e4.............e66c4eee4eee46c22
        ...c4eee4eee4c64e4.............e66c4eee4eee22..7
        ....644444444c64e4.............e66c44444442ee2.7
        .....64eee444c64e4.............e66c444eee4622.7.
        ......6ccc666c64e4.............e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eeeee...........611c4444444446666
        666e2222222e4c14ee44...........e61c4e2222222e666
        666eeeeeeeee4c14ee44...........e61c4eeeeeeeee666
        666eddddddde4c64efff...........e66c4eddddddde666
        666edffdffde4c64efff...........e66c4edffdffde666
        666edccdccde4c64efff...........e66c4edccdccde666
        666eddddddde4c64eeee...........e66c4eddddddde666
        c66edffdffde4c64ee44...........e66c4edffdffde66c
        c66edccdccde4c64ee44...........e66c4edccdccde66c
        cc66666666664c64ee44...........e66c46666666666cc
        .c66444444444c64ee44...........e66c4444444446622
        ..c64eee4eee4c64ee44...........e66c4eee4eee46c22
        ...c4eee4eee4c64ee44...........e66c4eee4eee22..7
        ....644444444c64ee44...........e66c44444442ee2.7
        .....64eee444c64ee44...........e66c444eee4622.7.
        ......6ccc666c64ee44...........e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eeeeeeee........611c4444444446666
        666e2222222e4c14e4e4e4e........e61c4e2222222e666
        666eeeeeeeee4c14e4e4e4e........e61c4eeeeeeeee666
        666eddddddde4c64eeffffe........e66c4eddddddde666
        666edffdffde4c64effffff........e66c4edffdffde666
        666edccdccde4c64effffff........e66c4edccdccde666
        666eddddddde4c64eeeeeee........e66c4eddddddde666
        c66edffdffde4c64e4e4e4e........e66c4edffdffde66c
        c66edccdccde4c64e4e4e4e........e66c4edccdccde66c
        cc66666666664c64e4e4e4f........e66c46666666666cc
        .c66444444444c64e4e4e4f........e66c4444444446622
        ..c64eee4eee4c64e4e4e4f........e66c4eee4eee46c22
        ...c4eee4eee4c64e4e4e4e........e66c4eee4eee22..7
        ....644444444c64e4e4e4e........e66c44444442ee2.7
        .....64eee444c64e4e4e4e........e66c444eee4622.7.
        ......6ccc666c64e4e4e4e........e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c1eeeeeeeeeeee....611c4444444446666
        666e2222222e4c14e44e4e44e44....e61c4e2222222e666
        666eeeeeeeee4c14e44e4e44e44....e61c4eeeeeeeee666
        666eddddddde4c64e4efffffe44....e66c4eddddddde666
        666edffdffde4c64efffffffff4....e66c4edffdffde666
        666edccdccde4c64efffffffffe....e66c4edccdccde666
        666eddddddde4c64eeeeeeeeeee....e66c4eddddddde666
        c66edffdffde4c64e44e4e44e44....e66c4edffdffde66c
        c66edccdccde4c64e44e4e44e44....e66c4edccdccde66c
        cc66666666664c64e44e4e44fee....e66c46666666666cc
        .c66444444444c64e44e4e44fff....e66c4444444446622
        ..c64eee4eee4c64e44e4e44f44....e66c4eee4eee46c22
        ...c4eee4eee4c64e44e4e44eff....e66c4eee4eee22..7
        ....644444444c64e44e4e44e44....e66c44444442ee2.7
        .....64eee444c64e44e4e44e44....e66c444eee4622.7.
        ......6ccc666c64e44e4e44e44....e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c11eeeeeeeeeeeee..611c4444444446666
        666e2222222e4c164e44e44e44e44..e61c4e2222222e666
        666eeeeeeeee4c164e44e44e44e44..e61c4eeeeeeeee666
        666eddddddde4c664e4effffffe44..e66c4eddddddde666
        666edffdffde4c664effffffffff4..e66c4edffdffde666
        666edccdccde4c664effffffffffe..e66c4edccdccde666
        666eddddddde4c664eeeeeeeeeeee..e66c4eddddddde666
        c66edffdffde4c664e44e44e44e44..e66c4edffdffde66c
        c66edccdccde4c664e44e44e44e44..e66c4edccdccde66c
        cc66666666664c664e44e44e44fee..e66c46666666666cc
        .c66444444444c664e44e44e44fff..e66c4444444446622
        ..c64eee4eee4c664e44e44e44f44..e66c4eee4eee46c22
        ...c4eee4eee4c664e44e44e44eff..e66c4eee4eee22..7
        ....644444444c664e44e44e44e44..e66c44444442ee2.7
        .....64eee444c664e44e44e44e44..e66c444eee4622.7.
        ......6ccc666c664e44e44e44e44..e66c666ccc6..7.76
        `,img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
        c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
        cc66666666664c66e4e44e44e44feeee66c46666666666cc
        .c66444444444c66e4e44e44e44ffffe66c4444444446622
        ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c22
        ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee22..7
        ....644444444c66f4e44e44e44e44ee66c44444442ee2.7
        .....64eee444c66f4e44e44e44e44ee66c444eee4622.7.
        ......6ccc666c66e4e44e44e44e44ee66c666ccc6..7.76
        `],
    70,
    false
    )
    tiles.setCurrentTilemap(tilemap`StartLevel`)
    tiles.placeOnTile(Gardener, tiles.getTileLocation(1, 2))
    tiles.placeOnTile(traktor2, tiles.getTileLocation(7, 1))
    tiles.placeOnTile(gård, tiles.getTileLocation(1, 1))
    for (let index = 0; index < 16; index++) {
        for (let index2 = 0; index2 <= 14; index2++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(col, index2), assets.tile`myTile`)) {
                bomuld_plante = sprites.create(img`
                    1 1 1 e e f . . 
                    . 1 e e f . . . 
                    . f e f . . 1 1 
                    . f e f . 1 1 1 
                    . . f e 1 1 1 . 
                    . . . f e 1 . . 
                    1 1 . . f e f . 
                    1 1 1 f e e f . 
                    . f f e e f . . 
                    . f e e f 1 1 . 
                    . f e f . 1 1 . 
                    . f e f . 1 1 1 
                    . . f e f . 1 1 
                    . . . f e f . . 
                    . . . 1 e e f . 
                    `, SpriteKind.plante)
                tiles.placeOnTile(bomuld_plante, tiles.getTileLocation(col, index2))
                animation.runImageAnimation(
                bomuld_plante,
                [img`
                    . 1 1 1 e e f . . . 
                    . . 1 e e f . . . . 
                    . . f e f . . 1 1 . 
                    . . f e f . 1 1 1 . 
                    . . . f e 1 1 1 . . 
                    . . . . f e 1 . . . 
                    . 1 1 . . f e f . . 
                    . 1 1 1 f e e f . . 
                    . . f f e e f . . . 
                    . . f e e f 1 1 . . 
                    . . f e f . 1 1 . . 
                    . . f e f . 1 1 1 . 
                    . . . f e f . 1 1 . 
                    . . . . f e f . . . 
                    . . . . 1 e e f . . 
                    `,img`
                    . . 1 1 1 e e f . . 
                    . . . 1 e e f . . . 
                    . . . f e f . . 1 1 
                    . . . f e f . 1 1 1 
                    . . . . f e 1 1 1 . 
                    . . . . . f e 1 . . 
                    . 1 1 1 1 f e f . . 
                    . . 1 1 f e e f . . 
                    . . f f e e f . 1 . 
                    . . f e e f 1 1 1 . 
                    . . f e f . 1 1 . . 
                    . . f e f . 1 1 . . 
                    . . . f e f . . . . 
                    . . . . f e f . . . 
                    . . . . 1 e e f . . 
                    `,img`
                    . 1 1 1 e e f . . . 
                    . . 1 e e f . . . . 
                    . . f e f . . 1 1 . 
                    . . f e f . 1 1 1 . 
                    . . . f e 1 1 1 . . 
                    . . . . f e 1 . . . 
                    . 1 1 . . f e f . . 
                    . 1 1 1 f e e f . . 
                    . . f f e e f . . . 
                    . . f e e f 1 1 . . 
                    . . f e f . 1 1 . . 
                    . . f e f . 1 1 1 . 
                    . . . f e f . 1 1 . 
                    . . . . f e f . . . 
                    . . . . 1 e e f . . 
                    `,img`
                    1 1 1 e e f . . . . 
                    . 1 e e f . . . . . 
                    . f e f 1 1 . . . . 
                    . f e f 1 1 1 . . . 
                    . . f e 1 1 . . . . 
                    . . . f e 1 . . . . 
                    . 1 1 . f e f . . . 
                    1 1 1 1 f e e f . . 
                    . 1 f f e e f . . . 
                    . . f e e f 1 1 . . 
                    . . f e f 1 1 1 . . 
                    . . f e f 1 1 1 . . 
                    . . . f e f . 1 . . 
                    . . . . f e f . . . 
                    . . . . 1 e e f . . 
                    `],
                1000,
                true
                )
            }
        }
        col += 1
    }
    pause(1000)
    Gardener.sayText("velkommen", 2000, false)
}
function level_styrer () {
    if (level == 1) {
        lvl_2()
    } else if (level == 2) {
        sprites.destroy(traktor2)
    } else {
        Level1()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gardener,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 7 7 7 7 f 7 f . . . 
        . . . f f 7 7 7 7 f 7 7 7 f . . 
        . . . f 7 7 7 f f 7 7 7 7 f . . 
        . . . f f f f 7 7 7 7 7 7 7 f . 
        . . . f 7 7 7 7 f f f f 7 7 f . 
        . . f f f f f f f d d d f f f . 
        . . f f e d d e 9 f d d d d f . 
        . . f e e d d d 1 f d d d f . . 
        . . . f e e e d d d d d f . . . 
        . . . . f f e e 3 3 3 e f . . . 
        . . . . . f d d e 7 7 7 f . . . 
        . . . . . f d d e 7 7 7 f . . . 
        . . . . . f e e f 7 8 8 f . . . 
        . . . . . . f f e f f f . . . . 
        . . . . . . . e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 7 7 7 7 f 7 f . . . 
        . . . f f 7 7 7 7 f 7 7 7 f . . 
        . . . f 7 7 7 f f 7 7 7 7 f . . 
        . . . f f f f 7 7 7 7 7 7 7 f . 
        . . . f 7 7 7 7 f f f f 7 7 f . 
        . . f f f f f f f e d d f f f . 
        . . f f e d d e 9 f d d d d f . 
        . . f e e d d d 1 f d d d f . . 
        . . . f e e e e e 3 3 3 f . . . 
        . . . . . f 7 d d e 7 7 f . . . 
        . . . . . f e d d e 7 7 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f e f f f f e e f . . 
        . . . . . e e . . . e e e . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 7 7 7 7 f 7 f . . . 
        . . . f f 7 7 7 7 f 7 7 7 f . . 
        . . . f 7 7 7 f f 7 7 7 7 f . . 
        . . . f f f f 7 7 7 7 7 7 7 f . 
        . . . f 7 7 7 7 f f f f 7 7 f . 
        . . f f f f f f f e d d f f f . 
        . . f f d d d e 9 f d d d d f . 
        . . f e d d d d 1 f d d d f . . 
        . . . f e d d d d d d d f . . . 
        . . . . f f e e 3 3 3 e f . . . 
        . . . . . f d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 7 8 8 f . . . 
        . . . . . . f f e f f f . . . . 
        . . . . . . . e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 7 7 7 7 f 7 f . . . 
        . . . f f 7 7 7 7 f 7 7 7 f . . 
        . . . f 7 7 7 f f 7 7 7 7 f . . 
        . . . f f f f 7 7 7 7 7 7 7 f . 
        . . . f 7 7 7 7 f f f f 7 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f d d d e 9 f d d d d f . 
        . . f e d d d d 1 f d d d f . . 
        . . . f e e e d d d d d f . . . 
        . . . . f d d e 3 3 3 e f . . . 
        . . . . f d d e 7 7 7 7 f . . . 
        . . . . f e e f 7 7 5 5 f f . . 
        . . . . f f e f f f f e e f . . 
        . . . . . e e . . . e e e . . . 
        `],
    500,
    true
    )
    if (Animation == 1) {
        traktor2.setImage(img`
            .......2f22222f221d5...............
            ......f2ffffffffff.................
            .......ed99999d92f.................
            .......e99d99d992f.................
            ......ded99999d92f.................
            ......2f299999222f.................
            ...ee2eeeff222222f.................
            ...effffff2f11d22f22eefeeeef.......
            ..fffffffff2f1d22f222222222222f....
            .dffffffffff22122f222222ff22fff....
            .fffffffffffffd22f222222ff22fff....
            ffff5555fffff2f22f22222fffffff5....
            ff54eeee5ffffff22f2222fffffffff....
            ff5e4554e5ffff2fff222ffffffffff2222
            f5e45555e4ffff222222fffff55fffff222
            f5e45e4544efff222222ffff5e4e5fff22.
            f5e45555e5ffff2ff2ffffffe5554ff....
            ff5e444ee5fff.2..2...fffe5544ff....
            ffe5eee45fff..2222...fff5e4e5ff....
            .fff555efff...........fffe5ffff....
            ..ffffffff.............fffffff.....
            ....fffff...............ffff.......
            `)
        animation.runImageAnimation(
        traktor2,
        [img`
            .......2f22222f221d5...............
            ......f2ffffffffff.................
            .......ed99999d92f.................
            .......e99d99d992f.................
            ......ded99999d92f.................
            ......2f299999222f.................
            ...ee2eeeff222222f.................
            ...effffff2f11d22f22eefeeeef.......
            ..fffffffff2f1d22f222222222222f....
            .dffffffffff22122f222222ff22fff....
            .fffffffffffffd22f222222ff22fff....
            fffff5555ffff2f22f22222fffffff5....
            fff54eeee5fffff22f2222fffffffff....
            fff5e4554e5fff2fff222ffffffffff2222
            ff5e45555e4fff222222fffff55fffff222
            ff5e45e4544eff222222ffff5e4e5fff22.
            ff5e45555e5fff2ff2ffffffe5554ff....
            fff5e444ee5ff.2..2...fffe5544ff....
            fffe5eee45ff..2222...fff5e4e5ff....
            .ffff555eff...........fffe5ffff....
            ..ffffffff.............fffffff.....
            ....fffff...............ffff.......
            `,img`
            .......2f22222f221d5...............
            ......f2ffffffffff.................
            .......ed99999d92f.................
            .......e99d99d992f.................
            ......ded99999d92f.................
            ......2f299999222f.................
            ...ee2eeeff222222f.................
            ...effffff2f11d22f22eefeeeef.......
            ..fffffffff2f1d22f222222222222f....
            .dffffffffff22122f222222ff22fff....
            .fffffffffffffd22f222222ff22fff....
            fffff555fffff2f22f22222fffffff5....
            fffe5eee55fffff22f2222fffffffff....
            fff5e444e4ffff2fff222ffffffffff2222
            ff5e45554e5fff222222ffff5ee5ffff222
            ff5e45e55e5fff222222fffee55e5fff22.
            ff5e45455e5fff2ff2fffff545545ff....
            ffe4e5554e5ff.2..2...fffe45efff....
            fff5ee4ee5ff..2222...fff5445fff....
            .fff55445ff...........fffffffff....
            ..ffffefff.............fffffff.....
            ....fffff...............ffff.......
            `,img`
            .......2f22222f221d5...............
            ......f2ffffffffff.................
            .......ed99999d92f.................
            .......e99d99d992f.................
            ......ded99999d92f.................
            ......2f299999222f.................
            ...ee2eeeff222222f.................
            ...effffff2f11d22f22eefeeeef.......
            ..fffffffff2f1d22f222222222222f....
            .dffffffffff22122f222222ff22fff....
            .fffffffffffffd22f222222ff22fff....
            ffffe555fffff2f22f22222fffffff5....
            fff54eee5efffff22f2222fffffffff....
            ff5ee444e5ffff2fff222ffffffffff2222
            ff5e55554e5fff222222ffffff55ffff222
            fe4454e54e5fff222222ffff5e4e5fff22.
            ff4e55554e5fff2ff2ffffff4555eff....
            ff5e4554e5fff.2..2...fff4455eff....
            fff5eeee45ff..2222...fff5e4e5ff....
            .fff5555fff...........ffff5efff....
            ..ffffffff.............fffffff.....
            ....fffff...............ffff.......
            `,img`
            .......2f22222f221d5...............
            ......f2ffffffffff.................
            .......ed99999d92f.................
            .......e99d99d992f.................
            ......ded99999d92f.................
            ......2f299999222f.................
            ...ee2eeeff222222f.................
            ...effffff2f11d22f22eefeeeef.......
            ..fffffffff2f1d22f222222222222f....
            .dffffffffff22122f222222ff22fff....
            .fffffffffffffd22f222222ff22fff....
            fffff555fffff2f22f22222fffffff5....
            fffe5eee55fffff22f2222fffffffff....
            fff5e444e4ffff2fff222ffffffffff2222
            ff5e45554e5fff222222ffff5445ffff222
            ff5e45e55e5fff222222ffffe45effff22.
            ff5e45455e5fff2ff2fffff545545ff....
            ffe4e5554e5ff.2..2...ffee55e5ff....
            fff5ee4ee5ff..2222...fff5ee5fff....
            .fff55445ff...........fffffffff....
            ..ffffefff.............fffffff.....
            ....fffff...............ffff.......
            `],
        250,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, traktor2)
    animation.stopAnimation(animation.AnimationTypes.All, Gardener)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Gardener,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f e d d e f f f f . . 
        . f f d f 9 f d d f 9 f d f f . 
        . f d d d 1 f d d f 1 d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d 3 3 3 3 d d f . . . 
        . . 7 7 f 7 7 7 7 7 7 f 7 7 . . 
        . . d d f 7 7 7 7 7 7 f d d . . 
        . . d d f 7 7 8 8 7 7 f d d . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . f f 7 7 f f f f f f 7 7 f f . 
        . f f f f f e d d e f f f f f . 
        . . f d f 9 f d d f 9 f d f . . 
        . . f d d 1 f d d f 1 d d f . . 
        . . . f d d 3 3 3 3 d e f e . . 
        . . f e f 7 7 7 7 e d d d e . . 
        . . e d f 7 7 7 7 e d d e . . . 
        . . . . f 7 7 8 8 e e e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . e e e . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f f 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f e d d e f f f f . . 
        . f f d f 9 f d d f 9 f d f f . 
        . f d d d 1 f d d f 1 d d d f . 
        . . f d d d d d d d d d d f . . 
        . . . f d d 3 3 3 3 d d f . . . 
        . . e e f 7 7 7 7 7 7 f e e . . 
        . . d d f 7 7 7 7 7 7 f d d . . 
        . . d d f 7 7 8 8 7 7 f d d . . 
        . . . . . e e e e e e . . . . . 
        . . . . . e e . . e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 7 7 7 7 7 7 f f f . . 
        . . f 7 7 7 7 7 7 7 7 7 f f . . 
        . f f 7 7 f f f f f f 7 7 f f . 
        . f f f f f e d d e f f f f f . 
        . . f d f 9 f d d f 9 f d f . . 
        . . f d d 1 f d d f 1 d d f . . 
        . . e f d d 3 3 3 3 d d f . . . 
        . . e d f f e 7 7 7 7 f e e . . 
        . . . e d d e 7 7 7 7 f d e . . 
        . . . . e e f 8 8 7 7 f . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . . . . . e e e . . . . 
        `],
    500,
    true
    )
    if (Animation == 1) {
        traktor2.setImage(img`
            ffff.............ffff
            eeeeffdddddddddffeeee
            2222cfeeeeeeeeefc2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            eeeec22222222222ceeee
            eeeecf222222222fceeee
            eebbb22222222222bbbee
            eefff22fffffff22fffee
            .cfcf2fcccccccf2fcfc.
            .bdcb2fcccccccf2bcdb.
            .bfcf2fcccccccf2fcfb.
            .bbcc2ccccccccc2ccbb.
            ....22bfffffffb22....
            .fff.bbcccccccbb.fff.
            .ffc.bb2222222bb.cfc.
            .fcf.bb2222222bb.cffd
            dcffcbb2222222bbcfcfd
            dcfccbb2222222bbcffcd
            dfcfcbb2222222bbcfcfd
            dcffcbb2222222bbcffcd
            dcffcbb2222222bbcffcd
            .fcf.bb2222222bb.fcf.
            .fff.bb2222222bb.fff.
            ..cd.bb2222222bb.dc..
            .....bb2222222bb.....
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            ......bcccccccb......
            ....bbbfcccccfbbb....
            `)
        animation.runImageAnimation(
        traktor2,
        [img`
            ffff.............ffff
            eeeeffdddddddddffeeee
            2222cfeeeeeeeeefc2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            eeeec22222222222ceeee
            eeeecf222222222fceeee
            eebbb22222222222bbbee
            eefff22fffffff22fffee
            .cfcf2fcccccccf2fcfc.
            .bdcb2fcccccccf2bcdb.
            .bfcf2fcccccccf2fcfb.
            .bbcc2ccccccccc2ccbb.
            ....22bfffffffb22....
            .fff.bbcccccccbb.fff.
            .ffc.bb2222222bb.cfc.
            .fcf.bb2222222bb.cffd
            dcffcbb2222222bbcfcfd
            dcfccbb2222222bbcffcd
            dfcfcbb2222222bbcfcfd
            dcffcbb2222222bbcffcd
            dcffcbb2222222bbcffcd
            .fcf.bb2222222bb.fcf.
            .fff.bb2222222bb.fff.
            ..cd.bb2222222bb.dc..
            .....bb2222222bb.....
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            ......bcccccccb......
            ....bbbfcccccfbbb....
            `,img`
            ffff.............ffff
            eeeeffdddddddddffeeee
            2222cfeeeeeeeeefc2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            eeeec22222222222ceeee
            eeeecf222222222fceeee
            eebbb22222222222bbbee
            eefff22fffffff22fffee
            .cfcf2fcccccccf2fcfc.
            .bdcb2fcccccccf2bcdb.
            .bfcf2fcccccccf2fcfb.
            .bbcc2ccccccccc2ccbb.
            ....22bfffffffb22....
            .fff.bbcccccccbb.fff.
            .fff.bb2222222bb.fff.
            .fcf.bb2222222bb.fcfd
            dcffcbb2222222bbcffcd
            dcffcbb2222222bbcffcd
            dfcfcbb2222222bbcfcfd
            dcfccbb2222222bbcffcd
            dcffcbb2222222bbcfcfd
            .fcf.bb2222222bb.cff.
            .ffc.bb2222222bb.cfc.
            ..cd.bb2222222bb.dc..
            .....bb2222222bb.....
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            ......bcccccccb......
            ....bbbfcccccfbbb....
            `,img`
            ffff.............ffff
            eeeeffdddddddddffeeee
            2222cfeeeeeeeeefc2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            eeeec22222222222ceeee
            eeeecf222222222fceeee
            eebbb22222222222bbbee
            eefff22fffffff22fffee
            .cfcf2fcccccccf2fcfc.
            .bdcb2fcccccccf2bcdb.
            .bfcf2fcccccccf2fcfb.
            .bbcc2ccccccccc2ccbb.
            ....22bfffffffb22....
            .fff.bbcccccccbb.fff.
            .cff.bb2222222bb.cfc.
            .fcf.bb2222222bb.ffcd
            dffccbb2222222bbcfcfd
            dcfccbb2222222bbccffd
            dfcfcbb2222222bbcfcfd
            dffccbb2222222bbccffd
            dffccbb2222222bbccffd
            .fcf.bb2222222bb.fcf.
            .fff.bb2222222bb.fff.
            ..cd.bb2222222bb.dc..
            .....bb2222222bb.....
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            ......bcccccccb......
            ....bbbfcccccfbbb....
            `,img`
            ffff.............ffff
            eeeeffdddddddddffeeee
            2222cfeeeeeeeeefc2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222c22222222222c2222
            2222e22222222222e2222
            2222c22222222222c2222
            2222c22222222222c2222
            eeeec22222222222ceeee
            eeeecf222222222fceeee
            eebbb22222222222bbbee
            eefff22fffffff22fffee
            .cfcf2fcccccccf2fcfc.
            .bdcb2fcccccccf2bcdb.
            .bfcf2fcccccccf2fcfb.
            .bbcc2ccccccccc2ccbb.
            ....22bfffffffb22....
            .fff.bbcccccccbb.fff.
            .fff.bb2222222bb.fff.
            .fcf.bb2222222bb.fcfd
            dffccbb2222222bbccffd
            dffccbb2222222bbccffd
            dfcfcbb2222222bbcfcfd
            dcfccbb2222222bbccffd
            dffccbb2222222bbcfcfd
            .fcf.bb2222222bb.ffc.
            .cff.bb2222222bb.cfc.
            ..cd.bb2222222bb.dc..
            .....bb2222222bb.....
            ......b2222222b......
            ......b2222222b......
            ......b2222222b......
            ......bcccccccb......
            ....bbbfcccccfbbb....
            `],
        250,
        true
        )
    }
})
function lvl_2 () {
    info.setScore(0)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
        99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
        99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
        9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
        999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
        99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
        9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
        1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
        d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
        dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
        ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
        d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
        ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
        11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
        11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
        11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
        111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
        d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
        11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
        ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
        bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
        bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setCurrentTilemap(tilemap`level14`)
    pause(100)
    lastbil = sprites.create(img`
        .ffffffffffffffff.............
        f7777fffffff77777f.fffffffff..
        f777f7777777f7777f.f2229999f..
        f77f7ffffff77f777f.f2222999f..
        f77f77f777777f777f.f2222999f..
        f77f777f77777f777f.f3333999f..
        f77f7777f7777f777f.f2223999f..
        f77f77777f777f777f.f2223999f..
        f77f7ffffff77f777f.f2223222ff.
        f77f777777777f777f.f22232333ff
        f777f7777777f7777f.f22333222f.
        f7777fffffff77777f.f22233333f.
        f7777777777777777f.f33333222f.
        f7777777777777777bfb22222333f.
        f7777777777777777bbb22222222f.
        .ffff7fff777777fffbb22fff222f.
        ..f1fff1ffffffff1ffffff1fffff.
        ..fff.fff......fff....fff.....
        `, SpriteKind.Player)
    lastbil.setScale(0.5, ScaleAnchor.Middle)
    lastbil.setStayInScreen(true)
    lastbil.setPosition(21, 60)
    controller.moveSprite(lastbil, 0, 42)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.traktor, function (sprite, otherSprite) {
    sprites.destroy(Gardener)
    Animation += 1
    controller.moveSprite(traktor2, 40, 40)
    tiles.setCurrentTilemap(tilemap`Trakt`)
    scene.cameraFollowSprite(traktor2)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let BundBil: Image = null
let Topbil: Image = null
let Gap = 0
let bomuld_plante: Sprite = null
let col = 0
let Points = 0
let gård: Sprite = null
let traktor2: Sprite = null
let Animation = 0
let Gardener: Sprite = null
let lastbil: Sprite = null
let level = 0
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.showLongText("Dette spil er lavet for at oplyse omkring bomuldsindustrien ", DialogLayout.Bottom)
game.showLongText("Du vil blive ført gennem fem faser af bomulds livscyklus", DialogLayout.Bottom)
game.showLongText("Så hop med ind i bomuldens univers", DialogLayout.Bottom)
level = 1
level_styrer()
// Tyngdekraft
lastbil.ay = 200
game.onUpdate(function () {
    if (lastbil.y < 18) {
        lastbil.y = 18
    }
    if (lastbil.y < 0) {
        lastbil.y = 0
    }
    if (lastbil.y > screen.height) {
        lastbil.y = screen.height
    }
})
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1500, function () {
    Gap = randint(0, 3)
    if (Gap == 0) {
        Topbil = img`
            .......eeeee....................
            .....ee22222e...................
            ....ee2222222e..................
            ....e94442224be.................
            ..ee9944442249be................
            .e2299444442499e2...............
            e22299244444299e2...............
            e22299eeeeeee99e2...............
            e2229bebbbebeb9e2...............
            e2eeeebbbbebbebe2...............
            ee33ee2222e22eee2...............
            e33eeeeeeeeeeeee2...............
            eeeeeeeeeeeeeeee2...............
            eeeefffeeeefffee2...............
            .eefffbfeefffbf.................
            ....cbb....cbb..................
            ......eeeee.....................
            ....ee22222e....................
            ...ee2222222e...................
            ...e94222224be..................
            .ee9944222249be.................
            e2299444222499e2................
            22299244444299e2................
            22299eeeeeee99e2................
            2229bebbbebeb9e2................
            2eeeebbbbebbeb22................
            e33ee2222e22ee22................
            33eeeeeeeeeeee22................
            eeeeeeeeeeeeee22................
            eeefffeeeefffe22................
            eefbccfeefbccf..................
            ...bbf....bbf...................
            `
        BundBil = img`
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            ................................................................
            .............................66666666...........................
            ............................6c66666696..........................
            ...........................6cc6666669c6.........................
            .........................d69cc6999999cc.........................
            ........................d669cb88888886c.........................
            ........................6669b88bbb8bb86.........................
            ........................666668bbbb8bbb8.........................
            ........................666686666686668.........................
            ........................6dd68f888f88888.........................
            ........................dd6888f88f88888.........................
            ........................8888888fff88888.........................
            ........................8888fff8888ffff.........................
            ..........................8fffff88fffff.........................
            ...........................ffff....fff..........................
            ................................................................
            ................................................................
            ................................................................
            .............................66666666...........................
            ............................6c66666696..........................
            ...........................6cc6666669c6.........................
            .........................d69cc6999999cc.........................
            ........................d669cb88888886c.........................
            ........................6669b88bbb8bb86.........................
            ........................666668bbbb8bbb8.........................
            ........................666686666686668.........................
            ........................6dd68f888f88888.........................
            ........................dd6888f88f88888.........................
            ........................8888888fff88888.........................
            ........................8888fff8888ffff.........................
            ..........................8fffff88fffff.........................
            ...........................ffff....fff..........................
            ................................................................
            .............................66666666...........................
            ............................6c66666696..........................
            ...........................6cc6666669c6.........................
            .........................d69cc6999999cc.........................
            ........................d669cb88888886c.........................
            ........................6669b88bbb8bb86.........................
            ........................666668bbbb8bbb8.........................
            ........................666686666686668.........................
            ........................6dd68f888f88888.........................
            ........................dd6888f88f88888.........................
            ........................8888888fff88888.........................
            ........................8888fff8888ffff.........................
            ..........................8fffff88fffff.........................
            ...........................ffff....fff..........................
            `
    } else if (Gap == 1) {
        Topbil = img`
            ......66666666..................
            .....6c66666696.................
            ....6cc6666669c6................
            ..d69cc6999999cc................
            .d669cb88888886c................
            .6669b88bbb8bb86................
            .666668bbbb8bbb8................
            .666686666686668................
            .6dd68f888f88888................
            .dd6888f88f88888................
            .8888888fff88888................
            .8888fff8888ffff................
            ...8fffff88fffff................
            ....ffff....fff.................
            ................................
            ................................
            ................................
            ......66666666..................
            .....6c66666696.................
            ....6cc6666669c6................
            ..d69cc6999999cc................
            .d669cb88888886c................
            .6669b88bbb8bb86................
            .666668bbbb8bbb8................
            .666686666686668................
            .6dd68f888f88888................
            .dd6888f88f88888................
            .8888888fff88888................
            .8888fff8888ffff................
            ...8fffff88fffff................
            ....ffff....fff.................
            ................................
            ......66666666..................
            .....6c66666696.................
            ....6cc6666669c6................
            ..d69cc6999999cc................
            .d669cb88888886c................
            .6669b88bbb8bb86................
            .666668bbbb8bbb8................
            .666686666686668................
            .6dd68f888f88888................
            .dd6888f88f88888................
            .8888888fff88888................
            .8888fff8888ffff................
            ...8fffff88fffff................
            ....ffff....fff.................
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
            ................................
            ................................
            `
        BundBil = img`
            .......eeeee....................
            .....ee22222e...................
            ....ee2222222e..................
            ....e94442224be.................
            ..ee9944442249be................
            .e2299444442499e2...............
            e22299244444299e2...............
            e22299eeeeeee99e2...............
            e2229bebbbebeb9e2...............
            e2eeeebbbbebbebe2...............
            ee33ee2222e22eee2...............
            e33eeeeeeeeeeeee2...............
            eeeeeeeeeeeeeeee2...............
            eeeefffeeeefffee2...............
            .eefffbfeefffbf.................
            ....cbb....cbb..................
            ......eeeee.....................
            ....ee22222e....................
            ...ee2222222e...................
            ...e94222224be..................
            .ee9944222249be.................
            e2299444222499e2................
            22299244444299e2................
            22299eeeeeee99e2................
            2229bebbbebeb9e2................
            2eeeebbbbebbeb22................
            e33ee2222e22ee22................
            33eeeeeeeeeeee22................
            eeeeeeeeeeeeee22................
            eeefffeeeefffe22................
            eefbccfeefbccf..................
            ...bbf....bbf...................
            `
    } else if (Gap == 2) {
        Topbil = img`
            .......eeeee....................
            .....ee22222e...................
            ....ee2222222e..................
            ....e94442224be.................
            ..ee9944442249be................
            .e2299444442499e2...............
            e22299244444299e2...............
            e22299eeeeeee99e2...............
            e2229bebbbebeb9e2...............
            e2eeeebbbbebbebe2...............
            ee33ee2222e22eee2...............
            e33eeeeeeeeeeeee2...............
            eeeeeeeeeeeeeeee2...............
            eeeefffeeeefffee2...............
            .eefffbfeefffbf.................
            ....cbb....cbb..................
            ......eeeee.....................
            ....ee22222e....................
            ...ee2222222e...................
            ...e94222224be..................
            .ee9944222249be.................
            e2299444222499e2................
            22299244444299e2................
            22299eeeeeee99e2................
            2229bebbbebeb9e2................
            2eeeebbbbebbeb22................
            e33ee2222e22ee22................
            33eeeeeeeeeeee22................
            eeeeeeeeeeeeee22................
            eeefffeeeefffe22................
            eefbccfeefbccf..................
            ...bbf....bbf...................
            ......eeeee.....................
            ....ee22222e....................
            ...ee2222222e...................
            ...e94442224be..................
            .ee9944442249be.................
            e2299444442499e2................
            22299244444299e2................
            22299eeeeeee99e2................
            2229bebbbebeb9e2................
            2eeeebbbbebbebe2................
            e33ee2222e22eee2................
            33eeeeeeeeeeeee2................
            eeeeeeeeeeeeeee2................
            eeefffeeeefffee2................
            eefffbfeefffbf..................
            ...cbb....cbb...................
            .....eeeee......................
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
            `
        BundBil = img`
            ................................
            ......33333333..................
            .....3c333333d3.................
            ....3cc333333dc3................
            ..d3dcc3ddddddcc................
            .d33dcbaaaaaaa3c................
            .333dbaabbbabba3................
            .33333abbbbabbba................
            .3333a33333a333a................
            .3dd3afaaafaaaaa................
            .dd3aaafaafaaaaa................
            .aaaaaaafffaaaaa................
            .aaaafffaaaaffff................
            ...afffffaafffff................
            ....ffff....fff.................
            ................................
            ................................
            ................................
            .....33333333...................
            ....3c333333d3..................
            ...3cc333333dc3.................
            .d3dcc3ddddddcc.................
            d33dcbaaaaaaa3c.................
            333dbaabbbabba3.................
            33333abbbbabbba.................
            3333a33333a333a.................
            3dd3afaaafaaaaa.................
            dd3aaafaafaaaaa.................
            aaaaaaafffaaaaa.................
            aaaafffaaaaffff.................
            ..afffffaafffff.................
            ...ffff....fff..................
            `
    } else if (Gap == 3) {
        Topbil = img`
            ................................
            ......66666666..................
            .....6c66666696.................
            ....6cc6666669c6................
            ..d69cc6999999cc................
            .d669cb88888886c................
            .6669b88bbb8bb86................
            .666668bbbb8bbb8................
            .666686666686668................
            .6dd68f888f88888................
            .dd6888f88f88888................
            .8888888fff88888................
            .8888fff8888ffff................
            ...8fffff88fffff................
            ....ffff....fff.................
            ................................
            ................................
            ................................
            ......66666666..................
            .....6c66666696.................
            ....6cc6666669c6................
            ..d69cc6999999cc................
            .d669cb88888886c................
            .6669b88bbb8bb86................
            .666668bbbb8bbb8................
            .666686666686668................
            .6dd68f888f88888................
            .dd6888f88f88888................
            .8888888fff88888................
            .8888fff8888ffff................
            ...8fffff88fffff................
            ....ffff....fff.................
            `
        BundBil = img`
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
            ................................
            ................................
            ................................
            .......33333333.................
            ......3c333333d3................
            .....3cc333333dc3...............
            ...d3dcc3ddddddcc...............
            ..d33dcbaaaaaaa3c...............
            ..333dbaabbbabba3...............
            ..33333abbbbabbba...............
            ..3333a33333a333a...............
            ..3dd3afaaafaaaaa...............
            ..dd3aaafaafaaaaa...............
            ..aaaaaaafffaaaaa...............
            ..aaaafffaaaaffff...............
            ....afffffaafffff...............
            .....ffff....fff................
            ................................
            ................................
            ................................
            ......33333333..................
            .....3c333333d3.................
            ....3cc333333dc3................
            ..d3dcc3ddddddcc................
            .d33dcbaaaaaaa3c................
            .333dbaabbbabba3................
            .33333abbbbabbba................
            .3333a33333a333a................
            .3dd3afaaafaaaaa................
            .dd3aaafaafaaaaa................
            .aaaaaaafffaaaaa................
            .aaaafffaaaaffff................
            ...afffffaafffff................
            ....ffff....fff.................
            ......33333333..................
            .....3c333333d3.................
            ....3cc333333dc3................
            ..d3dcc3ddddddcc................
            .d33dcbaaaaaaa3c................
            .333dbaabbbabba3................
            .33333abbbbabbba................
            .3333a33333a333a................
            .3dd3afaaafaaaaa................
            .dd3aaafaafaaaaa................
            .aaaaaaafffaaaaa................
            .aaaafffaaaaffff................
            ...afffffaafffff................
            ....ffff....fff.................
            `
    }
    projectile = sprites.createProjectileFromSide(Topbil, -45, 0)
    projectile.top = 0
    projectile2 = sprites.createProjectileFromSide(BundBil, -45, 0)
    projectile2.bottom = scene.screenHeight()
})
