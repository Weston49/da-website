var _0x230d89=_0xce79;(function(_0x24cbd7,_0xc45e5a){var _0x32a821=_0xce79,_0x5b315=_0x24cbd7();while(!![]){try{var _0x2888fb=parseInt(_0x32a821(0x11e))/0x1*(-parseInt(_0x32a821(0x13c))/0x2)+parseInt(_0x32a821(0x142))/0x3*(parseInt(_0x32a821(0x13f))/0x4)+-parseInt(_0x32a821(0x139))/0x5+parseInt(_0x32a821(0x12b))/0x6*(parseInt(_0x32a821(0x120))/0x7)+parseInt(_0x32a821(0x13e))/0x8*(parseInt(_0x32a821(0x13d))/0x9)+-parseInt(_0x32a821(0x11b))/0xa+parseInt(_0x32a821(0x12a))/0xb;if(_0x2888fb===_0xc45e5a)break;else _0x5b315['push'](_0x5b315['shift']());}catch(_0x44077a){_0x5b315['push'](_0x5b315['shift']());}}}(_0x2481,0xb87cb));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';import{getAnalytics}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js';import{getAuth,getRedirectResult,createUserWithEmailAndPassword,setPersistence,signInWithEmailAndPassword,browserSessionPersistence,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';import{getDatabase,ref,set,onValue}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js';const firebaseConfig={'apiKey':_0x230d89(0x122),'authDomain':_0x230d89(0x146),'projectId':_0x230d89(0x129),'storageBucket':_0x230d89(0x138),'messagingSenderId':'718736960834','appId':_0x230d89(0x141),'measurementId':'G-H0SKVYB39P'};try{var app=initializeApp(firebaseConfig),auth=getAuth(),analytics=getAnalytics(app),db=getDatabase(app);}catch(_0x451425){console['error'](_0x451425);}try{firebase[_0x230d89(0x130)](firebaseConfig),document[_0x230d89(0x119)](_0x230d89(0x134))[_0x230d89(0x11a)]=_0x230d89(0x12c);}catch(_0x446b19){console[_0x230d89(0x137)](_0x446b19);}try{var ui=new firebaseui[(_0x230d89(0x12f))][(_0x230d89(0x132))](firebase[_0x230d89(0x12f)]());}catch(_0x16ce56){console[_0x230d89(0x137)](_0x16ce56);}try{ui[_0x230d89(0x136)](_0x230d89(0x11f),{'signInOptions':[{'provider':firebase['auth'][_0x230d89(0x118)][_0x230d89(0x115)],'requireDisplayName':!![]}]});}catch(_0x1ea0c9){console[_0x230d89(0x137)](_0x1ea0c9);}try{var uiConfig={'callbacks':{'signInSuccessWithAuthResult':function(_0xe0704f,_0x53170f){return!![];},'uiShown':function(){var _0x34d96f=_0x230d89;document[_0x34d96f(0x119)]('loader')[_0x34d96f(0x123)][_0x34d96f(0x131)]=_0x34d96f(0x135);}},'signInFlow':'popup','signInSuccessUrl':_0x230d89(0x127),'signInOptions':[firebase[_0x230d89(0x12f)][_0x230d89(0x118)][_0x230d89(0x115)]],'tosUrl':_0x230d89(0x127),'privacyPolicyUrl':_0x230d89(0x127)};}catch(_0x4002c1){console[_0x230d89(0x137)](_0x4002c1);}try{ui[_0x230d89(0x136)](_0x230d89(0x11f),uiConfig);}catch(_0x16e430){console[_0x230d89(0x137)](_0x16e430);}setPersistence(auth,browserSessionPersistence)[_0x230d89(0x12e)](()=>{return signInWithEmailAndPassword(auth,email,password);})[_0x230d89(0x117)](_0x5d3728=>{var _0x5bb4be=_0x230d89;const _0x53481d=_0x5d3728[_0x5bb4be(0x116)],_0x3dda74=_0x5d3728['message'];});try{firebase[_0x230d89(0x12f)]()[_0x230d89(0x128)](firebase[_0x230d89(0x12f)][_0x230d89(0x144)][_0x230d89(0x133)][_0x230d89(0x11c)]);}catch(_0xf15a68){console[_0x230d89(0x137)](_0xf15a68);}var u;function _0x2481(){var _0x452cd9=['AuthUI','Persistence','load','none','start','log','variety-gaming.appspot.com','5533885HbQctb','scoreCount','player_data/','2155484GwFNqj','5484231CqhOBv','8NDOUMl','796ukSwTd','currentUser','1:718736960834:web:a1a966f56f2ac23e08acdb','14673XOpKlT','Welcome\x20back\x20','Auth','/score','variety-gaming.firebaseapp.com','onclick','PROVIDER_ID','code','catch','EmailAuthProvider','getElementById','innerHTML','5205880xFbVrW','LOCAL','clicker','1BqAkXM','#firebaseui-auth-container','182nTKzZU','val','AIzaSyBw0YqHwuKxtRLdiTiuHI21WfowIPLkAJ0','style','username','displayName','uid','https://variety-gaming.web.app/index.html','setPersistence','variety-gaming','7403550jcGuHt','278088HCyJDv','Firebase\x20connection\x20successful','cookie','then','auth','initializeApp','display'];_0x2481=function(){return _0x452cd9;};return _0x2481();}function _0xce79(_0x1a31e8,_0x43c48c){var _0x248191=_0x2481();return _0xce79=function(_0xce79c8,_0x6a91ec){_0xce79c8=_0xce79c8-0x115;var _0x18b483=_0x248191[_0xce79c8];return _0x18b483;},_0xce79(_0x1a31e8,_0x43c48c);}onAuthStateChanged(auth,_0x262457=>{var _0x478be4=_0x230d89;if(_0x262457){u=_0x262457;const _0x18ba95=_0x262457[_0x478be4(0x126)];}else{}}),setTimeout(function(){var _0x3a0a39=_0x230d89;try{firebase[_0x3a0a39(0x12f)]()[_0x3a0a39(0x140)][_0x3a0a39(0x125)]!=null&&(document['getElementById'](_0x3a0a39(0x124))[_0x3a0a39(0x11a)]=_0x3a0a39(0x143)+firebase['auth']()['currentUser']['displayName']);}catch(_0x48057f){console[_0x3a0a39(0x137)](_0x48057f);}},0x320);var data;function updateScore(_0x100cb3){var _0x3a4dc8=_0x230d89;data=_0x100cb3,document[_0x3a4dc8(0x119)](_0x3a4dc8(0x13a))[_0x3a4dc8(0x11a)]=_0x100cb3;}function cookieCooldown(){var _0x631d9c=_0x230d89;document[_0x631d9c(0x119)]('clicker')[_0x631d9c(0x147)]=function(){cooldownClicked();},document[_0x631d9c(0x119)](_0x631d9c(0x11d))['innerHTML']='3',setTimeout(function(){var _0x383a73=_0x631d9c;document[_0x383a73(0x119)](_0x383a73(0x11d))[_0x383a73(0x11a)]='2',setTimeout(function(){var _0xb7bac4=_0x383a73;document[_0xb7bac4(0x119)](_0xb7bac4(0x11d))['innerHTML']='1',setTimeout(function(){var _0x235cb0=_0xb7bac4;document[_0x235cb0(0x119)](_0x235cb0(0x11d))[_0x235cb0(0x147)]=function(){clicked();},document[_0x235cb0(0x119)](_0x235cb0(0x11d))[_0x235cb0(0x11a)]=_0x235cb0(0x12d);},0x3e8);},0x3e8);},0x3e8);}export function addScore(_0x3c9a31){var _0x1ce17e=_0x230d89,_0x348168=data+_0x3c9a31;set(ref(db,_0x1ce17e(0x13b)+u[_0x1ce17e(0x126)]),{'username':u['displayName'],'score':_0x348168})[_0x1ce17e(0x12e)](()=>{cookieCooldown();})[_0x1ce17e(0x117)](_0x5500a5=>{var _0x26d09e=_0x1ce17e;console[_0x26d09e(0x137)](_0x5500a5);});}setTimeout(function(){var _0x3bab30=_0x230d89;const _0x238d9b=ref(db,_0x3bab30(0x13b)+u['uid']+_0x3bab30(0x145));onValue(_0x238d9b,_0x4657e5=>{var _0x2c058e=_0x3bab30;const _0xc1e223=_0x4657e5[_0x2c058e(0x121)]();updateScore(_0xc1e223);});},0x384);