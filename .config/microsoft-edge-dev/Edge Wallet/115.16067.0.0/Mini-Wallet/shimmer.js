(()=>{"use strict";var e;(function(e){e[e.WalletIcon=1]="WalletIcon",e[e.Rewards=2]="Rewards",e[e.Crypto=4]="Crypto",e[e.Notification=8]="Notification",e[e.PaymentMethods=16]="PaymentMethods",e[e.Passwords=32]="Passwords",e[e.PersonalInfo=64]="PersonalInfo",e[e.Rebates=128]="Rebates",e[e.ALL=-1]="ALL"})(e||(e={}));const t=parseInt(new URLSearchParams(document.location.search).get("visibilityFlags")||"0");t&e.Rewards&&(document.getElementById("splash-rewardsRow").style.display="grid"),t&e.Rebates&&(document.getElementById("splash-rebatesRow").style.display="grid"),t&e.Notification&&(document.getElementById("splash-notificationRow").style.display="grid")})();