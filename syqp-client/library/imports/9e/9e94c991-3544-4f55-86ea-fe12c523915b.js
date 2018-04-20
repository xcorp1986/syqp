"use strict";
cc._RF.push(module, '9e94cmRNURPVYbq/hLFI5Fb', 'MJRoom');
// scripts/components/MJRoom.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        menuWin: cc.Node,
        lblRoomId: cc.Label,
        lblWangfa: cc.Label,
        btnMenu: cc.Button,
        btnLeave: cc.Button,
        btnWechatInvite: cc.Button,
        btnDissolve: cc.Button,
        _seats: []
    },

    onLoad: function onLoad() {
        if (th == null) {
            return;
        }
        this.initView();
        this.initSeats();
        this.initEventHandlers();
    },

    initView: function initView() {
        if (th.socketIOManager.seats.length == 2) {
            this.node.getChildByName('left').active = false;
            this.node.getChildByName('right').active = false;
        } else if (th.socketIOManager.seats.length == 3) {
            this.node.getChildByName('up').active = false;
        }

        this.lblRoomId.string = th.socketIOManager.roomId || '------';
        this.lblWangfa.string = th.socketIOManager.getWanfa();

        var seatNames = ["myself", "right", "up", "left"];
        for (var i = 0; i < seatNames.length; i++) {
            if (i == 2 && th.socketIOManager.seats.length == 3 || (i == 1 || i == 3) && th.socketIOManager.seats.length == 2) {
                continue;
            }
            var seatComponent = this.node.getChildByName(seatNames[i]).getChildByName('Seat').getComponent('MJSeat');
            this._seats.push(seatComponent);
        }
        this.refreshBtns();
    },

    initSeats: function initSeats() {
        var seats = th.socketIOManager.seats;
        for (var i = 0; i < seats.length; ++i) {
            this.initSingleSeat(seats[i]);
        }
    },

    initSingleSeat: function initSingleSeat(seat) {
        var index = th.socketIOManager.getLocalIndex(seat.index);
        this._seats[index].setInfo(seat.userId, seat.name, seat.score, seat.headImgUrl);
        this._seats[index].setFangzhu(seat.userId == th.socketIOManager.creator);
        this._seats[index].setBank(seat.seatindex == th.socketIOManager.bankIndex);
        this._seats[index].setReady(seat.ready);
        this._seats[index].setOffline(!seat.online);
    },

    refreshBtns: function refreshBtns() {
        var isIdle = th.socketIOManager.round == 0;
        var isFangzhu = th.socketIOManager.isFangzhu();
        this.btnDissolve.node.active = isIdle && isFangzhu;
        this.btnLeave.node.active = isIdle && !isFangzhu;
        this.btnWechatInvite.node.active = isIdle;
        this.btnMenu.node.active = !isIdle;
    },

    initEventHandlers: function initEventHandlers() {},

    onMenuClicked: function onMenuClicked() {
        this.menuWin.active = !this.menuWin.active;
    },
    onBtnDissolveRequestClicked: function onBtnDissolveRequestClicked() {
        this.menuWin.active = false;
        th.alert.show("申请解散房间", "申请解散房间不会退换钻石，是否确定申请解散？", function () {
            th.sio.send("dissolve_request");
        }, true);
    },
    onBtnDissolveClicked: function onBtnDissolveClicked() {
        th.alert.show("解散房间", "解散房间不扣钻石，是否确定解散？", function () {
            th.sio.send("dissolve");
        }, true);
    },
    onBtnLeaveClicked: function onBtnLeaveClicked() {
        this.menuWin.active = false;
        if (th.socketIOManager.isFangzhu()) {
            th.alert.show("离开房间", "您是房主，不能离开房间。", function () {
                //th.sio.send("leave"); 
            });
            return;
        }
        th.alert.show("离开房间", "您确定要离开房间?", function () {
            th.sio.send("leave");
        }, true);
    },
    onBtnSettingClicked: function onBtnSettingClicked() {
        this.menuWin.active = false;
        this.settingWin.active = true;
    },
    onBtnChatClicked: function onBtnChatClicked() {
        this._seat[0].setCountdown(10);
        cc.log('onChatClicked==>');
    },
    onBtnVoiceClicked: function onBtnVoiceClicked() {
        cc.log('onVoiceClicked==>');
    },
    onBtnReadyClicked: function onBtnReadyClicked() {
        cc.log('onBtnReadyClicked==>');
        th.sio.send("ready");
    },
    onBtnWechatInviteClicked: function onBtnWechatInviteClicked() {
        cc.log('onBtnWechatInviteClicked==>');
    }

    // update: function (dt) {

    // },


});

cc._RF.pop();