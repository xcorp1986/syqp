(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/components/MahjongManger.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'baa6diT1/ZD/rHD/igYzXco', 'MahjongManger', __filename);
// scripts/components/MahjongManger.js

"use strict";

var mahjongSprites = [];

cc.Class({
    extends: cc.Component,

    properties: {
        leftAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },

        rightAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },

        bottomAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },

        bottomFoldAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },

        pengPrefabSelf: {
            default: null,
            type: cc.Prefab
        },

        pengPrefabLeft: {
            default: null,
            type: cc.Prefab
        },

        emptyAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },

        holdsEmpty: {
            default: [],
            type: [cc.SpriteFrame]
        },

        _sides: null,
        _pres: null,
        _foldPres: null
    },

    onLoad: function onLoad() {
        if (th == null) {
            return;
        }
        th.mahjongManager = this;

        this._sides = ["myself", "right", "up", "left"];
        this._pres = ["M_", "R_", "B_", "L_"];
        this._foldPres = ["B_", "R_", "B_", "L_"];

        //筒
        for (var i = 1; i < 10; ++i) {
            mahjongSprites.push("dot_" + i);
        }

        //条
        for (var i = 1; i < 10; ++i) {
            mahjongSprites.push("bamboo_" + i);
        }

        //万
        for (var i = 1; i < 10; ++i) {
            mahjongSprites.push("character_" + i);
        }

        //中、发、白
        mahjongSprites.push("red");
        mahjongSprites.push("green");
        mahjongSprites.push("white");

        //东西南北风
        mahjongSprites.push("wind_east");
        mahjongSprites.push("wind_west");
        mahjongSprites.push("wind_south");
        mahjongSprites.push("wind_north");
    },

    getMahjongSpriteByID: function getMahjongSpriteByID(id) {
        return mahjongSprites[id];
    },

    getMahjongType: function getMahjongType(id) {
        if (id >= 0 && id < 9) {
            return 0;
        } else if (id >= 9 && id < 18) {
            return 1;
        } else if (id >= 18 && id < 27) {
            return 2;
        }
    },

    getSpriteFrameByMJID: function getSpriteFrameByMJID(pre, mjid) {
        var spriteFrameName = this.getMahjongSpriteByID(mjid);
        spriteFrameName = pre + spriteFrameName;
        if (pre == "M_") {
            return this.bottomAtlas.getSpriteFrame(spriteFrameName);
        } else if (pre == "B_") {
            return this.bottomFoldAtlas.getSpriteFrame(spriteFrameName);
        } else if (pre == "L_") {
            return this.leftAtlas.getSpriteFrame(spriteFrameName);
        } else if (pre == "R_") {
            return this.rightAtlas.getSpriteFrame(spriteFrameName);
        }
    },

    getAudioURLByMJID: function getAudioURLByMJID(id) {
        var realId = 0;
        if (id >= 0 && id < 9) {
            realId = id + 21;
        } else if (id >= 9 && id < 18) {
            realId = id - 8;
        } else if (id >= 18 && id < 27) {
            realId = id - 7;
        }
        return "nv/" + realId + ".mp3";
    },

    getEmptySpriteFrame: function getEmptySpriteFrame(side) {
        if (side == "up") {
            return this.emptyAtlas.getSpriteFrame("e_mj_b_up");
        } else if (side == "myself") {
            return this.emptyAtlas.getSpriteFrame("e_mj_b_bottom");
        } else if (side == "left") {
            return this.emptyAtlas.getSpriteFrame("e_mj_b_left");
        } else if (side == "right") {
            return this.emptyAtlas.getSpriteFrame("e_mj_b_right");
        }
    },

    getHoldsEmptySpriteFrame: function getHoldsEmptySpriteFrame(side) {
        if (side == "up") {
            return this.emptyAtlas.getSpriteFrame("e_mj_up");
        } else if (side == "myself") {
            return null;
        } else if (side == "left") {
            return this.emptyAtlas.getSpriteFrame("e_mj_left");
        } else if (side == "right") {
            return this.emptyAtlas.getSpriteFrame("e_mj_right");
        }
    },

    sortMJ: function sortMJ(mahjongs, dingque) {
        var self = this;
        mahjongs.sort(function (a, b) {
            if (dingque >= 0) {
                var t1 = self.getMahjongType(a);
                var t2 = self.getMahjongType(b);
                if (t1 != t2) {
                    if (dingque == t1) {
                        return 1;
                    } else if (dingque == t2) {
                        return -1;
                    }
                }
            }
            return a - b;
        });
    },

    getSide: function getSide(localIndex) {
        return this._sides[localIndex];
    },

    getPre: function getPre(localIndex) {
        return this._pres[localIndex];
    },

    getFoldPre: function getFoldPre(localIndex) {
        return this._foldPres[localIndex];
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=MahjongManger.js.map
        