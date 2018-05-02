cc.Class({
    extends: cc.Component,

    properties: {
        _folds:null,
    },

    onLoad () {
        if(th==null){ return; }
        this.initView();
        this.initEventHandler();
    },


    update (dt) {
    },

    initView:function(){
        this._folds={};
        this._folds.left=[];
        this._folds.myself=[];
        this._folds.right=[];
        this._folds.up=[];
        var names =['myself','right','up','left'];
        for(var i = 0; i < names.length; i++){
            var name=names[i];
            var mjs=this.node.getChildByName(name).getChildByName("Folds").children;
            for(var j=0;j<mjs.length;j++){
                var mj=mjs[j];
                mj.active=false;
                var sprite = mj.getComponent(cc.Sprite);
                sprite.spriteFrame = null;
                this._folds[name].push(sprite);  
            }
        }
    },

  
    initEventHandler:function(){
        var self = this;
        this.node.on('begin_push',function(data){
            self.initAllFolds();
        });  

        //过牌
        this.node.on('guo_notify_push',function(data){
            self.initFolds(data.detail);
        });

        //出牌
        this.node.on('chupai_notify_push',function(data){
            self.initFolds(data.detail.seatData);
        });

    },

    hideAllFolds:function(){
        for(var key in this._folds){
            var mjs = this._folds[key];
            for(var i=0;i<mjs.length;i++){
                mjs[i].node.active = false;
            }
        }
        /*
        var seats = th.socketIOManager.seats;
        for(var i in seats){
            this.initFolds(seats[i]);
        }
        */
    },

    initFolds:function(seatData){
        var folds = seatData.folds;
        if(folds == null){
            return;
        }
        var localIndex = th.socketIOManager.getLocalIndex(seatData.seatindex);
        var pre = th.mahjongManager.getFoldPre(localIndex);
        var side = th.mahjongManager.getSide(localIndex);
        var foldsSprites = this._folds[side];
        for(var i = 0; i < foldsSprites.length; ++i){
            var index = i;
            if(side == "right" || side == "up"){
                index = foldsSprites.length - i - 1;
            }
            var sprite = foldsSprites[index];
            sprite.node.active = true;
            this.setSpriteFrameByMJID(pre,sprite,folds[i]);
        }
        for(var i = folds.length; i < foldsSprites.length; ++i){
            var index = i;
            if(side == "right" || side == "up"){
                index = foldsSprites.length - i - 1;
            }
            var sprite = foldsSprites[index];
            
            sprite.spriteFrame = null;
            sprite.node.active = false;
        }  
    },

    refreshAllSeat:function(){

    },

    refreshOneSeat:function(){

    },

    setSpriteFrameByMJID:function(pre,sprite,mjid){
        sprite.spriteFrame = th.mahjongManager.getSpriteFrameByMJID(pre,mjid);
        sprite.node.active = true;
    },
});
