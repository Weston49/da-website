var _0x507379=_0x45e5;function _0x45e5(_0x30152e,_0x1abb9c){var _0x5afe2c=_0x5afe();return _0x45e5=function(_0x45e511,_0x37a810){_0x45e511=_0x45e511-0xb9;var _0x15381f=_0x5afe2c[_0x45e511];return _0x15381f;},_0x45e5(_0x30152e,_0x1abb9c);}(function(_0x2567ce,_0x1645ea){var _0x4c4ced=_0x45e5,_0x2b8514=_0x2567ce();while(!![]){try{var _0x275903=-parseInt(_0x4c4ced(0xb9))/0x1+-parseInt(_0x4c4ced(0xba))/0x2*(parseInt(_0x4c4ced(0xd6))/0x3)+-parseInt(_0x4c4ced(0xd0))/0x4+-parseInt(_0x4c4ced(0xc6))/0x5+-parseInt(_0x4c4ced(0xc0))/0x6+parseInt(_0x4c4ced(0xbc))/0x7+parseInt(_0x4c4ced(0xe2))/0x8*(parseInt(_0x4c4ced(0xc9))/0x9);if(_0x275903===_0x1645ea)break;else _0x2b8514['push'](_0x2b8514['shift']());}catch(_0x3227dd){_0x2b8514['push'](_0x2b8514['shift']());}}}(_0x5afe,0x34bfa));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';import{getAnalytics}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js';import{getAuth,getRedirectResult,createUserWithEmailAndPassword,setPersistence,signInWithEmailAndPassword,browserSessionPersistence,onAuthStateChanged}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';import{getDatabase,ref,set,onValue}from'https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js';const firebaseConfig={'apiKey':'AIzaSyBw0YqHwuKxtRLdiTiuHI21WfowIPLkAJ0','authDomain':_0x507379(0xe1),'projectId':_0x507379(0xdb),'storageBucket':_0x507379(0xc3),'messagingSenderId':_0x507379(0xd8),'appId':'1:718736960834:web:a1a966f56f2ac23e08acdb','measurementId':_0x507379(0xc7)};try{var app=initializeApp(firebaseConfig),auth=getAuth(),analytics=getAnalytics(app),db=getDatabase(app);}catch(_0x39160a){console[_0x507379(0xde)](_0x39160a);}try{firebase[_0x507379(0xc5)](firebaseConfig),document['getElementById'](_0x507379(0xce))[_0x507379(0xd7)]=_0x507379(0xd1);}catch(_0x3983be){console[_0x507379(0xcd)](_0x3983be);}function _0x5afe(){var _0x110655=['auth','start','style','log','load','display','1438156fUewNy','Firebase\x20connection\x20successful','uid','currentUser','https://variety-gaming.web.app/index.html','Persistence','3xHNxKa','innerHTML','718736960834','message','player_data/','variety-gaming','catch','onclick','error','popup','loader','variety-gaming.firebaseapp.com','4019320gKBxjc','PROVIDER_ID','Welcome\x20back\x20','86230vHQCBO','789686TKlNVe','displayName','2726927YjNqBS','then','#firebaseui-auth-container','clicker','437988CvbXQV','getElementById','code','variety-gaming.appspot.com','username','initializeApp','1323615froaVR','G-H0SKVYB39P','LOCAL','18zWyCan'];_0x5afe=function(){return _0x110655;};return _0x5afe();}try{var ui=new firebaseui[(_0x507379(0xca))]['AuthUI'](firebase[_0x507379(0xca)]());}catch(_0x323fe0){console['log'](_0x323fe0);}try{ui[_0x507379(0xcb)]('#firebaseui-auth-container',{'signInOptions':[{'provider':firebase[_0x507379(0xca)]['EmailAuthProvider'][_0x507379(0xe3)],'requireDisplayName':!![]}]});}catch(_0xa739d9){console[_0x507379(0xcd)](_0xa739d9);}try{var uiConfig={'callbacks':{'signInSuccessWithAuthResult':function(_0x82de27,_0x17d0db){return!![];},'uiShown':function(){var _0xdeb086=_0x507379;document[_0xdeb086(0xc1)](_0xdeb086(0xe0))[_0xdeb086(0xcc)][_0xdeb086(0xcf)]='none';}},'signInFlow':_0x507379(0xdf),'signInSuccessUrl':_0x507379(0xd4),'signInOptions':[firebase['auth']['EmailAuthProvider'][_0x507379(0xe3)]],'tosUrl':_0x507379(0xd4),'privacyPolicyUrl':_0x507379(0xd4)};}catch(_0x4ab0ac){console[_0x507379(0xcd)](_0x4ab0ac);}try{ui[_0x507379(0xcb)](_0x507379(0xbe),uiConfig);}catch(_0x375e30){console[_0x507379(0xcd)](_0x375e30);}setPersistence(auth,browserSessionPersistence)[_0x507379(0xbd)](()=>{return signInWithEmailAndPassword(auth,email,password);})[_0x507379(0xdc)](_0x159098=>{var _0x4ef077=_0x507379;const _0x15f3bf=_0x159098[_0x4ef077(0xc2)],_0x4d2a6d=_0x159098[_0x4ef077(0xd9)];});try{firebase['auth']()['setPersistence'](firebase[_0x507379(0xca)]['Auth'][_0x507379(0xd5)][_0x507379(0xc8)]);}catch(_0x4a5eda){console[_0x507379(0xcd)](_0x4a5eda);}var u;onAuthStateChanged(auth,_0x89fd2b=>{var _0x2f1df8=_0x507379;if(_0x89fd2b){u=_0x89fd2b;const _0x516109=_0x89fd2b[_0x2f1df8(0xd2)];}else{}}),setTimeout(function(){var _0xf968af=_0x507379;try{firebase[_0xf968af(0xca)]()[_0xf968af(0xd3)]['displayName']!=null&&(document['getElementById'](_0xf968af(0xc4))[_0xf968af(0xd7)]=_0xf968af(0xe4)+firebase[_0xf968af(0xca)]()[_0xf968af(0xd3)][_0xf968af(0xbb)]);}catch(_0x3e328c){console[_0xf968af(0xcd)](_0x3e328c);}},0x320);var data,canclick=!![];function updateScore(_0xa19990){var _0x4eba67=_0x507379;data=_0xa19990,document[_0x4eba67(0xc1)]('scoreCount')['innerHTML']=_0xa19990;}function cookieCooldown(){var _0x1a492=_0x507379;document[_0x1a492(0xc1)](_0x1a492(0xbf))[_0x1a492(0xdd)]=function(){cooldownClicked();},document[_0x1a492(0xc1)]('clicker')['innerHTML']='3',setTimeout(function(){var _0x559940=_0x1a492;document['getElementById'](_0x559940(0xbf))[_0x559940(0xd7)]='2',setTimeout(function(){var _0x2e46ad=_0x559940;document[_0x2e46ad(0xc1)]('clicker')[_0x2e46ad(0xd7)]='1',setTimeout(function(){var _0x34ad18=_0x2e46ad;document[_0x34ad18(0xc1)]('clicker')[_0x34ad18(0xdd)]=function(){clicked();},canclick=!![],document[_0x34ad18(0xc1)](_0x34ad18(0xbf))[_0x34ad18(0xd7)]='cookie';},0x3e8);},0x3e8);},0x3e8);}export function addScore(_0x36f1cc){var _0x426979=_0x507379;if(canclick==!![]){canclick=![];var _0x1ffea6=data+_0x36f1cc;set(ref(db,_0x426979(0xda)+u[_0x426979(0xd2)]),{'username':u['displayName'],'score':_0x1ffea6})[_0x426979(0xbd)](()=>{cookieCooldown();})[_0x426979(0xdc)](_0x19ab81=>{var _0x3dcf23=_0x426979;console[_0x3dcf23(0xcd)](_0x19ab81);});}}setTimeout(function(){var _0x180736=_0x507379;try{const _0x1cebd8=ref(db,'player_data/'+u[_0x180736(0xd2)]+'/score');onValue(_0x1cebd8,_0x140459=>{const _0x377a20=_0x140459['val']();updateScore(_0x377a20);});}catch(_0xd8ba27){console['log'](_0xd8ba27);}},0x384);