(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="158",xl=0,Io=1,Ml=2,Mc=1,yc=2,dn=3,Fn=0,At=1,fn=2,Un=0,xi=1,No=2,Oo=3,Fo=4,yl=5,Yn=100,Sl=101,El=102,Bo=103,ko=104,bl=200,Tl=201,Al=202,wl=203,Hs=204,Gs=205,Rl=206,Cl=207,Ll=208,Pl=209,Dl=210,Ul=211,Il=212,Nl=213,Ol=214,Fl=0,Bl=1,kl=2,Dr=3,zl=4,Hl=5,Gl=6,Vl=7,lo=0,Wl=1,Xl=2,In=0,ql=1,Yl=2,Kl=3,jl=4,$l=5,Sc=300,yi=301,Si=302,Vs=303,Ws=304,Hr=306,Xs=1e3,$t=1001,qs=1002,Tt=1003,zo=1004,ss=1005,Bt=1006,Zl=1007,Gi=1008,Nn=1009,Jl=1010,Ql=1011,ho=1012,Ec=1013,wn=1014,Rn=1015,Vi=1016,bc=1017,Tc=1018,jn=1020,eh=1021,Zt=1023,th=1024,nh=1025,$n=1026,Ei=1027,ih=1028,Ac=1029,rh=1030,wc=1031,Rc=1033,os=33776,as=33777,cs=33778,ls=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,sh=36196,Xo=37492,qo=37496,Yo=37808,Ko=37809,jo=37810,$o=37811,Zo=37812,Jo=37813,Qo=37814,ea=37815,ta=37816,na=37817,ia=37818,ra=37819,sa=37820,oa=37821,hs=36492,aa=36494,ca=36495,oh=36283,la=36284,ha=36285,ua=36286,Cc=3e3,Zn=3001,ah=3200,ch=3201,Lc=0,lh=1,Gt="",_t="srgb",gn="srgb-linear",uo="display-p3",Gr="display-p3-linear",Ur="linear",$e="srgb",Ir="rec709",Nr="p3",ei=7680,da=519,hh=512,uh=513,dh=514,fh=515,ph=516,mh=517,gh=518,_h=519,fa=35044,pa="300 es",Ys=1035,mn=2e3,Or=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,Ks=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function vh(n,e){return(n%e+e)%e}function ds(n,e,t){return(1-t)*n+t*e}function ma(n){return(n&n-1)===0&&n!==0}function js(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,i,r,s,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],f=i[2],m=i[5],_=i[8],v=r[0],p=r[3],u=r[6],T=r[1],y=r[4],E=r[7],A=r[2],C=r[5],R=r[8];return s[0]=a*v+o*T+c*A,s[3]=a*p+o*y+c*C,s[6]=a*u+o*E+c*R,s[1]=l*v+h*T+d*A,s[4]=l*p+h*y+d*C,s[7]=l*u+h*E+d*R,s[2]=f*v+m*T+_*A,s[5]=f*p+m*y+_*C,s[8]=f*u+m*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,f=o*c-h*s,m=l*s-a*c,_=t*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*l-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fs.makeScale(e,t)),this}rotate(e){return this.premultiply(fs.makeRotation(-e)),this}translate(e,t){return this.premultiply(fs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fs=new Oe;function Pc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xh(){const n=Fr("canvas");return n.style.display="block",n}const ga={};function zi(n){n in ga||(ga[n]=!0,console.warn(n))}const _a=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),va=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[gn]:{transfer:Ur,primaries:Ir,toReference:n=>n,fromReference:n=>n},[_t]:{transfer:$e,primaries:Ir,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Gr]:{transfer:Ur,primaries:Nr,toReference:n=>n.applyMatrix3(va),fromReference:n=>n.applyMatrix3(_a)},[uo]:{transfer:$e,primaries:Nr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(va),fromReference:n=>n.applyMatrix3(_a).convertLinearToSRGB()}},Mh=new Set([gn,Gr]),qe={enabled:!0,_workingColorSpace:gn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$i[e].toReference,r=$i[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $i[n].primaries},getTransfer:function(n){return n===Gt?Ur:$i[n].transfer}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ti;class Dc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Fr("canvas")),ti.width=e.width,ti.height=e.height;const i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yh=0;class Uc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Xi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ms(r[a].image)):s.push(ms(r[a]))}else s=ms(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ms(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sh=0;class It extends Ai{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=$t,r=$t,s=Bt,a=Gi,o=Zt,c=Nn,l=It.DEFAULT_ANISOTROPY,h=Gt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Xi(),this.name="",this.source=new Uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zn?_t:Gt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Zn:Cc}set encoding(e){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?_t:Gt}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Sc;It.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],_=c[9],v=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,E=(m+1)/2,A=(u+1)/2,C=(h+f)/4,R=(d+v)/4,V=(_+p)/4;return y>E&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=R/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=V/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=V/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-v)/T,this.z=(f-h)/T,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends Ai{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Zn?_t:Gt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new It(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Eh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ic extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bh extends It{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||c!==f||l!==m||h!==_){let p=1-o;const u=c*f+l*m+h*_+d*v,T=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const A=Math.sqrt(y),C=Math.atan2(A,u*T);p=Math.sin(p*C)/A,o=Math.sin(o*C)/A}const E=o*T;if(c=c*p+f*E,l=l*p+m*E,h=h*p+_*E,d=d*p+v*E,p===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*d+c*m-l*f,e[t+1]=c*_+h*f+l*d-o*m,e[t+2]=l*_+h*m+o*f-c*d,e[t+3]=h*_-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"YZX":this._x=f*h*d+l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d-f*m*_;break;case"XZY":this._x=f*h*d-l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gs.copy(this).projectOnVector(e),this.sub(gs)}reflect(e){return this.sub(gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gs=new U,xa=new qi;class Yi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zi.copy(i.boundingBox)),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),Ji.subVectors(this.max,Di),ni.subVectors(e.a,Di),ii.subVectors(e.b,Di),ri.subVectors(e.c,Di),xn.subVectors(ii,ni),Mn.subVectors(ri,ii),Hn.subVectors(ni,ri);let t=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Hn.z,Hn.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Hn.z,0,-Hn.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Hn.y,Hn.x,0];return!_s(t,ni,ii,ri,Ji)||(t=[1,0,0,0,1,0,0,0,1],!_s(t,ni,ii,ri,Ji))?!1:(Qi.crossVectors(xn,Mn),t=[Qi.x,Qi.y,Qi.z],_s(t,ni,ii,ri,Ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new U,new U,new U,new U,new U,new U,new U,new U],Wt=new U,Zi=new Yi,ni=new U,ii=new U,ri=new U,xn=new U,Mn=new U,Hn=new U,Di=new U,Ji=new U,Qi=new U,Gn=new U;function _s(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Gn.fromArray(n,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),h=i.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Th=new Yi,Ui=new U,vs=new U;class Vr{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Th.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ui,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(vs)),this.expandByPoint(Ui.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new U,xs=new U,er=new U,yn=new U,Ms=new U,tr=new U,ys=new U;class fo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xs.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(xs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(er),o=yn.dot(this.direction),c=-yn.dot(er),l=yn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,_;if(h>0)if(d=a*c-o,f=a*o-c,_=s*h,d>=0)if(f>=-_)if(f<=_){const v=1/h;d*=v,f*=v,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xs).addScaledVector(er,f),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const i=cn.dot(this.direction),r=cn.dot(cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,i,r,s){Ms.subVectors(t,e),tr.subVectors(i,e),ys.crossVectors(Ms,tr);let a=this.direction.dot(ys),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,e);const c=o*this.direction.dot(tr.crossVectors(yn,tr));if(c<0)return null;const l=o*this.direction.dot(Ms.cross(yn));if(l<0||c+l>a)return null;const h=-o*yn.dot(ys);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,s,a,o,c,l,h,d,f,m,_,v,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,f,m,_,v,p)}set(e,t,i,r,s,a,o,c,l,h,d,f,m,_,v,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*d,_=o*h,v=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+_*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,_=l*h,v=l*d;t[0]=f+v*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,_=l*h,v=l*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*d,_=o*h,v=o*d;t[0]=c*h,t[4]=_*l-m,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,_=o*c,v=o*l;t[0]=c*h,t[4]=v-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*c,m=a*l,_=o*c,v=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+v,t[5]=a*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,wh)}lookAt(e,t,i){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Sn.crossVectors(i,Dt),Sn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Sn.crossVectors(i,Dt)),Sn.normalize(),nr.crossVectors(Dt,Sn),r[0]=Sn.x,r[4]=nr.x,r[8]=Dt.x,r[1]=Sn.y,r[5]=nr.y,r[9]=Dt.y,r[2]=Sn.z,r[6]=nr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],u=i[14],T=i[3],y=i[7],E=i[11],A=i[15],C=r[0],R=r[4],V=r[8],M=r[12],b=r[1],W=r[5],Y=r[9],$=r[13],L=r[2],z=r[6],X=r[10],G=r[14],te=r[3],K=r[7],q=r[11],P=r[15];return s[0]=a*C+o*b+c*L+l*te,s[4]=a*R+o*W+c*z+l*K,s[8]=a*V+o*Y+c*X+l*q,s[12]=a*M+o*$+c*G+l*P,s[1]=h*C+d*b+f*L+m*te,s[5]=h*R+d*W+f*z+m*K,s[9]=h*V+d*Y+f*X+m*q,s[13]=h*M+d*$+f*G+m*P,s[2]=_*C+v*b+p*L+u*te,s[6]=_*R+v*W+p*z+u*K,s[10]=_*V+v*Y+p*X+u*q,s[14]=_*M+v*$+p*G+u*P,s[3]=T*C+y*b+E*L+A*te,s[7]=T*R+y*W+E*z+A*K,s[11]=T*V+y*Y+E*X+A*q,s[15]=T*M+y*$+E*G+A*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],u=e[15];return _*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*m-i*c*m)+v*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*h-s*c*h)+p*(+t*l*d-t*o*m-s*a*d+i*a*m+s*o*h-i*l*h)+u*(-r*o*h-t*c*d+t*o*f+r*a*d-i*a*f+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],u=e[15],T=d*p*l-v*f*l+v*c*m-o*p*m-d*c*u+o*f*u,y=_*f*l-h*p*l-_*c*m+a*p*m+h*c*u-a*f*u,E=h*v*l-_*d*l+_*o*m-a*v*m-h*o*u+a*d*u,A=_*d*c-h*v*c-_*o*f+a*v*f+h*o*p-a*d*p,C=t*T+i*y+r*E+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=T*R,e[1]=(v*f*s-d*p*s-v*r*m+i*p*m+d*r*u-i*f*u)*R,e[2]=(o*p*s-v*c*s+v*r*l-i*p*l-o*r*u+i*c*u)*R,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*m-i*c*m)*R,e[4]=y*R,e[5]=(h*p*s-_*f*s+_*r*m-t*p*m-h*r*u+t*f*u)*R,e[6]=(_*c*s-a*p*s-_*r*l+t*p*l+a*r*u-t*c*u)*R,e[7]=(a*f*s-h*c*s+h*r*l-t*f*l-a*r*m+t*c*m)*R,e[8]=E*R,e[9]=(_*d*s-h*v*s-_*i*m+t*v*m+h*i*u-t*d*u)*R,e[10]=(a*v*s-_*o*s+_*i*l-t*v*l-a*i*u+t*o*u)*R,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*m-t*o*m)*R,e[12]=A*R,e[13]=(h*v*r-_*d*r+_*i*f-t*v*f-h*i*p+t*d*p)*R,e[14]=(_*o*r-a*v*r-_*i*c+t*v*c+a*i*p-t*o*p)*R,e[15]=(a*d*r-h*o*r+h*i*c-t*d*c-a*i*f+t*o*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,f=s*l,m=s*h,_=s*d,v=a*h,p=a*d,u=o*d,T=c*l,y=c*h,E=c*d,A=i.x,C=i.y,R=i.z;return r[0]=(1-(v+u))*A,r[1]=(m+E)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(f+u))*C,r[6]=(p+T)*C,r[7]=0,r[8]=(_+y)*R,r[9]=(p-T)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const a=si.set(r[4],r[5],r[6]).length(),o=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xt.copy(this);const l=1/s,h=1/a,d=1/o;return Xt.elements[0]*=l,Xt.elements[1]*=l,Xt.elements[2]*=l,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=mn){const c=this.elements,l=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(o===mn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Or)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=mn){const c=this.elements,l=1/(t-e),h=1/(i-r),d=1/(a-s),f=(t+e)*l,m=(i+r)*h;let _,v;if(o===mn)_=(a+s)*d,v=-2*d;else if(o===Or)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const si=new U,Xt=new at,Ah=new U(0,0,0),wh=new U(1,1,1),Sn=new U,nr=new U,Dt=new U,Ma=new at,ya=new qi;class Wr{constructor(e=0,t=0,i=0,r=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ma.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ma,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rh=0;const Sa=new U,oi=new qi,ln=new at,ir=new U,Ii=new U,Ch=new U,Lh=new qi,Ea=new U(1,0,0),ba=new U(0,1,0),Ta=new U(0,0,1),Ph={type:"added"},Dh={type:"removed"};class vt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new U,t=new Wr,i=new qi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Oe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(ba,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return Sa.copy(e).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(ba,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ir.copy(e):ir.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Ii,ir,this.up):ln.lookAt(ir,Ii,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),oi.setFromRotationMatrix(ln),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new U(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new U,hn=new U,Ss=new U,un=new U,ai=new U,ci=new U,Aa=new U,Es=new U,bs=new U,Ts=new U;let rr=!1;class jt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){qt.subVectors(r,t),hn.subVectors(i,t),Ss.subVectors(e,t);const a=qt.dot(qt),o=qt.dot(hn),c=qt.dot(Ss),l=hn.dot(hn),h=hn.dot(Ss),d=a*l-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(l*c-o*h)*f,_=(a*h-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,i,r,s,a,o,c){return rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rr=!0),this.getInterpolation(e,t,i,r,s,a,o,c)}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,un),c.setScalar(0),c.addScaledVector(s,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),hn.subVectors(e,t),qt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rr=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ai.subVectors(r,i),ci.subVectors(s,i),Es.subVectors(e,i);const c=ai.dot(Es),l=ci.dot(Es);if(c<=0&&l<=0)return t.copy(i);bs.subVectors(e,r);const h=ai.dot(bs),d=ci.dot(bs);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(ai,a);Ts.subVectors(e,s);const m=ai.dot(Ts),_=ci.dot(Ts);if(_>=0&&m<=_)return t.copy(s);const v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(ci,o);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return Aa.subVectors(s,r),o=(d-h)/(d-h+(m-_)),t.copy(r).addScaledVector(Aa,o);const u=1/(p+v+f);return a=v*u,o=f*u,t.copy(i).addScaledVector(ai,a).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},sr={h:0,s:0,l:0};function As(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qe.workingColorSpace){if(e=vh(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=As(a,s,e+1/3),this.g=As(a,s,e),this.b=As(a,s,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const i=Nc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return qe.fromWorkingColorSpace(yt.copy(this),e),Math.round(Rt(yt.r*255,0,255))*65536+Math.round(Rt(yt.g*255,0,255))*256+Math.round(Rt(yt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=_t){qe.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(sr);const i=ds(En.h,sr.h,t),r=ds(En.s,sr.s,t),s=ds(En.l,sr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Fe;Fe.NAMES=Nc;let Uh=0;class wi extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=xi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hs,this.blendDst=Gs,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hs&&(i.blendSrc=this.blendSrc),this.blendDst!==Gs&&(i.blendDst=this.blendDst),this.blendEquation!==Yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new U,or=new Ge;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fa,this.updateRange={offset:0,count:-1},this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Oc extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fc extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ih=0;const Ft=new at,ws=new vt,li=new U,Ut=new Yi,Ni=new Yi,pt=new U;class Vt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pc(e)?Fc:Oc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,i){return Ft.makeTranslation(e,t,i),this.applyMatrix4(Ft),this}scale(e,t,i){return Ft.makeScale(e,t,i),this.applyMatrix4(Ft),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ut.min,Ni.min),Ut.expandByPoint(pt),pt.addVectors(Ut.max,Ni.max),Ut.expandByPoint(pt)):(Ut.expandByPoint(Ni.min),Ut.expandByPoint(Ni.max))}Ut.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pt.fromBufferAttribute(o,l),c&&(li.fromBufferAttribute(e,l),pt.add(li)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<o;b++)l[b]=new U,h[b]=new U;const d=new U,f=new U,m=new U,_=new Ge,v=new Ge,p=new Ge,u=new U,T=new U;function y(b,W,Y){d.fromArray(r,b*3),f.fromArray(r,W*3),m.fromArray(r,Y*3),_.fromArray(a,b*2),v.fromArray(a,W*2),p.fromArray(a,Y*2),f.sub(d),m.sub(d),v.sub(_),p.sub(_);const $=1/(v.x*p.y-p.x*v.y);isFinite($)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar($),T.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar($),l[b].add(u),l[W].add(u),l[Y].add(u),h[b].add(T),h[W].add(T),h[Y].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let b=0,W=E.length;b<W;++b){const Y=E[b],$=Y.start,L=Y.count;for(let z=$,X=$+L;z<X;z+=3)y(i[z+0],i[z+1],i[z+2])}const A=new U,C=new U,R=new U,V=new U;function M(b){R.fromArray(s,b*3),V.copy(R);const W=l[b];A.copy(W),A.sub(R.multiplyScalar(R.dot(W))).normalize(),C.crossVectors(V,W);const $=C.dot(h[b])<0?-1:1;c[b*4]=A.x,c[b*4+1]=A.y,c[b*4+2]=A.z,c[b*4+3]=$}for(let b=0,W=E.length;b<W;++b){const Y=E[b],$=Y.start,L=Y.count;for(let z=$,X=$+L;z<X;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,_=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let u=0;u<h;u++)f[_++]=l[m++]}return new Nt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wa=new at,Vn=new fo,ar=new Vr,Ra=new U,hi=new U,ui=new U,di=new U,Rs=new U,cr=new U,lr=new Ge,hr=new Ge,ur=new Ge,Ca=new U,La=new U,Pa=new U,dr=new U,fr=new U;class lt extends vt{constructor(e=new Vt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(Rs.fromBufferAttribute(d,e),a?cr.addScaledVector(Rs,h):cr.addScaledVector(Rs.sub(t),h))}t.add(cr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(s),Vn.copy(e.ray).recast(e.near),!(ar.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ar,Ra)===null||Vn.origin.distanceToSquared(Ra)>(e.far-e.near)**2))&&(wa.copy(s).invert(),Vn.copy(e.ray).applyMatrix4(wa),!(i.boundingBox!==null&&Vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,A=y;E<A;E+=3){const C=o.getX(E),R=o.getX(E+1),V=o.getX(E+2);r=pr(this,u,e,i,l,h,d,C,R,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,u=v;p<u;p+=3){const T=o.getX(p),y=o.getX(p+1),E=o.getX(p+2);r=pr(this,a,e,i,l,h,d,T,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],u=a[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,A=y;E<A;E+=3){const C=E,R=E+1,V=E+2;r=pr(this,u,e,i,l,h,d,C,R,V),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,u=v;p<u;p+=3){const T=p,y=p+1,E=p+2;r=pr(this,a,e,i,l,h,d,T,y,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Nh(n,e,t,i,r,s,a,o){let c;if(e.side===At?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Fn,o),c===null)return null;fr.copy(o),fr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(fr);return l<t.near||l>t.far?null:{distance:l,point:fr.clone(),object:n}}function pr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,hi),n.getVertexPosition(c,ui),n.getVertexPosition(l,di);const h=Nh(n,e,t,i,hi,ui,di,dr);if(h){r&&(lr.fromBufferAttribute(r,o),hr.fromBufferAttribute(r,c),ur.fromBufferAttribute(r,l),h.uv=jt.getInterpolation(dr,hi,ui,di,lr,hr,ur,new Ge)),s&&(lr.fromBufferAttribute(s,o),hr.fromBufferAttribute(s,c),ur.fromBufferAttribute(s,l),h.uv1=jt.getInterpolation(dr,hi,ui,di,lr,hr,ur,new Ge),h.uv2=h.uv1),a&&(Ca.fromBufferAttribute(a,o),La.fromBufferAttribute(a,c),Pa.fromBufferAttribute(a,l),h.normal=jt.getInterpolation(dr,hi,ui,di,Ca,La,Pa,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};jt.getNormal(hi,ui,di,d.normal),h.face=d}return h}class vn extends Vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(d,2));function _(v,p,u,T,y,E,A,C,R,V,M){const b=E/R,W=A/V,Y=E/2,$=A/2,L=C/2,z=R+1,X=V+1;let G=0,te=0;const K=new U;for(let q=0;q<X;q++){const P=q*W-$;for(let k=0;k<z;k++){const oe=k*b-Y;K[v]=oe*T,K[p]=P*y,K[u]=L,l.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[u]=C>0?1:-1,h.push(K.x,K.y,K.z),d.push(k/R),d.push(1-q/V),G+=1}}for(let q=0;q<V;q++)for(let P=0;P<R;P++){const k=f+P+z*q,oe=f+P+z*(q+1),le=f+(P+1)+z*(q+1),ue=f+(P+1)+z*q;c.push(k,oe,ue),c.push(oe,le,ue),te+=6}o.addGroup(m,te,M),m+=te,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=bi(n[t]);for(const r in i)e[r]=i[r]}return e}function Oh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bc(n){return n.getRenderTarget()===null?n.outputColorSpace:qe.workingColorSpace}const Fh={clone:bi,merge:bt};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends kc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class zh extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(fi,pi,e,t);r.layers=this.layers,this.add(r);const s=new kt(fi,pi,e,t);s.layers=this.layers,this.add(s);const a=new kt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new kt(fi,pi,e,t);o.layers=this.layers,this.add(o);const c=new kt(fi,pi,e,t);c.layers=this.layers,this.add(c);const l=new kt(fi,pi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Or)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class zc extends It{constructor(e,t,i,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hh extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?_t:Gt),this.texture=new zc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vn(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:Un});s.uniforms.tEquirect.value=t;const a=new lt(r,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Bt),new zh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Cs=new U,Gh=new U,Vh=new Oe;class Xn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cs.subVectors(i,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vh.getNormalMatrix(e),r=this.coplanarPoint(Cs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Vr,mr=new U;class mo{constructor(e=new Xn,t=new Xn,i=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],u=r[12],T=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-s,f-l,p-m,E-u).normalize(),i[1].setComponents(c+s,f+l,p+m,E+u).normalize(),i[2].setComponents(c+a,f+h,p+_,E+T).normalize(),i[3].setComponents(c-a,f-h,p-_,E-T).normalize(),i[4].setComponents(c-o,f-d,p-v,E-y).normalize(),t===mn)i[5].setComponents(c+o,f+d,p+v,E+y).normalize();else if(t===Or)i[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(mr.x=r.normal.x>0?e.max.x:e.min.x,mr.y=r.normal.y>0?e.max.y:e.min.y,mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Wh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,h){const d=l.array,f=l.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const f=h.array,m=h.updateRange;n.bindBuffer(d,l),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d===void 0?i.set(l,r(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:a,remove:o,update:c}}class Xr extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,f=t/c,m=[],_=[],v=[],p=[];for(let u=0;u<h;u++){const T=u*f-a;for(let y=0;y<l;y++){const E=y*d-s;_.push(E,-T,0),v.push(0,0,1),p.push(y/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<o;T++){const y=T+l*u,E=T+l*(u+1),A=T+1+l*(u+1),C=T+1+l*u;m.push(y,E,C),m.push(E,A,C)}this.setIndex(m),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ku=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$u=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ed=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Td=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Id=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:Kh,alphatest_fragment:jh,alphatest_pars_fragment:$h,aomap_fragment:Zh,aomap_pars_fragment:Jh,begin_vertex:Qh,beginnormal_vertex:eu,bsdfs:tu,iridescence_fragment:nu,bumpmap_pars_fragment:iu,clipping_planes_fragment:ru,clipping_planes_pars_fragment:su,clipping_planes_pars_vertex:ou,clipping_planes_vertex:au,color_fragment:cu,color_pars_fragment:lu,color_pars_vertex:hu,color_vertex:uu,common:du,cube_uv_reflection_fragment:fu,defaultnormal_vertex:pu,displacementmap_pars_vertex:mu,displacementmap_vertex:gu,emissivemap_fragment:_u,emissivemap_pars_fragment:vu,colorspace_fragment:xu,colorspace_pars_fragment:Mu,envmap_fragment:yu,envmap_common_pars_fragment:Su,envmap_pars_fragment:Eu,envmap_pars_vertex:bu,envmap_physical_pars_fragment:Ou,envmap_vertex:Tu,fog_vertex:Au,fog_pars_vertex:wu,fog_fragment:Ru,fog_pars_fragment:Cu,gradientmap_pars_fragment:Lu,lightmap_fragment:Pu,lightmap_pars_fragment:Du,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Iu,lights_pars_begin:Nu,lights_toon_fragment:Fu,lights_toon_pars_fragment:Bu,lights_phong_fragment:ku,lights_phong_pars_fragment:zu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:ju,map_fragment:$u,map_pars_fragment:Zu,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:rd,morphtarget_vertex:sd,normal_fragment_begin:od,normal_fragment_maps:ad,normal_pars_fragment:cd,normal_pars_vertex:ld,normal_vertex:hd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:_d,premultiplied_alpha_fragment:vd,project_vertex:xd,dithering_fragment:Md,dithering_pars_fragment:yd,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:Ed,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Td,shadowmap_vertex:Ad,shadowmask_pars_fragment:wd,skinbase_vertex:Rd,skinning_pars_vertex:Cd,skinning_vertex:Ld,skinnormal_vertex:Pd,specularmap_fragment:Dd,specularmap_pars_fragment:Ud,tonemapping_fragment:Id,tonemapping_pars_fragment:Nd,transmission_fragment:Od,transmission_pars_fragment:Fd,uv_pars_fragment:Bd,uv_pars_vertex:kd,uv_vertex:zd,worldpos_vertex:Hd,background_vert:Gd,background_frag:Vd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:qd,cube_frag:Yd,depth_vert:Kd,depth_frag:jd,distanceRGBA_vert:$d,distanceRGBA_frag:Zd,equirect_vert:Jd,equirect_frag:Qd,linedashed_vert:ef,linedashed_frag:tf,meshbasic_vert:nf,meshbasic_frag:rf,meshlambert_vert:sf,meshlambert_frag:of,meshmatcap_vert:af,meshmatcap_frag:cf,meshnormal_vert:lf,meshnormal_frag:hf,meshphong_vert:uf,meshphong_frag:df,meshphysical_vert:ff,meshphysical_frag:pf,meshtoon_vert:mf,meshtoon_frag:gf,points_vert:_f,points_frag:vf,shadow_vert:xf,shadow_frag:Mf,sprite_vert:yf,sprite_frag:Sf},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Qt={basic:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:bt([re.points,re.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:bt([re.common,re.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:bt([re.sprite,re.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:bt([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:bt([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Qt.physical={uniforms:bt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const gr={r:0,b:0,g:0};function Ef(n,e,t,i,r,s,a){const o=new Fe(0);let c=s===!0?0:1,l,h,d=null,f=0,m=null;function _(p,u){let T=!1,y=u.isScene===!0?u.background:null;y&&y.isTexture&&(y=(u.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,c):y&&y.isColor&&(v(y,1),T=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Hr)?(h===void 0&&(h=new lt(new vn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:bi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=qe.getTransfer(y.colorSpace)!==$e,(d!==y||f!==y.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new lt(new Xr(2,2),new Bn({name:"BackgroundMaterial",uniforms:bi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=qe.getTransfer(y.colorSpace)!==$e,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,u){p.getRGB(gr,Bc(n)),i.buffers.color.setClear(gr.r,gr.g,gr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(o,c)},render:_}}function bf(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=p(null);let l=c,h=!1;function d(L,z,X,G,te){let K=!1;if(a){const q=v(G,X,z);l!==q&&(l=q,m(l.object)),K=u(L,G,X,te),K&&T(L,G,X,te)}else{const q=z.wireframe===!0;(l.geometry!==G.id||l.program!==X.id||l.wireframe!==q)&&(l.geometry=G.id,l.program=X.id,l.wireframe=q,K=!0)}te!==null&&t.update(te,n.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,V(L,z,X,G),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,z,X){const G=X.wireframe===!0;let te=o[L.id];te===void 0&&(te={},o[L.id]=te);let K=te[z.id];K===void 0&&(K={},te[z.id]=K);let q=K[G];return q===void 0&&(q=p(f()),K[G]=q),q}function p(L){const z=[],X=[],G=[];for(let te=0;te<r;te++)z[te]=0,X[te]=0,G[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:G,object:L,attributes:{},index:null}}function u(L,z,X,G){const te=l.attributes,K=z.attributes;let q=0;const P=X.getAttributes();for(const k in P)if(P[k].location>=0){const le=te[k];let ue=K[k];if(ue===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),le===void 0||le.attribute!==ue||ue&&le.data!==ue.data)return!0;q++}return l.attributesNum!==q||l.index!==G}function T(L,z,X,G){const te={},K=z.attributes;let q=0;const P=X.getAttributes();for(const k in P)if(P[k].location>=0){let le=K[k];le===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));const ue={};ue.attribute=le,le&&le.data&&(ue.data=le.data),te[k]=ue,q++}l.attributes=te,l.attributesNum=q,l.index=G}function y(){const L=l.newAttributes;for(let z=0,X=L.length;z<X;z++)L[z]=0}function E(L){A(L,0)}function A(L,z){const X=l.newAttributes,G=l.enabledAttributes,te=l.attributeDivisors;X[L]=1,G[L]===0&&(n.enableVertexAttribArray(L),G[L]=1),te[L]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),te[L]=z)}function C(){const L=l.newAttributes,z=l.enabledAttributes;for(let X=0,G=z.length;X<G;X++)z[X]!==L[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function R(L,z,X,G,te,K,q){q===!0?n.vertexAttribIPointer(L,z,X,te,K):n.vertexAttribPointer(L,z,X,G,te,K)}function V(L,z,X,G){if(i.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const te=G.attributes,K=X.getAttributes(),q=z.defaultAttributeValues;for(const P in K){const k=K[P];if(k.location>=0){let oe=te[P];if(oe===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const le=oe.normalized,ue=oe.itemSize,xe=t.get(oe);if(xe===void 0)continue;const ke=xe.buffer,Te=xe.type,Le=xe.bytesPerElement,Je=i.isWebGL2===!0&&(Te===n.INT||Te===n.UNSIGNED_INT||oe.gpuType===Ec);if(oe.isInterleavedBufferAttribute){const Ue=oe.data,I=Ue.stride,Ct=oe.offset;if(Ue.isInstancedInterleavedBuffer){for(let pe=0;pe<k.locationSize;pe++)A(k.location+pe,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let pe=0;pe<k.locationSize;pe++)E(k.location+pe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let pe=0;pe<k.locationSize;pe++)R(k.location+pe,ue/k.locationSize,Te,le,I*Le,(Ct+ue/k.locationSize*pe)*Le,Je)}else{if(oe.isInstancedBufferAttribute){for(let Ue=0;Ue<k.locationSize;Ue++)A(k.location+Ue,oe.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<k.locationSize;Ue++)E(k.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Ue=0;Ue<k.locationSize;Ue++)R(k.location+Ue,ue/k.locationSize,Te,le,ue*Le,ue/k.locationSize*Ue*Le,Je)}}else if(q!==void 0){const le=q[P];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(k.location,le);break;case 3:n.vertexAttrib3fv(k.location,le);break;case 4:n.vertexAttrib4fv(k.location,le);break;default:n.vertexAttrib1fv(k.location,le)}}}}C()}function M(){Y();for(const L in o){const z=o[L];for(const X in z){const G=z[X];for(const te in G)_(G[te].object),delete G[te];delete z[X]}delete o[L]}}function b(L){if(o[L.id]===void 0)return;const z=o[L.id];for(const X in z){const G=z[X];for(const te in G)_(G[te].object),delete G[te];delete z[X]}delete o[L.id]}function W(L){for(const z in o){const X=o[z];if(X[L.id]===void 0)continue;const G=X[L.id];for(const te in G)_(G[te].object),delete G[te];delete X[L.id]}}function Y(){$(),h=!0,l!==c&&(l=c,m(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:W,initAttributes:y,enableAttribute:E,disableUnusedAttributes:C}}function Tf(n,e,t,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,h){n.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=c}function Af(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,E=a||e.has("OES_texture_float"),A=y&&E,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:C}}function wf(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?h(null):l();else{const T=s?0:i,y=T*4;let E=u.clippingState||null;c.value=E,E=h(_,f,y,m);for(let A=0;A!==y;++A)E[A]=t[A];u.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,m,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,_!==!0||p===null){const u=m+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let y=0,E=m;y!==v;++y,E+=4)a.copy(d[y]).applyMatrix4(T,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Rf(n){let e=new WeakMap;function t(a,o){return o===Vs?a.mapping=yi:o===Ws&&(a.mapping=Si),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Vs||o===Ws)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Hh(c.height/2);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Gc extends kc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,Da=[.125,.215,.35,.446,.526,.582],Kn=20,Ls=new Gc,Ua=new Fe;let Ps=null,Ds=0,Us=0;const qn=(1+Math.sqrt(5))/2,mi=1/qn,Ia=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,qn,mi),new U(0,qn,-mi),new U(mi,0,qn),new U(-mi,0,qn),new U(qn,mi,0),new U(-qn,mi,0)];class Na{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ps=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ps,Ds,Us),e.scissorTest=!1,_r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ps=this._renderer.getRenderTarget(),Ds=this._renderer.getActiveCubeFace(),Us=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Vi,format:Zt,colorSpace:gn,depthBuffer:!1},r=Oa(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cf(s)),this._blurMaterial=Lf(s,e,t)}return r}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Ls)}_sceneToCubeUV(e,t,i,r){const o=new kt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ua),h.toneMapping=In,h.autoClear=!1;const m=new Cn({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),_=new lt(new vn,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Ua),v=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):T===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const y=this._cubeSize;_r(r,T*y,u>2?y:0,y,y),h.setRenderTarget(r),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yi||e.mapping===Si;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;_r(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Ls)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ia[(r-1)%Ia.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new lt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),v=s/_,p=isFinite(s)?1+Math.floor(h*v):Kn;p>Kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const u=[];let T=0;for(let R=0;R<Kn;++R){const V=R/v,M=Math.exp(-V*V/2);u.push(M),R===0?T+=M:R<p&&(T+=2*M)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const E=this._sizeLods[r],A=3*E*(r>y-_i?r-y+_i:0),C=4*(this._cubeSize-E);_r(t,A,C,3*E,2*E),c.setRenderTarget(t),c.render(d,Ls)}}function Cf(n){const e=[],t=[],i=[];let r=n;const s=n-_i+1+Da.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-_i?c=Da[a-n+_i-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,v=3,p=2,u=1,T=new Float32Array(v*_*m),y=new Float32Array(p*_*m),E=new Float32Array(u*_*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,V=C>2?0:-1,M=[R,V,0,R+2/3,V,0,R+2/3,V+1,0,R,V,0,R+2/3,V+1,0,R,V+1,0];T.set(M,v*_*C),y.set(f,p*_*C);const b=[C,C,C,C,C,C];E.set(b,u*_*C)}const A=new Vt;A.setAttribute("position",new Nt(T,v)),A.setAttribute("uv",new Nt(y,p)),A.setAttribute("faceIndex",new Nt(E,u)),e.push(A),r>_i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Oa(n,e,t){const i=new Jn(n,e,t);return i.texture.mapping=Hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Lf(n,e,t){const i=new Float32Array(Kn),r=new U(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Fa(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ba(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pf(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Vs||c===Ws,h=c===yi||c===Si;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Na(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Na(n));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Df(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Uf(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,u=v.length;p<u;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let y=0,E=T.length;y<E;y+=3){const A=T[y+0],C=T[y+1],R=T[y+2];f.push(A,C,C,R,R,A)}}else if(_!==void 0){const T=_.array;v=_.version;for(let y=0,E=T.length/3-1;y<E;y+=3){const A=y+0,C=y+1,R=y+2;f.push(A,C,C,R,R,A)}}else return;const p=new(Pc(f)?Fc:Oc)(f,1);p.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function If(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,m){n.drawElements(s,m,o,f*c),t.update(m,s,1)}function d(f,m,_){if(_===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,o,f*c,_),t.update(m,s,_)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d}function Nf(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Of(n,e){return n[0]-e[0]}function Ff(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Bf(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new gt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let p=s.get(h);if(p===void 0||p.count!==v){let z=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();const y=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],V=h.morphAttributes.color||[];let M=0;y===!0&&(M=1),E===!0&&(M=2),A===!0&&(M=3);let b=h.attributes.position.count*M,W=1;b>e.maxTextureSize&&(W=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const Y=new Float32Array(b*W*4*v),$=new Ic(Y,b,W,v);$.type=Rn,$.needsUpdate=!0;const L=M*4;for(let X=0;X<v;X++){const G=C[X],te=R[X],K=V[X],q=b*W*4*X;for(let P=0;P<G.count;P++){const k=P*L;y===!0&&(a.fromBufferAttribute(G,P),Y[q+k+0]=a.x,Y[q+k+1]=a.y,Y[q+k+2]=a.z,Y[q+k+3]=0),E===!0&&(a.fromBufferAttribute(te,P),Y[q+k+4]=a.x,Y[q+k+5]=a.y,Y[q+k+6]=a.z,Y[q+k+7]=0),A===!0&&(a.fromBufferAttribute(K,P),Y[q+k+8]=a.x,Y[q+k+9]=a.y,Y[q+k+10]=a.z,Y[q+k+11]=K.itemSize===4?a.w:1)}}p={count:v,texture:$,size:new Ge(b,W)},s.set(h,p),h.addEventListener("dispose",z)}let u=0;for(let y=0;y<f.length;y++)u+=f[y];const T=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let v=i[h.id];if(v===void 0||v.length!==_){v=[];for(let E=0;E<_;E++)v[E]=[E,0];i[h.id]=v}for(let E=0;E<_;E++){const A=v[E];A[0]=E,A[1]=f[E]}v.sort(Ff);for(let E=0;E<8;E++)E<_&&v[E][1]?(o[E][0]=v[E][0],o[E][1]=v[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Of);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let T=0;for(let E=0;E<8;E++){const A=o[E],C=A[0],R=A[1];C!==Number.MAX_SAFE_INTEGER&&R?(p&&h.getAttribute("morphTarget"+E)!==p[C]&&h.setAttribute("morphTarget"+E,p[C]),u&&h.getAttribute("morphNormal"+E)!==u[C]&&h.setAttribute("morphNormal"+E,u[C]),r[E]=R,T+=R):(p&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),u&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const y=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function kf(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Vc=new It,Wc=new Ic,Xc=new bh,qc=new zc,ka=[],za=[],Ha=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function Ri(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ka[r];if(s===void 0&&(s=new Float32Array(r),ka[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qr(n,e){let t=za[e];t===void 0&&(t=new Int32Array(e),za[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function Gf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function Vf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function Wf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;Va.set(i),n.uniformMatrix2fv(this.addr,!1,Va),ut(t,i)}}function Xf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;Ga.set(i),n.uniformMatrix3fv(this.addr,!1,Ga),ut(t,i)}}function qf(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ht(t,i))return;Ha.set(i),n.uniformMatrix4fv(this.addr,!1,Ha),ut(t,i)}}function Yf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function $f(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function Zf(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function Qf(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function ep(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function tp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Vc,r)}function np(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Xc,r)}function ip(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qc,r)}function rp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Wc,r)}function sp(n){switch(n){case 5126:return zf;case 35664:return Hf;case 35665:return Gf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return Kf;case 35668:case 35672:return jf;case 35669:case 35673:return $f;case 5125:return Zf;case 36294:return Jf;case 36295:return Qf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}function op(n,e){n.uniform1fv(this.addr,e)}function ap(n,e){const t=Ri(e,this.size,2);n.uniform2fv(this.addr,t)}function cp(n,e){const t=Ri(e,this.size,3);n.uniform3fv(this.addr,t)}function lp(n,e){const t=Ri(e,this.size,4);n.uniform4fv(this.addr,t)}function hp(n,e){const t=Ri(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function up(n,e){const t=Ri(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dp(n,e){const t=Ri(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fp(n,e){n.uniform1iv(this.addr,e)}function pp(n,e){n.uniform2iv(this.addr,e)}function mp(n,e){n.uniform3iv(this.addr,e)}function gp(n,e){n.uniform4iv(this.addr,e)}function _p(n,e){n.uniform1uiv(this.addr,e)}function vp(n,e){n.uniform2uiv(this.addr,e)}function xp(n,e){n.uniform3uiv(this.addr,e)}function Mp(n,e){n.uniform4uiv(this.addr,e)}function yp(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vc,s[a])}function Sp(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Xc,s[a])}function Ep(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||qc,s[a])}function bp(n,e,t){const i=this.cache,r=e.length,s=qr(t,r);ht(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Wc,s[a])}function Tp(n){switch(n){case 5126:return op;case 35664:return ap;case 35665:return cp;case 35666:return lp;case 35674:return hp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return _p;case 36294:return vp;case 36295:return xp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return bp}}class Ap{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=sp(t.type)}}class wp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Tp(t.type)}}class Rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Is=/(\w+)(\])?(\[|\.)?/g;function Wa(n,e){n.seq.push(e),n.map[e.id]=e}function Cp(n,e,t){const i=n.name,r=i.length;for(Is.lastIndex=0;;){const s=Is.exec(i),a=Is.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Wa(t,l===void 0?new Ap(o,n,e):new wp(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Rp(o),Wa(t,d)),t=d}}}class Tr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Cp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Xa(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Lp=37297;let Pp=0;function Dp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Up(n){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(n);let i;switch(e===t?i="":e===Nr&&t===Ir?i="LinearDisplayP3ToLinearSRGB":e===Ir&&t===Nr&&(i="LinearSRGBToLinearDisplayP3"),n){case gn:case Gr:return[i,"LinearTransferOETF"];case _t:case uo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qa(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dp(n.getShaderSource(e),a)}else return r}function Ip(n,e){const t=Up(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Np(n,e){let t;switch(e){case ql:t="Linear";break;case Yl:t="Reinhard";break;case Kl:t="OptimizedCineon";break;case jl:t="ACESFilmic";break;case $l:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Op(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}function Fp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Bi(n){return n!==""}function Ya(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ka(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function $s(n){return n.replace(kp,Hp)}const zp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hp(n,e){let t=Pe[e];if(t===void 0){const i=zp.get(e);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $s(t)}const Gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(n){return n.replace(Gp,Vp)}function Vp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $a(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xp(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yi:case Si:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qp(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function Yp(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lo:e="ENVMAP_BLENDING_MULTIPLY";break;case Wl:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function Kp(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jp(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Wp(t),l=Xp(t),h=qp(t),d=Yp(t),f=Kp(t),m=t.isWebGL2?"":Op(t),_=Fp(s),v=r.createProgram();let p,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bi).join(`
`),p.length>0&&(p+=`
`),u=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bi).join(`
`),u.length>0&&(u+=`
`)):(p=[$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),u=[m,$a(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Pe.tonemapping_pars_fragment:"",t.toneMapping!==In?Np("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Ip("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),a=$s(a),a=Ya(a,t),a=Ka(a,t),o=$s(o),o=Ya(o,t),o=Ka(o,t),a=ja(a),o=ja(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=T+p+a,E=T+u+o,A=Xa(r,r.VERTEX_SHADER,y),C=Xa(r,r.FRAGMENT_SHADER,E);r.attachShader(v,A),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(W){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(v).trim(),$=r.getShaderInfoLog(A).trim(),L=r.getShaderInfoLog(C).trim();let z=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,C);else{const G=qa(r,A,"vertex"),te=qa(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+G+`
`+te)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):($===""||L==="")&&(X=!1);X&&(W.diagnostics={runnable:z,programLog:Y,vertexShader:{log:$,prefix:p},fragmentShader:{log:L,prefix:u}})}r.deleteShader(A),r.deleteShader(C),V=new Tr(r,v),M=Bp(r,v)}let V;this.getUniforms=function(){return V===void 0&&R(this),V};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,Lp)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let $p=0;class Zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jp(e),t.set(e,i)),i}}class Jp{constructor(e){this.id=$p++,this.code=e,this.usedTimes=0}}function Qp(n,e,t,i,r,s,a){const o=new po,c=new Zp,l=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,b,W,Y,$){const L=Y.fog,z=$.geometry,X=M.isMeshStandardMaterial?Y.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),te=G&&G.mapping===Hr?G.image.height:null,K=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,P=q!==void 0?q.length:0;let k=0;z.morphAttributes.position!==void 0&&(k=1),z.morphAttributes.normal!==void 0&&(k=2),z.morphAttributes.color!==void 0&&(k=3);let oe,le,ue,xe;if(K){const it=Qt[K];oe=it.vertexShader,le=it.fragmentShader}else oe=M.vertexShader,le=M.fragmentShader,c.update(M),ue=c.getVertexShaderID(M),xe=c.getFragmentShaderID(M);const ke=n.getRenderTarget(),Te=$.isInstancedMesh===!0,Le=!!M.map,Je=!!M.matcap,Ue=!!G,I=!!M.aoMap,Ct=!!M.lightMap,pe=!!M.bumpMap,Ae=!!M.normalMap,Ee=!!M.displacementMap,Qe=!!M.emissiveMap,Ie=!!M.metalnessMap,Ne=!!M.roughnessMap,Ke=M.anisotropy>0,dt=M.clearcoat>0,xt=M.iridescence>0,S=M.sheen>0,g=M.transmission>0,N=Ke&&!!M.anisotropyMap,J=dt&&!!M.clearcoatMap,j=dt&&!!M.clearcoatNormalMap,Q=dt&&!!M.clearcoatRoughnessMap,de=xt&&!!M.iridescenceMap,ie=xt&&!!M.iridescenceThicknessMap,ae=S&&!!M.sheenColorMap,Me=S&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,Z=!!M.specularColorMap,Xe=!!M.specularIntensityMap,we=g&&!!M.transmissionMap,ye=g&&!!M.thicknessMap,me=!!M.gradientMap,he=!!M.alphaMap,He=M.alphaTest>0,w=!!M.alphaHash,se=!!M.extensions,ee=!!z.attributes.uv1,H=!!z.attributes.uv2,ne=!!z.attributes.uv3;let ge=In;return M.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(ge=n.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:le,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Te,instancingColor:Te&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:gn,map:Le,matcap:Je,envMap:Ue,envMapMode:Ue&&G.mapping,envMapCubeUVHeight:te,aoMap:I,lightMap:Ct,bumpMap:pe,normalMap:Ae,displacementMap:f&&Ee,emissiveMap:Qe,normalMapObjectSpace:Ae&&M.normalMapType===lh,normalMapTangentSpace:Ae&&M.normalMapType===Lc,metalnessMap:Ie,roughnessMap:Ne,anisotropy:Ke,anisotropyMap:N,clearcoat:dt,clearcoatMap:J,clearcoatNormalMap:j,clearcoatRoughnessMap:Q,iridescence:xt,iridescenceMap:de,iridescenceThicknessMap:ie,sheen:S,sheenColorMap:ae,sheenRoughnessMap:Me,specularMap:Ve,specularColorMap:Z,specularIntensityMap:Xe,transmission:g,transmissionMap:we,thicknessMap:ye,gradientMap:me,opaque:M.transparent===!1&&M.blending===xi,alphaMap:he,alphaTest:He,alphaHash:w,combine:M.combine,mapUv:Le&&v(M.map.channel),aoMapUv:I&&v(M.aoMap.channel),lightMapUv:Ct&&v(M.lightMap.channel),bumpMapUv:pe&&v(M.bumpMap.channel),normalMapUv:Ae&&v(M.normalMap.channel),displacementMapUv:Ee&&v(M.displacementMap.channel),emissiveMapUv:Qe&&v(M.emissiveMap.channel),metalnessMapUv:Ie&&v(M.metalnessMap.channel),roughnessMapUv:Ne&&v(M.roughnessMap.channel),anisotropyMapUv:N&&v(M.anisotropyMap.channel),clearcoatMapUv:J&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:j&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(M.sheenRoughnessMap.channel),specularMapUv:Ve&&v(M.specularMap.channel),specularColorMapUv:Z&&v(M.specularColorMap.channel),specularIntensityMapUv:Xe&&v(M.specularIntensityMap.channel),transmissionMapUv:we&&v(M.transmissionMap.channel),thicknessMapUv:ye&&v(M.thicknessMap.channel),alphaMapUv:he&&v(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ae||Ke),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:H,vertexUv3s:ne,pointsUvs:$.isPoints===!0&&!!z.attributes.uv&&(Le||he),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:k,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===At,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)b.push(W),b.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(T(b,M),y(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function T(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function E(M){const b=_[M.type];let W;if(b){const Y=Qt[b];W=Fh.clone(Y.uniforms)}else W=M.uniforms;return W}function A(M,b){let W;for(let Y=0,$=l.length;Y<$;Y++){const L=l[Y];if(L.cacheKey===b){W=L,++W.usedTimes;break}}return W===void 0&&(W=new jp(n,b,M,s),l.push(W)),W}function C(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:l,dispose:V}}function em(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function tm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Za(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ja(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,_,v,p){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=p),e++,u}function o(d,f,m,_,v,p){const u=a(d,f,m,_,v,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(d,f,m,_,v,p){const u=a(d,f,m,_,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||tm),i.length>1&&i.sort(f||Za),r.length>1&&r.sort(f||Za)}function h(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function nm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ja,n.set(i,[a])):r>=s.length?(a=new Ja,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function im(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function rm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sm=0;function om(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function am(n,e){const t=new im,i=rm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new U);const s=new U,a=new at,o=new at;function c(h,d){let f=0,m=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let v=0,p=0,u=0,T=0,y=0,E=0,A=0,C=0,R=0,V=0,M=0;h.sort(om);const b=d===!0?Math.PI:1;for(let Y=0,$=h.length;Y<$;Y++){const L=h[Y],z=L.color,X=L.intensity,G=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=z.r*X*b,m+=z.g*X*b,_+=z.b*X*b;else if(L.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(L.sh.coefficients[K],X);M++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const q=L.shadow,P=i.get(L);P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,r.directionalShadow[v]=P,r.directionalShadowMap[v]=te,r.directionalShadowMatrix[v]=L.shadow.matrix,E++}r.directional[v]=K,v++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(z).multiplyScalar(X*b),K.distance=G,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,r.spot[u]=K;const q=L.shadow;if(L.map&&(r.spotLightMap[R]=L.map,R++,q.updateMatrices(L),L.castShadow&&V++),r.spotLightMatrix[u]=q.matrix,L.castShadow){const P=i.get(L);P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,r.spotShadow[u]=P,r.spotShadowMap[u]=te,C++}u++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(z).multiplyScalar(X),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),r.rectArea[T]=K,T++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*b),K.distance=L.distance,K.decay=L.decay,L.castShadow){const q=L.shadow,P=i.get(L);P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,P.shadowCameraNear=q.camera.near,P.shadowCameraFar=q.camera.far,r.pointShadow[p]=P,r.pointShadowMap[p]=te,r.pointShadowMatrix[p]=L.shadow.matrix,A++}r.point[p]=K,p++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(X*b),K.groundColor.copy(L.groundColor).multiplyScalar(X*b),r.hemi[y]=K,y++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==v||W.pointLength!==p||W.spotLength!==u||W.rectAreaLength!==T||W.hemiLength!==y||W.numDirectionalShadows!==E||W.numPointShadows!==A||W.numSpotShadows!==C||W.numSpotMaps!==R||W.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=u,r.rectArea.length=T,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=C+R-V,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=M,W.directionalLength=v,W.pointLength=p,W.spotLength=u,W.rectAreaLength=T,W.hemiLength=y,W.numDirectionalShadows=E,W.numPointShadows=A,W.numSpotShadows=C,W.numSpotMaps=R,W.numLightProbes=M,r.version=sm++)}function l(h,d){let f=0,m=0,_=0,v=0,p=0;const u=d.matrixWorldInverse;for(let T=0,y=h.length;T<y;T++){const E=h[T];if(E.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),f++}else if(E.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:r}}function Qa(n,e){const t=new am(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function cm(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let c;return o===void 0?(c=new Qa(n,e),t.set(s,[c])):a>=o.length?(c=new Qa(n,e),o.push(c)):c=o[a],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class lm extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hm extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fm(n,e,t){let i=new mo;const r=new Ge,s=new Ge,a=new gt,o=new lm({depthPacking:ch}),c=new hm,l={},h=t.maxTextureSize,d={[Fn]:At,[At]:Fn,[fn]:fn},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:um,fragmentShader:dm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let u=this.type;this.render=function(A,C,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const V=n.getRenderTarget(),M=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Un),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=u!==dn&&this.type===dn,$=u===dn&&this.type!==dn;for(let L=0,z=A.length;L<z;L++){const X=A[L],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const te=G.getFrameExtents();if(r.multiply(te),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,G.mapSize.y=s.y)),G.map===null||Y===!0||$===!0){const q=this.type!==dn?{minFilter:Tt,magFilter:Tt}:{};G.map!==null&&G.map.dispose(),G.map=new Jn(r.x,r.y,q),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const K=G.getViewportCount();for(let q=0;q<K;q++){const P=G.getViewport(q);a.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),W.viewport(a),G.updateMatrices(X,q),i=G.getFrustum(),E(C,R,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===dn&&T(G,R),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(V,M,b)};function T(A,C){const R=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,R,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,R,m,v,null)}function y(A,C,R,V){let M=null;const b=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)M=b;else if(M=R.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=M.uuid,Y=C.uuid;let $=l[W];$===void 0&&($={},l[W]=$);let L=$[Y];L===void 0&&(L=M.clone(),$[Y]=L),M=L}if(M.visible=C.visible,M.wireframe=C.wireframe,V===dn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=R}return M}function E(A,C,R,V,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===dn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const Y=e.update(A),$=A.material;if(Array.isArray($)){const L=Y.groups;for(let z=0,X=L.length;z<X;z++){const G=L[z],te=$[G.materialIndex];if(te&&te.visible){const K=y(A,te,V,M);n.renderBufferDirect(R,null,Y,K,A,G)}}}else if($.visible){const L=y(A,$,V,M);n.renderBufferDirect(R,null,Y,L,A,null)}}const W=A.children;for(let Y=0,$=W.length;Y<$;Y++)E(W[Y],C,R,V,M)}}function pm(n,e,t){const i=t.isWebGL2;function r(){let w=!1;const se=new gt;let ee=null;const H=new gt(0,0,0,0);return{setMask:function(ne){ee!==ne&&!w&&(n.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){w=ne},setClear:function(ne,ge,We,it,Ot){Ot===!0&&(ne*=it,ge*=it,We*=it),se.set(ne,ge,We,it),H.equals(se)===!1&&(n.clearColor(ne,ge,We,it),H.copy(se))},reset:function(){w=!1,ee=null,H.set(-1,0,0,0)}}}function s(){let w=!1,se=null,ee=null,H=null;return{setTest:function(ne){ne?Le(n.DEPTH_TEST):Je(n.DEPTH_TEST)},setMask:function(ne){se!==ne&&!w&&(n.depthMask(ne),se=ne)},setFunc:function(ne){if(ee!==ne){switch(ne){case Fl:n.depthFunc(n.NEVER);break;case Bl:n.depthFunc(n.ALWAYS);break;case kl:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case zl:n.depthFunc(n.EQUAL);break;case Hl:n.depthFunc(n.GEQUAL);break;case Gl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ne}},setLocked:function(ne){w=ne},setClear:function(ne){H!==ne&&(n.clearDepth(ne),H=ne)},reset:function(){w=!1,se=null,ee=null,H=null}}}function a(){let w=!1,se=null,ee=null,H=null,ne=null,ge=null,We=null,it=null,Ot=null;return{setTest:function(je){w||(je?Le(n.STENCIL_TEST):Je(n.STENCIL_TEST))},setMask:function(je){se!==je&&!w&&(n.stencilMask(je),se=je)},setFunc:function(je,St,Jt){(ee!==je||H!==St||ne!==Jt)&&(n.stencilFunc(je,St,Jt),ee=je,H=St,ne=Jt)},setOp:function(je,St,Jt){(ge!==je||We!==St||it!==Jt)&&(n.stencilOp(je,St,Jt),ge=je,We=St,it=Jt)},setLocked:function(je){w=je},setClear:function(je){Ot!==je&&(n.clearStencil(je),Ot=je)},reset:function(){w=!1,se=null,ee=null,H=null,ne=null,ge=null,We=null,it=null,Ot=null}}}const o=new r,c=new s,l=new a,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,u=!1,T=null,y=null,E=null,A=null,C=null,R=null,V=null,M=new Fe(0,0,0),b=0,W=!1,Y=null,$=null,L=null,z=null,X=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,K=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),te=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),te=K>=2);let P=null,k={};const oe=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),ue=new gt().fromArray(oe),xe=new gt().fromArray(le);function ke(w,se,ee,H){const ne=new Uint8Array(4),ge=n.createTexture();n.bindTexture(w,ge),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<ee;We++)i&&(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,H,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(se+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return ge}const Te={};Te[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Te[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Le(n.DEPTH_TEST),c.setFunc(Dr),Ie(!1),Ne(Io),Le(n.CULL_FACE),Ee(Un);function Le(w){f[w]!==!0&&(n.enable(w),f[w]=!0)}function Je(w){f[w]!==!1&&(n.disable(w),f[w]=!1)}function Ue(w,se){return m[w]!==se?(n.bindFramebuffer(w,se),m[w]=se,i&&(w===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),w===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function I(w,se){let ee=v,H=!1;if(w)if(ee=_.get(se),ee===void 0&&(ee=[],_.set(se,ee)),w.isWebGLMultipleRenderTargets){const ne=w.texture;if(ee.length!==ne.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,We=ne.length;ge<We;ge++)ee[ge]=n.COLOR_ATTACHMENT0+ge;ee.length=ne.length,H=!0}}else ee[0]!==n.COLOR_ATTACHMENT0&&(ee[0]=n.COLOR_ATTACHMENT0,H=!0);else ee[0]!==n.BACK&&(ee[0]=n.BACK,H=!0);H&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ct(w){return p!==w?(n.useProgram(w),p=w,!0):!1}const pe={[Yn]:n.FUNC_ADD,[Sl]:n.FUNC_SUBTRACT,[El]:n.FUNC_REVERSE_SUBTRACT};if(i)pe[Bo]=n.MIN,pe[ko]=n.MAX;else{const w=e.get("EXT_blend_minmax");w!==null&&(pe[Bo]=w.MIN_EXT,pe[ko]=w.MAX_EXT)}const Ae={[bl]:n.ZERO,[Tl]:n.ONE,[Al]:n.SRC_COLOR,[Hs]:n.SRC_ALPHA,[Dl]:n.SRC_ALPHA_SATURATE,[Ll]:n.DST_COLOR,[Rl]:n.DST_ALPHA,[wl]:n.ONE_MINUS_SRC_COLOR,[Gs]:n.ONE_MINUS_SRC_ALPHA,[Pl]:n.ONE_MINUS_DST_COLOR,[Cl]:n.ONE_MINUS_DST_ALPHA,[Ul]:n.CONSTANT_COLOR,[Il]:n.ONE_MINUS_CONSTANT_COLOR,[Nl]:n.CONSTANT_ALPHA,[Ol]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(w,se,ee,H,ne,ge,We,it,Ot,je){if(w===Un){u===!0&&(Je(n.BLEND),u=!1);return}if(u===!1&&(Le(n.BLEND),u=!0),w!==yl){if(w!==T||je!==W){if((y!==Yn||C!==Yn)&&(n.blendEquation(n.FUNC_ADD),y=Yn,C=Yn),je)switch(w){case xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFunc(n.ONE,n.ONE);break;case Oo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case No:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Oo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}E=null,A=null,R=null,V=null,M.set(0,0,0),b=0,T=w,W=je}return}ne=ne||se,ge=ge||ee,We=We||H,(se!==y||ne!==C)&&(n.blendEquationSeparate(pe[se],pe[ne]),y=se,C=ne),(ee!==E||H!==A||ge!==R||We!==V)&&(n.blendFuncSeparate(Ae[ee],Ae[H],Ae[ge],Ae[We]),E=ee,A=H,R=ge,V=We),(it.equals(M)===!1||Ot!==b)&&(n.blendColor(it.r,it.g,it.b,Ot),M.copy(it),b=Ot),T=w,W=!1}function Qe(w,se){w.side===fn?Je(n.CULL_FACE):Le(n.CULL_FACE);let ee=w.side===At;se&&(ee=!ee),Ie(ee),w.blending===xi&&w.transparent===!1?Ee(Un):Ee(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),c.setFunc(w.depthFunc),c.setTest(w.depthTest),c.setMask(w.depthWrite),o.setMask(w.colorWrite);const H=w.stencilWrite;l.setTest(H),H&&(l.setMask(w.stencilWriteMask),l.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),l.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),dt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Le(n.SAMPLE_ALPHA_TO_COVERAGE):Je(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(w){Y!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),Y=w)}function Ne(w){w!==xl?(Le(n.CULL_FACE),w!==$&&(w===Io?n.cullFace(n.BACK):w===Ml?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Je(n.CULL_FACE),$=w}function Ke(w){w!==L&&(te&&n.lineWidth(w),L=w)}function dt(w,se,ee){w?(Le(n.POLYGON_OFFSET_FILL),(z!==se||X!==ee)&&(n.polygonOffset(se,ee),z=se,X=ee)):Je(n.POLYGON_OFFSET_FILL)}function xt(w){w?Le(n.SCISSOR_TEST):Je(n.SCISSOR_TEST)}function S(w){w===void 0&&(w=n.TEXTURE0+G-1),P!==w&&(n.activeTexture(w),P=w)}function g(w,se,ee){ee===void 0&&(P===null?ee=n.TEXTURE0+G-1:ee=P);let H=k[ee];H===void 0&&(H={type:void 0,texture:void 0},k[ee]=H),(H.type!==w||H.texture!==se)&&(P!==ee&&(n.activeTexture(ee),P=ee),n.bindTexture(w,se||Te[w]),H.type=w,H.texture=se)}function N(){const w=k[P];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ve(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Xe(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function we(w){ue.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),ue.copy(w))}function ye(w){xe.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),xe.copy(w))}function me(w,se){let ee=d.get(se);ee===void 0&&(ee=new WeakMap,d.set(se,ee));let H=ee.get(w);H===void 0&&(H=n.getUniformBlockIndex(se,w.name),ee.set(w,H))}function he(w,se){const H=d.get(se).get(w);h.get(se)!==H&&(n.uniformBlockBinding(se,H,w.__bindingPointIndex),h.set(se,H))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},P=null,k={},m={},_=new WeakMap,v=[],p=null,u=!1,T=null,y=null,E=null,A=null,C=null,R=null,V=null,M=new Fe(0,0,0),b=0,W=!1,Y=null,$=null,L=null,z=null,X=null,ue.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Le,disable:Je,bindFramebuffer:Ue,drawBuffers:I,useProgram:Ct,setBlending:Ee,setMaterial:Qe,setFlipSided:Ie,setCullFace:Ne,setLineWidth:Ke,setPolygonOffset:dt,setScissorTest:xt,activeTexture:S,bindTexture:g,unbindTexture:N,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:Z,texImage3D:Xe,updateUBOMapping:me,uniformBlockBinding:he,texStorage2D:Me,texStorage3D:Ve,texSubImage2D:Q,texSubImage3D:de,compressedTexSubImage2D:ie,compressedTexSubImage3D:ae,scissor:we,viewport:ye,reset:He}}function mm(n,e,t,i,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(S,g){return u?new OffscreenCanvas(S,g):Fr("canvas")}function y(S,g,N,J){let j=1;if((S.width>J||S.height>J)&&(j=J/Math.max(S.width,S.height)),j<1||g===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const Q=g?js:Math.floor,de=Q(j*S.width),ie=Q(j*S.height);v===void 0&&(v=T(de,ie));const ae=N?T(de,ie):v;return ae.width=de,ae.height=ie,ae.getContext("2d").drawImage(S,0,0,de,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+de+"x"+ie+")."),ae}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function E(S){return ma(S.width)&&ma(S.height)}function A(S){return o?!1:S.wrapS!==$t||S.wrapT!==$t||S.minFilter!==Tt&&S.minFilter!==Bt}function C(S,g){return S.generateMipmaps&&g&&S.minFilter!==Tt&&S.minFilter!==Bt}function R(S){n.generateMipmap(S)}function V(S,g,N,J,j=!1){if(o===!1)return g;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Q=g;if(g===n.RED&&(N===n.FLOAT&&(Q=n.R32F),N===n.HALF_FLOAT&&(Q=n.R16F),N===n.UNSIGNED_BYTE&&(Q=n.R8)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Q=n.R8UI),N===n.UNSIGNED_SHORT&&(Q=n.R16UI),N===n.UNSIGNED_INT&&(Q=n.R32UI),N===n.BYTE&&(Q=n.R8I),N===n.SHORT&&(Q=n.R16I),N===n.INT&&(Q=n.R32I)),g===n.RG&&(N===n.FLOAT&&(Q=n.RG32F),N===n.HALF_FLOAT&&(Q=n.RG16F),N===n.UNSIGNED_BYTE&&(Q=n.RG8)),g===n.RGBA){const de=j?Ur:qe.getTransfer(J);N===n.FLOAT&&(Q=n.RGBA32F),N===n.HALF_FLOAT&&(Q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Q=de===$e?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(S,g,N){return C(S,N)===!0||S.isFramebufferTexture&&S.minFilter!==Tt&&S.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function b(S){return S===Tt||S===zo||S===ss?n.NEAREST:n.LINEAR}function W(S){const g=S.target;g.removeEventListener("dispose",W),$(g),g.isVideoTexture&&_.delete(g)}function Y(S){const g=S.target;g.removeEventListener("dispose",Y),z(g)}function $(S){const g=i.get(S);if(g.__webglInit===void 0)return;const N=S.source,J=p.get(N);if(J){const j=J[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(S),Object.keys(J).length===0&&p.delete(N)}i.remove(S)}function L(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const N=S.source,J=p.get(N);delete J[g.__cacheKey],a.memory.textures--}function z(S){const g=S.texture,N=i.get(S),J=i.get(g);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(N.__webglFramebuffer[j]))for(let Q=0;Q<N.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(N.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(N.__webglFramebuffer[j]);N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer[j])}else{if(Array.isArray(N.__webglFramebuffer))for(let j=0;j<N.__webglFramebuffer.length;j++)n.deleteFramebuffer(N.__webglFramebuffer[j]);else n.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&n.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&n.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let j=0;j<N.__webglColorRenderbuffer.length;j++)N.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(N.__webglColorRenderbuffer[j]);N.__webglDepthRenderbuffer&&n.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let j=0,Q=g.length;j<Q;j++){const de=i.get(g[j]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(g[j])}i.remove(g),i.remove(S)}let X=0;function G(){X=0}function te(){const S=X;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),X+=1,S}function K(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function q(S,g){const N=i.get(S);if(S.isVideoTexture&&dt(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(N,S,g);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function P(S,g){const N=i.get(S);if(S.version>0&&N.__version!==S.version){Le(N,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function k(S,g){const N=i.get(S);if(S.version>0&&N.__version!==S.version){Le(N,S,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function oe(S,g){const N=i.get(S);if(S.version>0&&N.__version!==S.version){Je(N,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const le={[Xs]:n.REPEAT,[$t]:n.CLAMP_TO_EDGE,[qs]:n.MIRRORED_REPEAT},ue={[Tt]:n.NEAREST,[zo]:n.NEAREST_MIPMAP_NEAREST,[ss]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[Zl]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},xe={[hh]:n.NEVER,[_h]:n.ALWAYS,[uh]:n.LESS,[fh]:n.LEQUAL,[dh]:n.EQUAL,[gh]:n.GEQUAL,[ph]:n.GREATER,[mh]:n.NOTEQUAL};function ke(S,g,N){if(N?(n.texParameteri(S,n.TEXTURE_WRAP_S,le[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,le[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,le[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ue[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ue[g.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(g.wrapS!==$t||g.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,b(g.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,b(g.minFilter)),g.minFilter!==Tt&&g.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Tt||g.minFilter!==ss&&g.minFilter!==Gi||g.type===Rn&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Vi&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(S,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Te(S,g){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",W));const J=g.source;let j=p.get(J);j===void 0&&(j={},p.set(J,j));const Q=K(g);if(Q!==S.__cacheKey){j[Q]===void 0&&(j[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[Q].usedTimes++;const de=j[S.__cacheKey];de!==void 0&&(j[S.__cacheKey].usedTimes--,de.usedTimes===0&&L(g)),S.__cacheKey=Q,S.__webglTexture=j[Q].texture}return N}function Le(S,g,N){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const j=Te(S,g),Q=g.source;t.bindTexture(J,S.__webglTexture,n.TEXTURE0+N);const de=i.get(Q);if(Q.version!==de.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const ie=qe.getPrimaries(qe.workingColorSpace),ae=g.colorSpace===Gt?null:qe.getPrimaries(g.colorSpace),Me=g.colorSpace===Gt||ie===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ve=A(g)&&E(g.image)===!1;let Z=y(g.image,Ve,!1,h);Z=xt(g,Z);const Xe=E(Z)||o,we=s.convert(g.format,g.colorSpace);let ye=s.convert(g.type),me=V(g.internalFormat,we,ye,g.colorSpace,g.isVideoTexture);ke(J,g,Xe);let he;const He=g.mipmaps,w=o&&g.isVideoTexture!==!0,se=de.__version===void 0||j===!0,ee=M(g,Z,Xe);if(g.isDepthTexture)me=n.DEPTH_COMPONENT,o?g.type===Rn?me=n.DEPTH_COMPONENT32F:g.type===wn?me=n.DEPTH_COMPONENT24:g.type===jn?me=n.DEPTH24_STENCIL8:me=n.DEPTH_COMPONENT16:g.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===$n&&me===n.DEPTH_COMPONENT&&g.type!==ho&&g.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=wn,ye=s.convert(g.type)),g.format===Ei&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,g.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=jn,ye=s.convert(g.type))),se&&(w?t.texStorage2D(n.TEXTURE_2D,1,me,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,me,Z.width,Z.height,0,we,ye,null));else if(g.isDataTexture)if(He.length>0&&Xe){w&&se&&t.texStorage2D(n.TEXTURE_2D,ee,me,He[0].width,He[0].height);for(let H=0,ne=He.length;H<ne;H++)he=He[H],w?t.texSubImage2D(n.TEXTURE_2D,H,0,0,he.width,he.height,we,ye,he.data):t.texImage2D(n.TEXTURE_2D,H,me,he.width,he.height,0,we,ye,he.data);g.generateMipmaps=!1}else w?(se&&t.texStorage2D(n.TEXTURE_2D,ee,me,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,we,ye,Z.data)):t.texImage2D(n.TEXTURE_2D,0,me,Z.width,Z.height,0,we,ye,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){w&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,me,He[0].width,He[0].height,Z.depth);for(let H=0,ne=He.length;H<ne;H++)he=He[H],g.format!==Zt?we!==null?w?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,Z.depth,we,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,me,he.width,he.height,Z.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,Z.depth,we,ye,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,me,he.width,he.height,Z.depth,0,we,ye,he.data)}else{w&&se&&t.texStorage2D(n.TEXTURE_2D,ee,me,He[0].width,He[0].height);for(let H=0,ne=He.length;H<ne;H++)he=He[H],g.format!==Zt?we!==null?w?t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,he.width,he.height,we,he.data):t.compressedTexImage2D(n.TEXTURE_2D,H,me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?t.texSubImage2D(n.TEXTURE_2D,H,0,0,he.width,he.height,we,ye,he.data):t.texImage2D(n.TEXTURE_2D,H,me,he.width,he.height,0,we,ye,he.data)}else if(g.isDataArrayTexture)w?(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,me,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,we,ye,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,Z.width,Z.height,Z.depth,0,we,ye,Z.data);else if(g.isData3DTexture)w?(se&&t.texStorage3D(n.TEXTURE_3D,ee,me,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,we,ye,Z.data)):t.texImage3D(n.TEXTURE_3D,0,me,Z.width,Z.height,Z.depth,0,we,ye,Z.data);else if(g.isFramebufferTexture){if(se)if(w)t.texStorage2D(n.TEXTURE_2D,ee,me,Z.width,Z.height);else{let H=Z.width,ne=Z.height;for(let ge=0;ge<ee;ge++)t.texImage2D(n.TEXTURE_2D,ge,me,H,ne,0,we,ye,null),H>>=1,ne>>=1}}else if(He.length>0&&Xe){w&&se&&t.texStorage2D(n.TEXTURE_2D,ee,me,He[0].width,He[0].height);for(let H=0,ne=He.length;H<ne;H++)he=He[H],w?t.texSubImage2D(n.TEXTURE_2D,H,0,0,we,ye,he):t.texImage2D(n.TEXTURE_2D,H,me,we,ye,he);g.generateMipmaps=!1}else w?(se&&t.texStorage2D(n.TEXTURE_2D,ee,me,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,ye,Z)):t.texImage2D(n.TEXTURE_2D,0,me,we,ye,Z);C(g,Xe)&&R(J),de.__version=Q.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Je(S,g,N){if(g.image.length!==6)return;const J=Te(S,g),j=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+N);const Q=i.get(j);if(j.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+N);const de=qe.getPrimaries(qe.workingColorSpace),ie=g.colorSpace===Gt?null:qe.getPrimaries(g.colorSpace),ae=g.colorSpace===Gt||de===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Me=g.isCompressedTexture||g.image[0].isCompressedTexture,Ve=g.image[0]&&g.image[0].isDataTexture,Z=[];for(let H=0;H<6;H++)!Me&&!Ve?Z[H]=y(g.image[H],!1,!0,l):Z[H]=Ve?g.image[H].image:g.image[H],Z[H]=xt(g,Z[H]);const Xe=Z[0],we=E(Xe)||o,ye=s.convert(g.format,g.colorSpace),me=s.convert(g.type),he=V(g.internalFormat,ye,me,g.colorSpace),He=o&&g.isVideoTexture!==!0,w=Q.__version===void 0||J===!0;let se=M(g,Xe,we);ke(n.TEXTURE_CUBE_MAP,g,we);let ee;if(Me){He&&w&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,he,Xe.width,Xe.height);for(let H=0;H<6;H++){ee=Z[H].mipmaps;for(let ne=0;ne<ee.length;ne++){const ge=ee[ne];g.format!==Zt?ye!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,he,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,0,0,ge.width,ge.height,ye,me,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne,he,ge.width,ge.height,0,ye,me,ge.data)}}}else{ee=g.mipmaps,He&&w&&(ee.length>0&&se++,t.texStorage2D(n.TEXTURE_CUBE_MAP,se,he,Z[0].width,Z[0].height));for(let H=0;H<6;H++)if(Ve){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Z[H].width,Z[H].height,ye,me,Z[H].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,he,Z[H].width,Z[H].height,0,ye,me,Z[H].data);for(let ne=0;ne<ee.length;ne++){const We=ee[ne].image[H].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,0,0,We.width,We.height,ye,me,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,he,We.width,We.height,0,ye,me,We.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ye,me,Z[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,he,ye,me,Z[H]);for(let ne=0;ne<ee.length;ne++){const ge=ee[ne];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,0,0,ye,me,ge.image[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,ne+1,he,ye,me,ge.image[H])}}}C(g,we)&&R(n.TEXTURE_CUBE_MAP),Q.__version=j.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ue(S,g,N,J,j,Q){const de=s.convert(N.format,N.colorSpace),ie=s.convert(N.type),ae=V(N.internalFormat,de,ie,N.colorSpace);if(!i.get(g).__hasExternalTextures){const Ve=Math.max(1,g.width>>Q),Z=Math.max(1,g.height>>Q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,Q,ae,Ve,Z,g.depth,0,de,ie,null):t.texImage2D(j,Q,ae,Ve,Z,0,de,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ke(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,j,i.get(N).__webglTexture,0,Ne(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,j,i.get(N).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(S,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer&&!g.stencilBuffer){let J=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(N||Ke(g)){const j=g.depthTexture;j&&j.isDepthTexture&&(j.type===Rn?J=n.DEPTH_COMPONENT32F:j.type===wn&&(J=n.DEPTH_COMPONENT24));const Q=Ne(g);Ke(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,J,g.width,g.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,J,g.width,g.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,g.width,g.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(g.depthBuffer&&g.stencilBuffer){const J=Ne(g);N&&Ke(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,g.width,g.height):Ke(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const J=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let j=0;j<J.length;j++){const Q=J[j],de=s.convert(Q.format,Q.colorSpace),ie=s.convert(Q.type),ae=V(Q.internalFormat,de,ie,Q.colorSpace),Me=Ne(g);N&&Ke(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ae,g.width,g.height):Ke(g)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ae,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const J=i.get(g.depthTexture).__webglTexture,j=Ne(g);if(g.depthTexture.format===$n)Ke(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(g.depthTexture.format===Ei)Ke(g)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function pe(S){const g=i.get(S),N=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ct(g.__webglFramebuffer,S)}else if(N){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]=n.createRenderbuffer(),I(g.__webglDepthbuffer[J],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),I(g.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(S,g,N){const J=i.get(S);g!==void 0&&Ue(J.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&pe(S)}function Ee(S){const g=S.texture,N=i.get(S),J=i.get(g);S.addEventListener("dispose",Y),S.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,a.memory.textures++);const j=S.isWebGLCubeRenderTarget===!0,Q=S.isWebGLMultipleRenderTargets===!0,de=E(S)||o;if(j){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(o&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let ae=0;ae<g.mipmaps.length;ae++)N.__webglFramebuffer[ie][ae]=n.createFramebuffer()}else N.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)N.__webglFramebuffer[ie]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Q)if(r.drawBuffers){const ie=S.texture;for(let ae=0,Me=ie.length;ae<Me;ae++){const Ve=i.get(ie[ae]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Ke(S)===!1){const ie=Q?g:[g];N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){const Me=ie[ae];N.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const Ve=s.convert(Me.format,Me.colorSpace),Z=s.convert(Me.type),Xe=V(Me.internalFormat,Ve,Z,Me.colorSpace,S.isXRRenderTarget===!0),we=Ne(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Xe,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),I(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ke(n.TEXTURE_CUBE_MAP,g,de);for(let ie=0;ie<6;ie++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)Ue(N.__webglFramebuffer[ie][ae],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else Ue(N.__webglFramebuffer[ie],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);C(g,de)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const ie=S.texture;for(let ae=0,Me=ie.length;ae<Me;ae++){const Ve=ie[ae],Z=i.get(Ve);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),ke(n.TEXTURE_2D,Ve,de),Ue(N.__webglFramebuffer,S,Ve,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),C(Ve,de)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?ie=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,J.__webglTexture),ke(ie,g,de),o&&g.mipmaps&&g.mipmaps.length>0)for(let ae=0;ae<g.mipmaps.length;ae++)Ue(N.__webglFramebuffer[ae],S,g,n.COLOR_ATTACHMENT0,ie,ae);else Ue(N.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,ie,0);C(g,de)&&R(ie),t.unbindTexture()}S.depthBuffer&&pe(S)}function Qe(S){const g=E(S)||o,N=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0,j=N.length;J<j;J++){const Q=N[J];if(C(Q,g)){const de=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ie=i.get(Q).__webglTexture;t.bindTexture(de,ie),R(de),t.unbindTexture()}}}function Ie(S){if(o&&S.samples>0&&Ke(S)===!1){const g=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],N=S.width,J=S.height;let j=n.COLOR_BUFFER_BIT;const Q=[],de=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(S),ae=S.isWebGLMultipleRenderTargets===!0;if(ae)for(let Me=0;Me<g.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let Me=0;Me<g.length;Me++){Q.push(n.COLOR_ATTACHMENT0+Me),S.depthBuffer&&Q.push(de);const Ve=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(Ve===!1&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[de]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[de])),ae){const Z=i.get(g[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,N,J,0,0,N,J,j,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Me=0;Me<g.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,ie.__webglColorRenderbuffer[Me]);const Ve=i.get(g[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Ne(S){return Math.min(d,S.samples)}function Ke(S){const g=i.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function dt(S){const g=a.render.frame;_.get(S)!==g&&(_.set(S,g),S.update())}function xt(S,g){const N=S.colorSpace,J=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ys||N!==gn&&N!==Gt&&(qe.getTransfer(N)===$e?o===!1?e.has("EXT_sRGB")===!0&&J===Zt?(S.format=Ys,S.minFilter=Bt,S.generateMipmaps=!1):g=Dc.sRGBToLinear(g):(J!==Zt||j!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}this.allocateTextureUnit=te,this.resetTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=oe,this.rebindTextures=Ae,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ke}function gm(n,e,t){const i=t.isWebGL2;function r(s,a=Gt){let o;const c=qe.getTransfer(a);if(s===Nn)return n.UNSIGNED_BYTE;if(s===bc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Jl)return n.BYTE;if(s===Ql)return n.SHORT;if(s===ho)return n.UNSIGNED_SHORT;if(s===Ec)return n.INT;if(s===wn)return n.UNSIGNED_INT;if(s===Rn)return n.FLOAT;if(s===Vi)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===eh)return n.ALPHA;if(s===Zt)return n.RGBA;if(s===th)return n.LUMINANCE;if(s===nh)return n.LUMINANCE_ALPHA;if(s===$n)return n.DEPTH_COMPONENT;if(s===Ei)return n.DEPTH_STENCIL;if(s===Ys)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ih)return n.RED;if(s===Ac)return n.RED_INTEGER;if(s===rh)return n.RG;if(s===wc)return n.RG_INTEGER;if(s===Rc)return n.RGBA_INTEGER;if(s===os||s===as||s===cs||s===ls)if(c===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===os)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===as)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===os)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===as)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ls)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ho||s===Go||s===Vo||s===Wo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ho)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Go)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xo||s===qo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xo)return c===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===qo)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yo||s===Ko||s===jo||s===$o||s===Zo||s===Jo||s===Qo||s===ea||s===ta||s===na||s===ia||s===ra||s===sa||s===oa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Yo)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ko)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jo)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$o)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zo)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jo)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qo)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ea)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ta)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===na)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ia)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ra)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sa)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oa)return c===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hs||s===aa||s===ca)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===hs)return c===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===aa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ca)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oh||s===la||s===ha||s===ua)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===hs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===la)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ha)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ua)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jn?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class _m extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ln extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vm={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),u=this._getHandJoint(l,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class xm extends It{constructor(e,t,i,r,s,a,o,c,l,h){if(h=h!==void 0?h:$n,h!==$n&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$n&&(i=wn),i===void 0&&h===Ei&&(i=jn),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=c!==void 0?c:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mm extends Ai{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,_=null;const v=t.getContextAttributes();let p=null,u=null;const T=[],y=[],E=new kt;E.layers.enable(1),E.viewport=new gt;const A=new kt;A.layers.enable(2),A.viewport=new gt;const C=[E,A],R=new _m;R.layers.enable(1),R.layers.enable(2);let V=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let k=T[P];return k===void 0&&(k=new Ns,T[P]=k),k.getTargetRaySpace()},this.getControllerGrip=function(P){let k=T[P];return k===void 0&&(k=new Ns,T[P]=k),k.getGripSpace()},this.getHand=function(P){let k=T[P];return k===void 0&&(k=new Ns,T[P]=k),k.getHandSpace()};function b(P){const k=y.indexOf(P.inputSource);if(k===-1)return;const oe=T[k];oe!==void 0&&(oe.update(P.inputSource,P.frame,l||a),oe.dispatchEvent({type:P.type,data:P.inputSource}))}function W(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Y);for(let P=0;P<T.length;P++){const k=y[P];k!==null&&(y[P]=null,T[P].disconnect(k))}V=null,M=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,u=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:m}),u=new Jn(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,oe=null,le=null;v.depth&&(le=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?Ei:$n,oe=v.stencil?jn:wn);const ue={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),u=new Jn(f.textureWidth,f.textureHeight,{format:Zt,type:Nn,depthTexture:new xm(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const xe=e.properties.get(u);xe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(P){for(let k=0;k<P.removed.length;k++){const oe=P.removed[k],le=y.indexOf(oe);le>=0&&(y[le]=null,T[le].disconnect(oe))}for(let k=0;k<P.added.length;k++){const oe=P.added[k];let le=y.indexOf(oe);if(le===-1){for(let xe=0;xe<T.length;xe++)if(xe>=y.length){y.push(oe),le=xe;break}else if(y[xe]===null){y[xe]=oe,le=xe;break}if(le===-1)break}const ue=T[le];ue&&ue.connect(oe)}}const $=new U,L=new U;function z(P,k,oe){$.setFromMatrixPosition(k.matrixWorld),L.setFromMatrixPosition(oe.matrixWorld);const le=$.distanceTo(L),ue=k.projectionMatrix.elements,xe=oe.projectionMatrix.elements,ke=ue[14]/(ue[10]-1),Te=ue[14]/(ue[10]+1),Le=(ue[9]+1)/ue[5],Je=(ue[9]-1)/ue[5],Ue=(ue[8]-1)/ue[0],I=(xe[8]+1)/xe[0],Ct=ke*Ue,pe=ke*I,Ae=le/(-Ue+I),Ee=Ae*-Ue;k.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Ee),P.translateZ(Ae),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const Qe=ke+Ae,Ie=Te+Ae,Ne=Ct-Ee,Ke=pe+(le-Ee),dt=Le*Te/Ie*Qe,xt=Je*Te/Ie*Qe;P.projectionMatrix.makePerspective(Ne,Ke,dt,xt,Qe,Ie),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}function X(P,k){k===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(k.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;R.near=A.near=E.near=P.near,R.far=A.far=E.far=P.far,(V!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,M=R.far);const k=P.parent,oe=R.cameras;X(R,k);for(let le=0;le<oe.length;le++)X(oe[le],k);oe.length===2?z(R,E,A):R.projectionMatrix.copy(E.projectionMatrix),G(P,R,k)};function G(P,k,oe){oe===null?P.matrix.copy(k.matrixWorld):(P.matrix.copy(oe.matrixWorld),P.matrix.invert(),P.matrix.multiply(k.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(k.projectionMatrix),P.projectionMatrixInverse.copy(k.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Ks*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(P){c=P,f!==null&&(f.fixedFoveation=P),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=P)};let te=null;function K(P,k){if(h=k.getViewerPose(l||a),_=k,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let le=!1;oe.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let ue=0;ue<oe.length;ue++){const xe=oe[ue];let ke=null;if(m!==null)ke=m.getViewport(xe);else{const Le=d.getViewSubImage(f,xe);ke=Le.viewport,ue===0&&(e.setRenderTargetTextures(u,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(u))}let Te=C[ue];Te===void 0&&(Te=new kt,Te.layers.enable(ue),Te.viewport=new gt,C[ue]=Te),Te.matrix.fromArray(xe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(xe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(ke.x,ke.y,ke.width,ke.height),ue===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),le===!0&&R.cameras.push(Te)}}for(let oe=0;oe<T.length;oe++){const le=y[oe],ue=T[oe];le!==null&&ue!==void 0&&ue.update(le,k,l||a)}te&&te(P,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const q=new Hc;q.setAnimationLoop(K),this.setAnimationLoop=function(P){te=P},this.dispose=function(){}}}function ym(n,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Bc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,T,y,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,T,y):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===At&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===At&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*y,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,T,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=y*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===At&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sm(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,y){const E=y.program;i.uniformBlockBinding(T,E)}function l(T,y){let E=r[T.id];E===void 0&&(_(T),E=h(T),r[T.id]=E,T.addEventListener("dispose",p));const A=y.program;i.updateUBOMapping(T,A);const C=e.render.frame;s[T.id]!==C&&(f(T),s[T.id]=C)}function h(T){const y=d();T.__bindingPointIndex=y;const E=n.createBuffer(),A=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=r[T.id],E=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,R=E.length;C<R;C++){const V=E[C];if(m(V,C,A)===!0){const M=V.__offset,b=Array.isArray(V.value)?V.value:[V.value];let W=0;for(let Y=0;Y<b.length;Y++){const $=b[Y],L=v($);typeof $=="number"?(V.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,M+W,V.__data)):$.isMatrix3?(V.__data[0]=$.elements[0],V.__data[1]=$.elements[1],V.__data[2]=$.elements[2],V.__data[3]=$.elements[0],V.__data[4]=$.elements[3],V.__data[5]=$.elements[4],V.__data[6]=$.elements[5],V.__data[7]=$.elements[0],V.__data[8]=$.elements[6],V.__data[9]=$.elements[7],V.__data[10]=$.elements[8],V.__data[11]=$.elements[0]):($.toArray(V.__data,W),W+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,V.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,y,E){const A=T.value;if(E[y]===void 0){if(typeof A=="number")E[y]=A;else{const C=Array.isArray(A)?A:[A],R=[];for(let V=0;V<C.length;V++)R.push(C[V].clone());E[y]=R}return!0}else if(typeof A=="number"){if(E[y]!==A)return E[y]=A,!0}else{const C=Array.isArray(E[y])?E[y]:[E[y]],R=Array.isArray(A)?A:[A];for(let V=0;V<C.length;V++){const M=C[V];if(M.equals(R[V])===!1)return M.copy(R[V]),!0}}return!1}function _(T){const y=T.uniforms;let E=0;const A=16;let C=0;for(let R=0,V=y.length;R<V;R++){const M=y[R],b={boundary:0,storage:0},W=Array.isArray(M.value)?M.value:[M.value];for(let Y=0,$=W.length;Y<$;Y++){const L=W[Y],z=v(L);b.boundary+=z.boundary,b.storage+=z.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=E,R>0){C=E%A;const Y=A-C;C!==0&&Y-b.boundary<0&&(E+=A-C,M.__offset=E)}E+=b.storage}return C=E%A,C>0&&(E+=A-C),T.__size=E,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Yc{constructor(e={}){const{canvas:t=xh(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const y=this;let E=!1,A=0,C=0,R=null,V=-1,M=null;const b=new gt,W=new gt;let Y=null;const $=new Fe(0);let L=0,z=t.width,X=t.height,G=1,te=null,K=null;const q=new gt(0,0,z,X),P=new gt(0,0,z,X);let k=!1;const oe=new mo;let le=!1,ue=!1,xe=null;const ke=new at,Te=new Ge,Le=new U,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return R===null?G:1}let I=i;function Ct(x,D){for(let O=0;O<x.length;O++){const F=x[O],B=t.getContext(F,D);if(B!==null)return B}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${co}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",w,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),I=Ct(D,x),I===null)throw Ct(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let pe,Ae,Ee,Qe,Ie,Ne,Ke,dt,xt,S,g,N,J,j,Q,de,ie,ae,Me,Ve,Z,Xe,we,ye;function me(){pe=new Df(I),Ae=new Af(I,pe,e),pe.init(Ae),Xe=new gm(I,pe,Ae),Ee=new pm(I,pe,Ae),Qe=new Nf(I),Ie=new em,Ne=new mm(I,pe,Ee,Ie,Ae,Xe,Qe),Ke=new Rf(y),dt=new Pf(y),xt=new Wh(I,Ae),we=new bf(I,pe,xt,Ae),S=new Uf(I,xt,Qe,we),g=new kf(I,S,xt,Qe),Me=new Bf(I,Ae,Ne),de=new wf(Ie),N=new Qp(y,Ke,dt,pe,Ae,we,de),J=new ym(y,Ie),j=new nm,Q=new cm(pe,Ae),ae=new Ef(y,Ke,dt,Ee,g,f,c),ie=new fm(y,g,Ae),ye=new Sm(I,Qe,Ae,Ee),Ve=new Tf(I,pe,Qe,Ae),Z=new If(I,pe,Qe,Ae),Qe.programs=N.programs,y.capabilities=Ae,y.extensions=pe,y.properties=Ie,y.renderLists=j,y.shadowMap=ie,y.state=Ee,y.info=Qe}me();const he=new Mm(y,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=pe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=pe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(z,X,!1))},this.getSize=function(x){return x.set(z,X)},this.setSize=function(x,D,O=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=x,X=D,t.width=Math.floor(x*G),t.height=Math.floor(D*G),O===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(z*G,X*G).floor()},this.setDrawingBufferSize=function(x,D,O){z=x,X=D,G=O,t.width=Math.floor(x*O),t.height=Math.floor(D*O),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,D,O,F){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,D,O,F),Ee.viewport(b.copy(q).multiplyScalar(G).floor())},this.getScissor=function(x){return x.copy(P)},this.setScissor=function(x,D,O,F){x.isVector4?P.set(x.x,x.y,x.z,x.w):P.set(x,D,O,F),Ee.scissor(W.copy(P).multiplyScalar(G).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(x){Ee.setScissorTest(k=x)},this.setOpaqueSort=function(x){te=x},this.setTransparentSort=function(x){K=x},this.getClearColor=function(x){return x.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(x=!0,D=!0,O=!0){let F=0;if(x){let B=!1;if(R!==null){const ce=R.texture.format;B=ce===Rc||ce===wc||ce===Ac}if(B){const ce=R.texture.type,fe=ce===Nn||ce===wn||ce===ho||ce===jn||ce===bc||ce===Tc,_e=ae.getClearColor(),Se=ae.getClearAlpha(),De=_e.r,Re=_e.g,Ce=_e.b;fe?(m[0]=De,m[1]=Re,m[2]=Ce,m[3]=Se,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=De,_[1]=Re,_[2]=Ce,_[3]=Se,I.clearBufferiv(I.COLOR,0,_))}else F|=I.COLOR_BUFFER_BIT}D&&(F|=I.DEPTH_BUFFER_BIT),O&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",w,!1),t.removeEventListener("webglcontextcreationerror",se,!1),j.dispose(),Q.dispose(),Ie.dispose(),Ke.dispose(),dt.dispose(),g.dispose(),we.dispose(),ye.dispose(),N.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ot),he.removeEventListener("sessionend",je),xe&&(xe.dispose(),xe=null),St.stop()};function He(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const x=Qe.autoReset,D=ie.enabled,O=ie.autoUpdate,F=ie.needsUpdate,B=ie.type;me(),Qe.autoReset=x,ie.enabled=D,ie.autoUpdate=O,ie.needsUpdate=F,ie.type=B}function se(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ee(x){const D=x.target;D.removeEventListener("dispose",ee),H(D)}function H(x){ne(x),Ie.remove(x)}function ne(x){const D=Ie.get(x).programs;D!==void 0&&(D.forEach(function(O){N.releaseProgram(O)}),x.isShaderMaterial&&N.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,O,F,B,ce){D===null&&(D=Je);const fe=B.isMesh&&B.matrixWorld.determinant()<0,_e=ml(x,D,O,F,B);Ee.setMaterial(F,fe);let Se=O.index,De=1;if(F.wireframe===!0){if(Se=S.getWireframeAttribute(O),Se===void 0)return;De=2}const Re=O.drawRange,Ce=O.attributes.position;let nt=Re.start*De,Lt=(Re.start+Re.count)*De;ce!==null&&(nt=Math.max(nt,ce.start*De),Lt=Math.min(Lt,(ce.start+ce.count)*De)),Se!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,Se.count)):Ce!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,Ce.count));const ft=Lt-nt;if(ft<0||ft===1/0)return;we.setup(B,F,_e,O,Se);let on,et=Ve;if(Se!==null&&(on=xt.get(Se),et=Z,et.setIndex(on)),B.isMesh)F.wireframe===!0?(Ee.setLineWidth(F.wireframeLinewidth*Ue()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(B.isLine){let Be=F.linewidth;Be===void 0&&(Be=1),Ee.setLineWidth(Be*Ue()),B.isLineSegments?et.setMode(I.LINES):B.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else B.isPoints?et.setMode(I.POINTS):B.isSprite&&et.setMode(I.TRIANGLES);if(B.isInstancedMesh)et.renderInstances(nt,ft,B.count);else if(O.isInstancedBufferGeometry){const Be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ts=Math.min(O.instanceCount,Be);et.renderInstances(nt,ft,ts)}else et.render(nt,ft)};function ge(x,D,O){x.transparent===!0&&x.side===fn&&x.forceSinglePass===!1?(x.side=At,x.needsUpdate=!0,ji(x,D,O),x.side=Fn,x.needsUpdate=!0,ji(x,D,O),x.side=fn):ji(x,D,O)}this.compile=function(x,D,O=null){O===null&&(O=x),p=Q.get(O),p.init(),T.push(p),O.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),x!==O&&x.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(y._useLegacyLights);const F=new Set;return x.traverse(function(B){const ce=B.material;if(ce)if(Array.isArray(ce))for(let fe=0;fe<ce.length;fe++){const _e=ce[fe];ge(_e,O,B),F.add(_e)}else ge(ce,O,B),F.add(ce)}),T.pop(),p=null,F},this.compileAsync=function(x,D,O=null){const F=this.compile(x,D,O);return new Promise(B=>{function ce(){if(F.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&F.delete(fe)}),F.size===0){B(x);return}setTimeout(ce,10)}pe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let We=null;function it(x){We&&We(x)}function Ot(){St.stop()}function je(){St.start()}const St=new Hc;St.setAnimationLoop(it),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(x){We=x,he.setAnimationLoop(x),x===null?St.stop():St.start()},he.addEventListener("sessionstart",Ot),he.addEventListener("sessionend",je),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(D),D=he.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,D,R),p=Q.get(x,T.length),p.init(),T.push(p),ke.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),oe.setFromProjectionMatrix(ke),ue=this.localClippingEnabled,le=de.init(this.clippingPlanes,ue),v=j.get(x,u.length),v.init(),u.push(v),Jt(x,D,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(te,K),this.info.render.frame++,le===!0&&de.beginShadows();const O=p.state.shadowsArray;if(ie.render(O,x,D),le===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(v,x),p.setupLights(y._useLegacyLights),D.isArrayCamera){const F=D.cameras;for(let B=0,ce=F.length;B<ce;B++){const fe=F[B];Ro(v,x,fe,fe.viewport)}}else Ro(v,x,D);R!==null&&(Ne.updateMultisampleRenderTarget(R),Ne.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(y,x,D),we.resetDefaultState(),V=-1,M=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function Jt(x,D,O,F){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||oe.intersectsSprite(x)){F&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ke);const fe=g.update(x),_e=x.material;_e.visible&&v.push(x,fe,_e,O,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||oe.intersectsObject(x))){const fe=g.update(x),_e=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(ke)),Array.isArray(_e)){const Se=fe.groups;for(let De=0,Re=Se.length;De<Re;De++){const Ce=Se[De],nt=_e[Ce.materialIndex];nt&&nt.visible&&v.push(x,fe,nt,O,Le.z,Ce)}}else _e.visible&&v.push(x,fe,_e,O,Le.z,null)}}const ce=x.children;for(let fe=0,_e=ce.length;fe<_e;fe++)Jt(ce[fe],D,O,F)}function Ro(x,D,O,F){const B=x.opaque,ce=x.transmissive,fe=x.transparent;p.setupLightsView(O),le===!0&&de.setGlobalState(y.clippingPlanes,O),ce.length>0&&pl(B,ce,D,O),F&&Ee.viewport(b.copy(F)),B.length>0&&Ki(B,D,O),ce.length>0&&Ki(ce,D,O),fe.length>0&&Ki(fe,D,O),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function pl(x,D,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ce=Ae.isWebGL2;xe===null&&(xe=new Jn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Vi:Nn,minFilter:Gi,samples:ce?4:0})),y.getDrawingBufferSize(Te),ce?xe.setSize(Te.x,Te.y):xe.setSize(js(Te.x),js(Te.y));const fe=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor($),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();const _e=y.toneMapping;y.toneMapping=In,Ki(x,O,F),Ne.updateMultisampleRenderTarget(xe),Ne.updateRenderTargetMipmap(xe);let Se=!1;for(let De=0,Re=D.length;De<Re;De++){const Ce=D[De],nt=Ce.object,Lt=Ce.geometry,ft=Ce.material,on=Ce.group;if(ft.side===fn&&nt.layers.test(F.layers)){const et=ft.side;ft.side=At,ft.needsUpdate=!0,Co(nt,O,F,Lt,ft,on),ft.side=et,ft.needsUpdate=!0,Se=!0}}Se===!0&&(Ne.updateMultisampleRenderTarget(xe),Ne.updateRenderTargetMipmap(xe)),y.setRenderTarget(fe),y.setClearColor($,L),y.toneMapping=_e}function Ki(x,D,O){const F=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ce=x.length;B<ce;B++){const fe=x[B],_e=fe.object,Se=fe.geometry,De=F===null?fe.material:F,Re=fe.group;_e.layers.test(O.layers)&&Co(_e,D,O,Se,De,Re)}}function Co(x,D,O,F,B,ce){x.onBeforeRender(y,D,O,F,B,ce),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(y,D,O,F,x,ce),B.transparent===!0&&B.side===fn&&B.forceSinglePass===!1?(B.side=At,B.needsUpdate=!0,y.renderBufferDirect(O,D,F,B,x,ce),B.side=Fn,B.needsUpdate=!0,y.renderBufferDirect(O,D,F,B,x,ce),B.side=fn):y.renderBufferDirect(O,D,F,B,x,ce),x.onAfterRender(y,D,O,F,B,ce)}function ji(x,D,O){D.isScene!==!0&&(D=Je);const F=Ie.get(x),B=p.state.lights,ce=p.state.shadowsArray,fe=B.state.version,_e=N.getParameters(x,B.state,ce,D,O),Se=N.getProgramCacheKey(_e);let De=F.programs;F.environment=x.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(x.isMeshStandardMaterial?dt:Ke).get(x.envMap||F.environment),De===void 0&&(x.addEventListener("dispose",ee),De=new Map,F.programs=De);let Re=De.get(Se);if(Re!==void 0){if(F.currentProgram===Re&&F.lightsStateVersion===fe)return Po(x,_e),Re}else _e.uniforms=N.getUniforms(x),x.onBuild(O,_e,y),x.onBeforeCompile(_e,y),Re=N.acquireProgram(_e,Se),De.set(Se,Re),F.uniforms=_e.uniforms;const Ce=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=de.uniform),Po(x,_e),F.needsLights=_l(x),F.lightsStateVersion=fe,F.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),F.currentProgram=Re,F.uniformsList=null,Re}function Lo(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Tr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Po(x,D){const O=Ie.get(x);O.outputColorSpace=D.outputColorSpace,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ml(x,D,O,F,B){D.isScene!==!0&&(D=Je),Ne.resetTextureUnits();const ce=D.fog,fe=F.isMeshStandardMaterial?D.environment:null,_e=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:gn,Se=(F.isMeshStandardMaterial?dt:Ke).get(F.envMap||fe),De=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ce=!!O.morphAttributes.position,nt=!!O.morphAttributes.normal,Lt=!!O.morphAttributes.color;let ft=In;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ft=y.toneMapping);const on=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=on!==void 0?on.length:0,Be=Ie.get(F),ts=p.state.lights;if(le===!0&&(ue===!0||x!==M)){const Pt=x===M&&F.id===V;de.setState(F,x,Pt)}let rt=!1;F.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ts.state.version||Be.outputColorSpace!==_e||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||Be.envMap!==Se||F.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==De||Be.vertexTangents!==Re||Be.morphTargets!==Ce||Be.morphNormals!==nt||Be.morphColors!==Lt||Be.toneMapping!==ft||Ae.isWebGL2===!0&&Be.morphTargetsCount!==et)&&(rt=!0):(rt=!0,Be.__version=F.version);let kn=Be.currentProgram;rt===!0&&(kn=ji(F,D,B));let Do=!1,Li=!1,ns=!1;const Et=kn.getUniforms(),zn=Be.uniforms;if(Ee.useProgram(kn.program)&&(Do=!0,Li=!0,ns=!0),F.id!==V&&(V=F.id,Li=!0),Do||M!==x){Et.setValue(I,"projectionMatrix",x.projectionMatrix),Et.setValue(I,"viewMatrix",x.matrixWorldInverse);const Pt=Et.map.cameraPosition;Pt!==void 0&&Pt.setValue(I,Le.setFromMatrixPosition(x.matrixWorld)),Ae.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Et.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Li=!0,ns=!0)}if(B.isSkinnedMesh){Et.setOptional(I,B,"bindMatrix"),Et.setOptional(I,B,"bindMatrixInverse");const Pt=B.skeleton;Pt&&(Ae.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),Et.setValue(I,"boneTexture",Pt.boneTexture,Ne),Et.setValue(I,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const is=O.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0&&Ae.isWebGL2===!0)&&Me.update(B,O,kn),(Li||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,Et.setValue(I,"receiveShadow",B.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(zn.envMap.value=Se,zn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Li&&(Et.setValue(I,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&gl(zn,ns),ce&&F.fog===!0&&J.refreshFogUniforms(zn,ce),J.refreshMaterialUniforms(zn,F,G,X,xe),Tr.upload(I,Lo(Be),zn,Ne)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Tr.upload(I,Lo(Be),zn,Ne),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Et.setValue(I,"center",B.center),Et.setValue(I,"modelViewMatrix",B.modelViewMatrix),Et.setValue(I,"normalMatrix",B.normalMatrix),Et.setValue(I,"modelMatrix",B.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Pt=F.uniformsGroups;for(let rs=0,vl=Pt.length;rs<vl;rs++)if(Ae.isWebGL2){const Uo=Pt[rs];ye.update(Uo,kn),ye.bind(Uo,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function gl(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function _l(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,D,O){Ie.get(x.texture).__webglTexture=D,Ie.get(x.depthTexture).__webglTexture=O;const F=Ie.get(x);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,D){const O=Ie.get(x);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,O=0){R=x,A=D,C=O;let F=!0,B=null,ce=!1,fe=!1;if(x){const Se=Ie.get(x);Se.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):Se.__webglFramebuffer===void 0?Ne.setupRenderTarget(x):Se.__hasExternalTextures&&Ne.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);const De=x.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);const Re=Ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?B=Re[D][O]:B=Re[D],ce=!0):Ae.isWebGL2&&x.samples>0&&Ne.useMultisampledRTT(x)===!1?B=Ie.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[O]:B=Re,b.copy(x.viewport),W.copy(x.scissor),Y=x.scissorTest}else b.copy(q).multiplyScalar(G).floor(),W.copy(P).multiplyScalar(G).floor(),Y=k;if(Ee.bindFramebuffer(I.FRAMEBUFFER,B)&&Ae.drawBuffers&&F&&Ee.drawBuffers(x,B),Ee.viewport(b),Ee.scissor(W),Ee.setScissorTest(Y),ce){const Se=Ie.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Se.__webglTexture,O)}else if(fe){const Se=Ie.get(x.texture),De=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.__webglTexture,O||0,De)}V=-1},this.readRenderTargetPixels=function(x,D,O,F,B,ce,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Ee.bindFramebuffer(I.FRAMEBUFFER,_e);try{const Se=x.texture,De=Se.format,Re=Se.type;if(De!==Zt&&Xe.convert(De)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Re===Vi&&(pe.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Re!==Nn&&Xe.convert(Re)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===Rn&&(Ae.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-F&&O>=0&&O<=x.height-B&&I.readPixels(D,O,F,B,Xe.convert(De),Xe.convert(Re),ce)}finally{const Se=R!==null?Ie.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(x,D,O=0){const F=Math.pow(2,-O),B=Math.floor(D.image.width*F),ce=Math.floor(D.image.height*F);Ne.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,x.x,x.y,B,ce),Ee.unbindTexture()},this.copyTextureToTexture=function(x,D,O,F=0){const B=D.image.width,ce=D.image.height,fe=Xe.convert(O.format),_e=Xe.convert(O.type);Ne.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,x.x,x.y,B,ce,fe,_e,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,x.x,x.y,D.mipmaps[0].width,D.mipmaps[0].height,fe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,x.x,x.y,fe,_e,D.image),F===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(x,D,O,F,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=x.max.x-x.min.x+1,fe=x.max.y-x.min.y+1,_e=x.max.z-x.min.z+1,Se=Xe.convert(F.format),De=Xe.convert(F.type);let Re;if(F.isData3DTexture)Ne.setTexture3D(F,0),Re=I.TEXTURE_3D;else if(F.isDataArrayTexture)Ne.setTexture2DArray(F,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Lt=I.getParameter(I.UNPACK_SKIP_PIXELS),ft=I.getParameter(I.UNPACK_SKIP_ROWS),on=I.getParameter(I.UNPACK_SKIP_IMAGES),et=O.isCompressedTexture?O.mipmaps[0]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(Re,B,D.x,D.y,D.z,ce,fe,_e,Se,De,et.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Re,B,D.x,D.y,D.z,ce,fe,_e,Se,et.data)):I.texSubImage3D(Re,B,D.x,D.y,D.z,ce,fe,_e,Se,De,et),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,on),B===0&&F.generateMipmaps&&I.generateMipmap(Re),Ee.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Ne.setTextureCube(x,0):x.isData3DTexture?Ne.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ne.setTexture2DArray(x,0):Ne.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,Ee.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uo?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===Gr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Zn:Cc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?_t:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Em extends Yc{}Em.prototype.isWebGL1Renderer=!0;class _o{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new _o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bm extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Yr extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ec=new at,Zs=new fo,vr=new Vr,xr=new U;class vo extends vt{constructor(e=new Vt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(r),vr.radius+=s,e.ray.intersectsSphere(vr)===!1)return;ec.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(ec);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=f,v=m;_<v;_++){const p=l.getX(_);xr.fromBufferAttribute(d,p),tc(xr,p,c,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,v=m;_<v;_++)xr.fromBufferAttribute(d,_),tc(xr,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function tc(n,e,t,i,r,s,a){const o=Zs.distanceSqToPoint(n);if(o<t){const c=new U;Zs.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Pn extends Vt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new U,f=new U,m=[],_=[],v=[],p=[];for(let u=0;u<=i;u++){const T=[],y=u/i;let E=0;u===0&&a===0?E=.5/t:u===i&&c===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){const C=A/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+y*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(C+E,1-y),T.push(l++)}h.push(T)}for(let u=0;u<i;u++)for(let T=0;T<t;T++){const y=h[u][T+1],E=h[u][T],A=h[u+1][T],C=h[u+1][T+1];(u!==0||a>0)&&m.push(y,E,C),(u!==i-1||c<Math.PI)&&m.push(E,A,C)}this.setIndex(m),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kr extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kc extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Os=new at,nc=new U,ic=new U;class Tm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(nc),ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ic),t.updateMatrixWorld(),Os.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Os),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Am extends Tm{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wm extends Kc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Am}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rm extends Kc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rc(){return(typeof performance>"u"?Date:performance).now()}class jr{constructor(e,t,i=0,r=1/0){this.ray=new fo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Js(e,this,i,t),i.sort(sc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Js(e[r],this,i,t);return i.sort(sc),i}}function sc(n,e){return n.distance-e.distance}function Js(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Js(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const rn=Object.create(null);rn.open="0";rn.close="1";rn.ping="2";rn.pong="3";rn.message="4";rn.upgrade="5";rn.noop="6";const Ar=Object.create(null);Object.keys(rn).forEach(n=>{Ar[rn[n]]=n});const Qs={type:"error",data:"parser error"},jc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",$c=typeof ArrayBuffer=="function",Zc=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,xo=({type:n,data:e},t,i)=>jc&&e instanceof Blob?t?i(e):oc(e,i):$c&&(e instanceof ArrayBuffer||Zc(e))?t?i(e):oc(new Blob([e]),i):i(rn[n]+(e||"")),oc=(n,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(n)};function ac(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let Fs;function Lm(n,e){if(jc&&n.data instanceof Blob)return n.data.arrayBuffer().then(ac).then(e);if($c&&(n.data instanceof ArrayBuffer||Zc(n.data)))return e(ac(n.data));xo(n,!1,t=>{Fs||(Fs=new TextEncoder),e(Fs.encode(t))})}const cc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ki=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<cc.length;n++)ki[cc.charCodeAt(n)]=n;const Pm=n=>{let e=n.length*.75,t=n.length,i,r=0,s,a,o,c;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const l=new ArrayBuffer(e),h=new Uint8Array(l);for(i=0;i<t;i+=4)s=ki[n.charCodeAt(i)],a=ki[n.charCodeAt(i+1)],o=ki[n.charCodeAt(i+2)],c=ki[n.charCodeAt(i+3)],h[r++]=s<<2|a>>4,h[r++]=(a&15)<<4|o>>2,h[r++]=(o&3)<<6|c&63;return l},Dm=typeof ArrayBuffer=="function",Mo=(n,e)=>{if(typeof n!="string")return{type:"message",data:Jc(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:Um(n.substring(1),e)}:Ar[t]?n.length>1?{type:Ar[t],data:n.substring(1)}:{type:Ar[t]}:Qs},Um=(n,e)=>{if(Dm){const t=Pm(n);return Jc(t,e)}else return{base64:!0,data:n}},Jc=(n,e)=>{switch(e){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},Qc="",Im=(n,e)=>{const t=n.length,i=new Array(t);let r=0;n.forEach((s,a)=>{xo(s,!1,o=>{i[a]=o,++r===t&&e(i.join(Qc))})})},Nm=(n,e)=>{const t=n.split(Qc),i=[];for(let r=0;r<t.length;r++){const s=Mo(t[r],e);if(i.push(s),s.type==="error")break}return i};function Om(){return new TransformStream({transform(n,e){Lm(n,t=>{const i=t.length;let r;if(i<126)r=new Uint8Array(1),new DataView(r.buffer).setUint8(0,i);else if(i<65536){r=new Uint8Array(3);const s=new DataView(r.buffer);s.setUint8(0,126),s.setUint16(1,i)}else{r=new Uint8Array(9);const s=new DataView(r.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(i))}n.data&&typeof n.data!="string"&&(r[0]|=128),e.enqueue(r),e.enqueue(t)})}})}let Bs;function Mr(n){return n.reduce((e,t)=>e+t.length,0)}function yr(n,e){if(n[0].length===e)return n.shift();const t=new Uint8Array(e);let i=0;for(let r=0;r<e;r++)t[r]=n[0][i++],i===n[0].length&&(n.shift(),i=0);return n.length&&i<n[0].length&&(n[0]=n[0].slice(i)),t}function Fm(n,e){Bs||(Bs=new TextDecoder);const t=[];let i=0,r=-1,s=!1;return new TransformStream({transform(a,o){for(t.push(a);;){if(i===0){if(Mr(t)<1)break;const c=yr(t,1);s=(c[0]&128)===128,r=c[0]&127,r<126?i=3:r===126?i=1:i=2}else if(i===1){if(Mr(t)<2)break;const c=yr(t,2);r=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),i=3}else if(i===2){if(Mr(t)<8)break;const c=yr(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){o.enqueue(Qs);break}r=h*Math.pow(2,32)+l.getUint32(4),i=3}else{if(Mr(t)<r)break;const c=yr(t,r);o.enqueue(Mo(s?c:Bs.decode(c),e)),i=0}if(r===0||r>n){o.enqueue(Qs);break}}}})}const el=4;function ot(n){if(n)return Bm(n)}function Bm(n){for(var e in ot.prototype)n[e]=ot.prototype[e];return n}ot.prototype.on=ot.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};ot.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};ot.prototype.off=ot.prototype.removeListener=ot.prototype.removeAllListeners=ot.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,r=0;r<t.length;r++)if(i=t[r],i===e||i.fn===e){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+n],this};ot.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,r=t.length;i<r;++i)t[i].apply(this,e)}return this};ot.prototype.emitReserved=ot.prototype.emit;ot.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};ot.prototype.hasListeners=function(n){return!!this.listeners(n).length};const $r=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),zt=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),km="arraybuffer";function tl(n,...e){return e.reduce((t,i)=>(n.hasOwnProperty(i)&&(t[i]=n[i]),t),{})}const zm=zt.setTimeout,Hm=zt.clearTimeout;function Zr(n,e){e.useNativeTimers?(n.setTimeoutFn=zm.bind(zt),n.clearTimeoutFn=Hm.bind(zt)):(n.setTimeoutFn=zt.setTimeout.bind(zt),n.clearTimeoutFn=zt.clearTimeout.bind(zt))}const Gm=1.33;function Vm(n){return typeof n=="string"?Wm(n):Math.ceil((n.byteLength||n.size)*Gm)}function Wm(n){let e=0,t=0;for(let i=0,r=n.length;i<r;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function nl(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Xm(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function qm(n){let e={},t=n.split("&");for(let i=0,r=t.length;i<r;i++){let s=t[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Ym extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class yo extends ot{constructor(e){super(),this.writable=!1,Zr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,i){return super.emitReserved("error",new Ym(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Mo(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Xm(e);return t.length?"?"+t:""}}class Km extends yo{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};Nm(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Im(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=nl()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let il=!1;try{il=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const jm=il;function $m(){}class Zm extends Km{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let i=location.port;i||(i=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class nn extends ot{constructor(e,t,i){super(),this.createRequest=e,Zr(this,i),this._opts=i,this._method=i.method||"GET",this._uri=t,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var e;const t=tl(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(t);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let r in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(r)&&i.setRequestHeader(r,this._opts.extraHeaders[r])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var r;i.readyState===3&&((r=this._opts.cookieJar)===null||r===void 0||r.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(r){this.setTimeoutFn(()=>{this._onError(r)},0);return}typeof document<"u"&&(this._index=nn.requestsCount++,nn.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=$m,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete nn.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}nn.requestsCount=0;nn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",lc);else if(typeof addEventListener=="function"){const n="onpagehide"in zt?"pagehide":"unload";addEventListener(n,lc,!1)}}function lc(){for(let n in nn.requests)nn.requests.hasOwnProperty(n)&&nn.requests[n].abort()}const Jm=function(){const n=rl({xdomain:!1});return n&&n.responseType!==null}();class Qm extends Zm{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=Jm&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new nn(rl,this.uri(),e)}}function rl(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||jm))return new XMLHttpRequest}catch{}if(!e)try{return new zt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const sl=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class eg extends yo{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,i=sl?{}:tl(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],r=t===e.length-1;xo(i,this.supportsBinary,s=>{try{this.doWrite(i,s)}catch{}r&&$r(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=nl()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const ks=zt.WebSocket||zt.MozWebSocket;class tg extends eg{createSocket(e,t,i){return sl?new ks(e,t,i):t?new ks(e,t):new ks(e)}doWrite(e,t){this.ws.send(t)}}class ng extends yo{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=Fm(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(t).getReader(),r=Om();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();const s=()=>{i.read().then(({done:o,value:c})=>{o||(this.onPacket(c),s())}).catch(o=>{})};s();const a={type:"open"};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],r=t===e.length-1;this._writer.write(i).then(()=>{r&&$r(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const ig={websocket:tg,webtransport:ng,polling:Qm},rg=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,sg=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function eo(n){if(n.length>8e3)throw"URI too long";const e=n,t=n.indexOf("["),i=n.indexOf("]");t!=-1&&i!=-1&&(n=n.substring(0,t)+n.substring(t,i).replace(/:/g,";")+n.substring(i,n.length));let r=rg.exec(n||""),s={},a=14;for(;a--;)s[sg[a]]=r[a]||"";return t!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=og(s,s.path),s.queryKey=ag(s,s.query),s}function og(n,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function ag(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(t[r]=s)}),t}const to=typeof addEventListener=="function"&&typeof removeEventListener=="function",wr=[];to&&addEventListener("offline",()=>{wr.forEach(n=>n())},!1);class On extends ot{constructor(e,t){if(super(),this.binaryType=km,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const i=eo(e);t.hostname=i.host,t.secure=i.protocol==="https"||i.protocol==="wss",t.port=i.port,i.query&&(t.query=i.query)}else t.host&&(t.hostname=eo(t.host).host);Zr(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},t.transports.forEach(i=>{const r=i.prototype.name;this.transports.push(r),this._transportsByName[r]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=qm(this.opts.query)),to&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},wr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=el,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&On.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}onOpen(){this.readyState="open",On.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(t+=Vm(r)),i>0&&t>this._maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,$r(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,i){return this._sendPacket("message",e,t,i),this}send(e,t,i){return this._sendPacket("message",e,t,i),this}_sendPacket(e,t,i,r){if(typeof t=="function"&&(r=t,t=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:t,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}_onError(e){if(On.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),to&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=wr.indexOf(this._offlineEventListener);i!==-1&&wr.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}}On.protocol=el;class cg extends On{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),i=!1;On.priorWebsocketSuccess=!1;const r=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!i)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;On.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=t.name,this.emitReserved("upgradeError",f)}}))};function s(){i||(i=!0,h(),t.close(),t=null)}const a=d=>{const f=new Error("probe error: "+d);f.transport=t.name,s(),this.emitReserved("upgradeError",f)};function o(){a("transport closed")}function c(){a("socket closed")}function l(d){t&&d.name!==t.name&&s()}const h=()=>{t.removeListener("open",r),t.removeListener("error",a),t.removeListener("close",o),this.off("close",c),this.off("upgrading",l)};t.once("open",r),t.once("error",a),t.once("close",o),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){const t=[];for(let i=0;i<e.length;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}}let lg=class extends cg{constructor(e,t={}){const i=typeof e=="object"?e:t;(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(r=>ig[r]).filter(r=>!!r)),super(e,i)}};function hg(n,e="",t){let i=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),i=eo(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(t&&t.port===i.port?"":":"+i.port),i}const ug=typeof ArrayBuffer=="function",dg=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,ol=Object.prototype.toString,fg=typeof Blob=="function"||typeof Blob<"u"&&ol.call(Blob)==="[object BlobConstructor]",pg=typeof File=="function"||typeof File<"u"&&ol.call(File)==="[object FileConstructor]";function So(n){return ug&&(n instanceof ArrayBuffer||dg(n))||fg&&n instanceof Blob||pg&&n instanceof File}function Rr(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,i=n.length;t<i;t++)if(Rr(n[t]))return!0;return!1}if(So(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return Rr(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&Rr(n[t]))return!0;return!1}function mg(n){const e=[],t=n.data,i=n;return i.data=no(t,e),i.attachments=e.length,{packet:i,buffers:e}}function no(n,e){if(!n)return n;if(So(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let i=0;i<n.length;i++)t[i]=no(n[i],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=no(n[i],e));return t}return n}function gg(n,e){return n.data=io(n.data,e),delete n.attachments,n}function io(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=io(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=io(n[t],e));return n}const _g=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var ze;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(ze||(ze={}));class vg{constructor(e){this.replacer=e}encode(e){return(e.type===ze.EVENT||e.type===ze.ACK)&&Rr(e)?this.encodeAsBinary({type:e.type===ze.EVENT?ze.BINARY_EVENT:ze.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===ze.BINARY_EVENT||e.type===ze.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=mg(e),i=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(i),r}}class Eo extends ot{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===ze.BINARY_EVENT;i||t.type===ze.BINARY_ACK?(t.type=i?ze.EVENT:ze.ACK,this.reconstructor=new xg(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(So(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(ze[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===ze.BINARY_EVENT||i.type===ze.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const a=e.substring(s,t);if(a!=Number(a)||e.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(a)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(s,t)}else i.nsp="/";const r=e.charAt(t+1);if(r!==""&&Number(r)==r){const s=t+1;for(;++t;){const a=e.charAt(t);if(a==null||Number(a)!=a){--t;break}if(t===e.length)break}i.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(Eo.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case ze.CONNECT:return hc(t);case ze.DISCONNECT:return t===void 0;case ze.CONNECT_ERROR:return typeof t=="string"||hc(t);case ze.EVENT:case ze.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&_g.indexOf(t[0])===-1);case ze.ACK:case ze.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class xg{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=gg(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function hc(n){return Object.prototype.toString.call(n)==="[object Object]"}const Mg=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Eo,Encoder:vg,get PacketType(){return ze}},Symbol.toStringTag,{value:"Module"}));function Kt(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const yg=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class al extends ot{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Kt(e,"open",this.onopen.bind(this)),Kt(e,"packet",this.onpacket.bind(this)),Kt(e,"error",this.onerror.bind(this)),Kt(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var i,r,s;if(yg.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const a={type:ze.EVENT,data:t};if(a.options={},a.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const h=this.ids++,d=t.pop();this._registerAckCallback(h,d),a.id=h}const o=(r=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||r===void 0?void 0:r.writable,c=this.connected&&!(!((s=this.io.engine)===null||s===void 0)&&s._hasPingExpired());return this.flags.volatile&&!o||(c?(this.notifyOutgoingListeners(a),this.packet(a)):this.sendBuffer.push(a)),this.flags={},this}_registerAckCallback(e,t){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},r),a=(...o)=>{this.io.clearTimeoutFn(s),t.apply(this,o)};a.withError=!0,this.acks[e]=a}emitWithAck(e,...t){return new Promise((i,r)=>{const s=(a,o)=>a?r(a):i(o);s.withError=!0,t.push(s),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>(this._queue[0],r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(r)):(this._queue.shift(),t&&t(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:ze.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){const i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case ze.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ze.EVENT:case ze.BINARY_EVENT:this.onevent(e);break;case ze.ACK:case ze.BINARY_ACK:this.onack(e);break;case ze.DISCONNECT:this.ondisconnect();break;case ze.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...r){i||(i=!0,t.packet({type:ze.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ze.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function Ci(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Ci.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};Ci.prototype.reset=function(){this.attempts=0};Ci.prototype.setMin=function(n){this.ms=n};Ci.prototype.setMax=function(n){this.max=n};Ci.prototype.setJitter=function(n){this.jitter=n};class ro extends ot{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Zr(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Ci({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||Mg;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new lg(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=Kt(t,"open",function(){i.onopen(),e&&e()}),s=o=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",o),e?e(o):this.maybeReconnectOnOpen()},a=Kt(t,"error",s);if(this._timeout!==!1){const o=this._timeout,c=this.setTimeoutFn(()=>{r(),s(new Error("timeout")),t.close()},o);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(r),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Kt(e,"ping",this.onping.bind(this)),Kt(e,"data",this.ondata.bind(this)),Kt(e,"error",this.onerror.bind(this)),Kt(e,"close",this.onclose.bind(this)),Kt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){$r(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new al(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Oi={};function Cr(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=hg(n,e.path||"/socket.io"),i=t.source,r=t.id,s=t.path,a=Oi[r]&&s in Oi[r].nsps,o=e.forceNew||e["force new connection"]||e.multiplex===!1||a;let c;return o?c=new ro(i,e):(Oi[r]||(Oi[r]=new ro(i,e)),c=Oi[r]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(Cr,{Manager:ro,Socket:al,io:Cr,connect:Cr});const be={WORLD_SIZE:150,BLOCK_SIZE:1,TIME_SPEED:.5,DAY_LENGTH:120,WEATHER_CLEAR:"clear",WEATHER_RAIN:"rain",WEATHER_SNOW:"snow",BLOCK_TYPES:{GRASS:{color:2263842,name:"grass"},DIRT:{color:9127187,name:"dirt"},STONE:{color:6908265,name:"stone"},WOOD:{color:6045747,name:"wood"},WOOD_DARK:{color:4007959,name:"wood_dark"},LEAVES:{color:2263842,name:"leaves",transparent:!0,opacity:.9},GLASS:{color:11393254,name:"glass",transparent:!0,opacity:.3},BRICK:{color:9109504,name:"brick"},SAND:{color:16044095,name:"sand"},COBBLESTONE:{color:4868682,name:"cobblestone"},TORCH:{color:16737792,name:"torch",emissive:16737792},WATER:{color:3447003,name:"water",transparent:!0,opacity:.6},SNOW:{color:16777215,name:"snow"}},SKY_COLORS:{day:{top:30719,bottom:8900331},sunset:{top:16744192,bottom:16766720},night:{top:51,bottom:657962},dawn:{top:4286945,bottom:16758465}}};let Ze,ve,Ht,ct,Br=null,Wi=new Map,sn=new Map,mt="stone",_n=!1,Sg=new Cm,tt=.5,so=be.WEATHER_CLEAR,Tn,An,vi,kr,pn,Sr;function Eg(){Ze=new bm,Ze.background=new Fe(8900331),Ze.fog=new _o(8900331,.008),ve=new kt(75,window.innerWidth/window.innerHeight,.1,1e3),ve.position.set(0,15,30),Ht=new Yc({antialias:!0}),Ht.setSize(window.innerWidth,window.innerHeight),Ht.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ht.shadowMap.enabled=!0,Ht.shadowMap.type=yc,document.getElementById("app").appendChild(Ht.domElement),Bg(),zg(),bg(),Tg(),Ag(),Rg(),kg(),Qg(),t_(),Hg(),s_(),window.addEventListener("resize",u_),dl(),console.log("Moltcraft Ultimate Scene initialized")}function bg(){Sr=new Ln,Ze.add(Sr);const n=new Pn(8,32,32),e=new Cn({color:16777215,fog:!1});Tn=new lt(n,e),Sr.add(Tn);const t=new Cn({color:16768324,transparent:!0,opacity:.3,fog:!1}),i=new lt(new Pn(12,32,32),t);Tn.add(i);const r=new Pn(4,32,32),s=new Cn({color:16777215,fog:!1});An=new lt(r,s),Sr.add(An);const a=new Cn({color:13421772});for(let o=0;o<8;o++){const c=new lt(new Pn(1,16,16),a),l=Math.random()*Math.PI*2,h=Math.random()*Math.PI*.5;c.position.setFromSphericalCoords(4.2,h,l),An.add(c)}}function Tg(){const n=new Vt,e=2e3,t=new Float32Array(e*3);for(let r=0;r<e;r++){const s=Math.random()*Math.PI*2,a=Math.random()*Math.PI*.8+.1,o=380;t[r*3]=o*Math.sin(a)*Math.cos(s),t[r*3+1]=o*Math.cos(a),t[r*3+2]=o*Math.sin(a)*Math.sin(s)}n.setAttribute("position",new Nt(t,3));const i=new Yr({color:16777215,size:1.5,transparent:!0,opacity:0,sizeAttenuation:!0});vi=new vo(n,i),Ze.add(vi)}function Ag(){const n=new Ln;for(let e=0;e<30;e++){const t=wg();t.position.set(Math.random()*400-200,40+Math.random()*30,Math.random()*400-200),t.userData.speed=.02+Math.random()*.03,n.add(t)}kr=n,Ze.add(kr)}function wg(){const n=new Ln,e=3+Math.floor(Math.random()*5);for(let t=0;t<e;t++){const i=new lt(new Pn(3+Math.random()*4,8,8),new Kr({color:16777215,transparent:!0,opacity:.9}));i.position.set((Math.random()-.5)*10,(Math.random()-.5)*3,(Math.random()-.5)*10),n.add(i)}return n}function Rg(){pn=new Ln,Ze.add(pn)}function Cg(){const n=new Vt,e=5e3,t=new Float32Array(e*3);for(let r=0;r<e;r++)t[r*3]=(Math.random()-.5)*200,t[r*3+1]=Math.random()*100,t[r*3+2]=(Math.random()-.5)*200;n.setAttribute("position",new Nt(t,3));const i=new Yr({color:11184810,size:.3,transparent:!0,opacity:.6});return new vo(n,i)}function Lg(){const n=new Vt,e=3e3,t=new Float32Array(e*3),i=[];for(let a=0;a<e;a++)t[a*3]=(Math.random()-.5)*200,t[a*3+1]=Math.random()*80,t[a*3+2]=(Math.random()-.5)*200,i.push({x:(Math.random()-.5)*.1,y:-.1-Math.random()*.1,z:(Math.random()-.5)*.1});n.setAttribute("position",new Nt(t,3));const r=new Yr({color:16777215,size:.5,transparent:!0,opacity:.9}),s=new vo(n,r);return s.userData.velocities=i,s}function Pg(n){for(so=n;pn.children.length>0;){const t=pn.children[0];pn.remove(t),t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}n===be.WEATHER_RAIN?(pn.add(Cg()),Ze.fog.density=.02):n===be.WEATHER_SNOW?(pn.add(Lg()),Ze.fog.density=.015):Ze.fog.density=.008;const e=document.getElementById("weather-value");e&&(e.textContent=n.toUpperCase())}function Dg(n){tt+=n/be.DAY_LENGTH*be.TIME_SPEED,tt>=1&&(tt-=1);const e=tt*Math.PI*2-Math.PI/2,t=e+Math.PI,i=200;Tn.position.x=Math.cos(e)*i,Tn.position.y=Math.sin(e)*i,Tn.position.z=0,An.position.x=Math.cos(t)*i,An.position.y=Math.sin(t)*i,An.position.z=0,Ug(),Ig(),Tn.visible=Tn.position.y>-20,An.visible=An.position.y>-20}function Ug(){let n,e;if(tt>.2&&tt<.3){const i=(tt-.2)/.1;n=bn(be.SKY_COLORS.night.top,be.SKY_COLORS.dawn.top,i),e=bn(be.SKY_COLORS.night.bottom,be.SKY_COLORS.dawn.bottom,i)}else if(tt>=.3&&tt<.4){const i=(tt-.3)/.1;n=bn(be.SKY_COLORS.dawn.top,be.SKY_COLORS.day.top,i),e=bn(be.SKY_COLORS.dawn.bottom,be.SKY_COLORS.day.bottom,i)}else if(tt>=.4&&tt<.7)n=be.SKY_COLORS.day.top,e=be.SKY_COLORS.day.bottom;else if(tt>=.7&&tt<.8){const i=(tt-.7)/.1;n=bn(be.SKY_COLORS.day.top,be.SKY_COLORS.sunset.top,i),e=bn(be.SKY_COLORS.day.bottom,be.SKY_COLORS.sunset.bottom,i)}else if(tt>=.8&&tt<.9){const i=(tt-.8)/.1;n=bn(be.SKY_COLORS.sunset.top,be.SKY_COLORS.night.top,i),e=bn(be.SKY_COLORS.sunset.bottom,be.SKY_COLORS.night.bottom,i)}else n=be.SKY_COLORS.night.top,e=be.SKY_COLORS.night.bottom;const t=Ze.children.find(i=>i.material&&i.material.uniforms);t&&t.material.uniforms&&(t.material.uniforms.topColor.value.setHex(n),t.material.uniforms.bottomColor.value.setHex(e)),Ze.background.setHex(n),Ze.fog.color.setHex(n)}function Ig(){if(!vi)return;const n=tt>.75||tt<.25;vi.material.opacity=n?Math.min(vi.material.opacity+.01,.8):Math.max(vi.material.opacity-.02,0)}function bn(n,e,t){return new Fe(n).lerp(new Fe(e),t).getHex()}function Ng(n){kr&&kr.children.forEach(e=>{e.position.x+=e.userData.speed,e.position.x>200&&(e.position.x=-200)})}function Og(n){pn&&pn.children.forEach(e=>{const t=e.geometry.attributes.position.array;if(so===be.WEATHER_RAIN)for(let i=0;i<t.length;i+=3)t[i+1]-=1.5,t[i+1]<0&&(t[i+1]=100,t[i]=(Math.random()-.5)*200,t[i+2]=(Math.random()-.5)*200);else if(so===be.WEATHER_SNOW){const i=e.userData.velocities;for(let r=0;r<t.length;r+=3){const s=r/3;t[r]+=i[s].x+Math.sin(Date.now()*.001+r)*.02,t[r+1]+=i[s].y,t[r+2]+=i[s].z+Math.cos(Date.now()*.001+r)*.02,t[r+1]<0&&(t[r+1]=80,t[r]=(Math.random()-.5)*200,t[r+2]=(Math.random()-.5)*200)}}e.geometry.attributes.position.needsUpdate=!0})}function Fg(){const n=document.getElementById("time-value");if(n){const e=Math.floor(tt*24),t=Math.floor((tt*24-e)*60);n.textContent=`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}}function Bg(){const n=new Rm(16777215,.6);Ze.add(n);const e=new wm(16777215,1);e.position.set(100,100,50),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=500,e.shadow.camera.left=-100,e.shadow.camera.right=100,e.shadow.camera.top=100,e.shadow.camera.bottom=-100,Ze.add(e)}function kg(){const n=new Pn(400,32,32),e=new Bn({uniforms:{topColor:{value:new Fe(30719)},bottomColor:{value:new Fe(8900331)},offset:{value:33},exponent:{value:.6}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `,side:At});Ze.add(new lt(n,e))}function zg(){const n=new lt(new Xr(be.WORLD_SIZE,be.WORLD_SIZE),new Kr({color:2263842}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,Ze.add(n)}function Hg(){const n=document.createElement("div");n.id="ui-overlay",n.innerHTML=`
    <div id="crosshair" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:24px;height:24px;pointer-events:none;z-index:1000;">
      <div style="position:absolute;top:50%;left:0;width:24px;height:3px;background:rgba(255,255,255,0.9);transform:translateY(-50%);border-radius:2px;box-shadow:0 0 4px rgba(0,0,0,0.5);"></div>
      <div style="position:absolute;top:0;left:50%;width:3px;height:24px;background:rgba(255,255,255,0.9);transform:translateX(-50%);border-radius:2px;box-shadow:0 0 4px rgba(0,0,0,0.5);"></div>
      <div style="position:absolute;top:50%;left:50%;width:6px;height:6px;background:white;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 6px rgba(0,0,0,0.5);"></div>
    </div>
    <div id="click-effect" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:0;height:0;pointer-events:none;z-index:999;border:3px solid rgba(255,255,255,0.8);border-radius:50%;opacity:0;">
    <div id="block-selector" style="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);display:flex;gap:6px;background:rgba(0,0,0,0.7);padding:10px;border-radius:10px;backdrop-filter:blur(5px);max-width:90vw;overflow-x:auto;">
      <button class="block-btn" data-type="grass" style="min-width:45px;height:45px;background:linear-gradient(180deg,#228B22 50%,#8B4513 50%);border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Grass (1)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:white;font-weight:bold;text-shadow:1px 1px 1px black;">1</span>
      </button>
      <button class="block-btn" data-type="stone" style="min-width:45px;height:45px;background:#696969;border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Stone (2)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:white;font-weight:bold;text-shadow:1px 1px 1px black;">2</span>
      </button>
      <button class="block-btn" data-type="wood" style="min-width:45px;height:45px;background:#5C4033;border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Wood (3)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:white;font-weight:bold;text-shadow:1px 1px 1px black;">3</span>
      </button>
      <button class="block-btn" data-type="leaves" style="min-width:45px;height:45px;background:rgba(34,139,34,0.9);border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Leaves (4)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:white;font-weight:bold;text-shadow:1px 1px 1px black;">4</span>
      </button>
      <button class="block-btn" data-type="brick" style="min-width:45px;height:45px;background:#8B0000;border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Brick (5)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:white;font-weight:bold;text-shadow:1px 1px 1px black;">6</span>
      </button>
      <button class="block-btn" data-type="glass" style="min-width:45px;height:45px;background:rgba(173,216,230,0.5);border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Glass (6)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:white;font-weight:bold;text-shadow:1px 1px 1px black;">7</span>
      </button>
      <button class="block-btn" data-type="cobblestone" style="min-width:45px;height:45px;background:#4a4a4a;border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Cobblestone (7)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:white;font-weight:bold;text-shadow:1px 1px 1px black;">8</span>
      </button>
      <button class="block-btn" data-type="torch" style="min-width:45px;height:45px;background:#FF6600;border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Torch (8)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:black;font-weight:bold;">9</span>
      </button>
      <button class="block-btn" data-type="sand" style="min-width:45px;height:45px;background:#F4D03F;border:3px solid transparent;border-radius:6px;cursor:pointer;position:relative;" title="Sand (9)">
        <span style="position:absolute;bottom:1px;right:3px;font-size:9px;color:black;font-weight:bold;">0</span>
      </button>
    </div>
    <div style="position:fixed;top:20px;left:20px;color:white;background:rgba(0,0,0,0.6);padding:12px;border-radius:8px;font-family:monospace;font-size:13px;backdrop-filter:blur(5px);">
      <div>🕹️ WASD: Move | SPACE: Jump</div>
      <div>🖱️ Click: Place Block | Shift+Click: Remove</div>
      <div>⌨️ 1-9/0: Select Block | T: Chat</div>
      <div style="margin-top:8px;display:flex;align-items:center;gap:8px;">
        <span>Selected:</span>
        <div id="selected-block-preview" style="width:24px;height:24px;background:#696969;border-radius:3px;border:2px solid white;"></div>
        <span id="selected-block-name">stone</span>
      </div>
    </div>
    <div style="position:fixed;top:20px;right:20px;color:white;background:rgba(0,0,0,0.6);padding:12px;border-radius:8px;font-family:monospace;font-size:13px;backdrop-filter:blur(5px);">
      <div>⏰ Time: <span id="time-value">12:00</span></div>
      <div>🌤️ Weather: <span id="weather-value">CLEAR</span></div>
    </div>
    <div style="position:fixed;bottom:90px;right:20px;display:flex;gap:5px;">
      <button onclick="setWeather('clear')" style="background:#87CEEB;color:black;padding:8px 12px;border:none;cursor:pointer;border-radius:5px;font-size:16px;" title="Clear">☀️</button>
      <button onclick="setWeather('rain')" style="background:#3498DB;color:white;padding:8px 12px;border:none;cursor:pointer;border-radius:5px;font-size:16px;" title="Rain">🌧️</button>
      <button onclick="setWeather('snow')" style="background:#FFFFFF;color:black;padding:8px 12px;border:none;cursor:pointer;border-radius:5px;font-size:16px;" title="Snow">❄️</button>
    </div>
    <div id="chat" style="position:fixed;bottom:90px;left:20px;max-height:200px;overflow-y:auto;color:white;background:rgba(0,0,0,0.4);padding:10px;border-radius:8px;font-family:monospace;font-size:13px;backdrop-filter:blur(5px);max-width:300px;"></div>
  `,document.body.appendChild(n),document.querySelectorAll(".block-btn").forEach(e=>{e.addEventListener("click",()=>{mt=e.dataset.type,Yt()})})}function Yt(){document.querySelectorAll(".block-btn").forEach(t=>{t.dataset.type===mt?(t.style.borderColor="#00ff00",t.style.transform="scale(1.1)"):(t.style.borderColor="transparent",t.style.transform="scale(1)")});const n=document.getElementById("selected-block-preview"),e=document.getElementById("selected-block-name");if(n&&e){const i=(be.BLOCK_TYPES[mt.toUpperCase()]||{}).color||6908265;n.style.background="#"+i.toString(16).padStart(6,"0"),e.textContent=mt}cl(mt)}function cl(n){const e=document.getElementById("block-toast");e&&e.remove();const t=document.createElement("div");t.id="block-toast",t.style.cssText=`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 20px 40px;
    border-radius: 10px;
    font-family: monospace;
    font-size: 24px;
    z-index: 2000;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  `;const r=(be.BLOCK_TYPES[n.toUpperCase()]||{}).color||6908265;t.innerHTML=`
    <div style="display:flex;align-items:center;gap:15px;">
      <div style="width:40px;height:40px;background:#${r.toString(16).padStart(6,"0")};border-radius:5px;border:2px solid white;"></div>
      <span>${n.toUpperCase()}</span>
    </div>
  `,document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"}),setTimeout(()=>{t.style.opacity="0",setTimeout(()=>t.remove(),200)},800)}function Gg(n){var t,i,r;const e=new lt(new vn(.8,1.8,.8),new Kr({color:n.color||16737792}));return e.position.set(((t=n.position)==null?void 0:t.x)||0,(((i=n.position)==null?void 0:i.y)||1)+.9,((r=n.position)==null?void 0:r.z)||0),e.castShadow=!0,e.userData={agentId:n.id,agentName:n.name},e}function Vg(n){if(Wi.has(n.id)){ll(n);return}const e=Gg(n);Ze.add(e),Wi.set(n.id,e)}function ll(n){var t,i,r;const e=Wi.get(n.id);e&&e.position.set(((t=n.position)==null?void 0:t.x)||e.position.x,(((i=n.position)==null?void 0:i.y)||e.position.y)+.9,((r=n.position)==null?void 0:r.z)||e.position.z)}function Wg(n){const e=Wi.get(n);e&&(Ze.remove(e),Wi.delete(n))}function Xg(n,e,t,i,r="stone"){const s=be.BLOCK_TYPES[r.toUpperCase()]||{},a={color:i||s.color||6908265};s.transparent&&(a.transparent=!0,a.opacity=s.opacity||.5),s.emissive&&(a.emissive=s.emissive,a.emissiveIntensity=.5);const o=new lt(new vn(be.BLOCK_SIZE,be.BLOCK_SIZE,be.BLOCK_SIZE),new Kr(a));return o.position.set(n,e,t),o.castShadow=!0,o.receiveShadow=!0,o.userData={blockKey:`${n},${e},${t}`,blockType:r},o}function uc(n){const e=`${n.x},${n.y},${n.z}`;if(sn.has(e))return;const t=Xg(n.x,n.y,n.z,n.color,n.type);Ze.add(t),sn.set(e,t)}function qg(n){const e=`${n.x},${n.y},${n.z}`,t=sn.get(e);t&&(Ze.remove(t),sn.delete(e))}function hl(n,e,t){const r=(be.BLOCK_TYPES[mt.toUpperCase()]||{}).color||6908265;console.log("Placing block:",mt,"color:",r.toString(16)),ct.emit("block:place",{x:n,y:e,z:t,color:"#"+r.toString(16).padStart(6,"0"),type:mt})}function Yg(n,e,t){ct.emit("block:remove",{x:n,y:e,z:t})}const Ye={forward:!1,backward:!1,left:!1,right:!1},Er=new U,Fi=new U;function dc(n){switch(n.code){case"KeyW":Ye.forward=!0;break;case"KeyS":Ye.backward=!0;break;case"KeyA":Ye.left=!0;break;case"KeyD":Ye.right=!0;break;case"Space":Hi&&(gi=Zg,Hi=!1);break;case"Digit1":mt="grass",Yt();break;case"Digit2":mt="stone",Yt();break;case"Digit3":mt="wood",Yt();break;case"Digit4":mt="leaves",Yt();break;case"Digit5":mt="brick",Yt();break;case"Digit6":mt="glass",Yt();break;case"Digit7":mt="cobblestone",Yt();break;case"Digit8":mt="torch",Yt();break;case"Digit9":mt="sand",Yt();break;case"KeyT":const e=prompt("Message:");e&&ct.emit("chat:message",{message:e});break}}function fc(n){switch(n.code){case"KeyW":Ye.forward=!1;break;case"KeyS":Ye.backward=!1;break;case"KeyA":Ye.left=!1;break;case"KeyD":Ye.right=!1;break}}function Kg(n){if(!_n)return;const e=10*n;Fi.z=Number(Ye.forward)-Number(Ye.backward),Fi.x=Number(Ye.right)-Number(Ye.left),Fi.normalize(),Er.z=Fi.z*e,Er.x=Fi.x*e,ve.position.x+=Er.x,ve.position.z+=Er.z,ct&&Br&&ct.emit("agent:move",{id:Br,position:{x:ve.position.x,y:ve.position.y,z:ve.position.z}})}const jg=1.8,br=.3;let gi=0,Hi=!1;const $g=30,Zg=10;function zs(n,e,t){const i=n-br,r=n+br,s=e,a=e+jg,o=t-br,c=t+br;for(const[l,h]of sn){const[d,f,m]=l.split(",").map(Number),_=d-.5,v=d+.5,p=f-.5,u=f+.5,T=m-.5,y=m+.5;if(r>_&&i<v&&a>p&&s<u&&c>T&&o<y)return!0}return!1}function Jg(n){if(!_n)return;Hi||(gi-=$g*n);const e=10,t=new U,i=new U(0,0,-1).applyQuaternion(ve.quaternion);i.y=0,i.normalize();const r=new U(1,0,0).applyQuaternion(ve.quaternion);r.y=0,r.normalize(),Ye.forward&&t.add(i),Ye.backward&&t.sub(i),Ye.left&&t.sub(r),Ye.right&&t.add(r),t.normalize();const s=ve.position.x+t.x*e*n,a=ve.position.z+t.z*e*n;zs(s,ve.position.y,ve.position.z)||(ve.position.x=s),zs(ve.position.x,ve.position.y,a)||(ve.position.z=a);const o=ve.position.y+gi*n;zs(ve.position.x,o,ve.position.z)?(gi<0&&(Hi=!0,ve.position.y=Math.ceil(ve.position.y)+.5),gi=0):(Hi=!1,ve.position.y=o);const c=be.WORLD_SIZE/2;ve.position.x=Math.max(-c+1,Math.min(c-1,ve.position.x)),ve.position.z=Math.max(-c+1,Math.min(c-1,ve.position.z)),ve.position.y=Math.max(1,ve.position.y),ve.position.y<-10&&(ve.position.set(0,5,0),gi=0)}let en=null;function Qg(){const n=new vn(be.BLOCK_SIZE*.99,be.BLOCK_SIZE*.99,be.BLOCK_SIZE*.99),e=new Cn({color:65280,transparent:!0,opacity:.5,depthTest:!1});en=new lt(n,e),en.visible=!1,en.renderOrder=999,Ze.add(en)}function bo(n){return{x:Math.round(n.object.position.x+n.face.normal.x),y:Math.round(n.object.position.y+n.face.normal.y),z:Math.round(n.object.position.z+n.face.normal.z)}}function e_(n){return{x:Math.round(n.object.position.x),y:Math.round(n.object.position.y),z:Math.round(n.object.position.z)}}let Dn=null;function t_(){const n=new vn(be.BLOCK_SIZE*1.02,be.BLOCK_SIZE*1.02,be.BLOCK_SIZE*1.02),e=new Cn({color:16776960,transparent:!0,opacity:.3,depthTest:!1});Dn=new lt(n,e),Dn.visible=!1,Dn.renderOrder=998,Ze.add(Dn)}function n_(){if(!_n||!Dn)return;const n=new jr;n.setFromCamera(new Ge(0,0),ve);const e=Array.from(sn.values()),t=n.intersectObjects(e);if(t.length>0){const i=t[0];Dn.position.copy(i.object.position),Dn.visible=!0}else Dn.visible=!1}function i_(){if(!_n||!en)return;const n=new jr;n.setFromCamera(new Ge(0,0),ve);const e=Array.from(sn.values()),t=n.intersectObjects(e);if(t.length>0){const i=t[0],r=bo(i),s=`${r.x},${r.y},${r.z}`;if(!sn.has(s)){en.position.set(r.x,r.y,r.z),en.visible=!0;const a=ve.position.distanceTo(new U(r.x,r.y,r.z));en.material.color.setHex(a>10?16711680:65280),en.material.opacity=Math.max(.2,.5-a*.02);return}}en.visible=!1}function oo(n){!_n&&n.target===Ht.domElement&&Ht.domElement.requestPointerLock()}function pc(n){if(!_n){Ht.domElement.requestPointerLock();return}r_();const e=new jr;e.setFromCamera(new Ge(0,0),ve);const t=Array.from(sn.values()),i=e.intersectObjects(t);if(i.length>0){const r=i[0];if(n.shiftKey){const s=e_(r);Yg(s.x,s.y,s.z)}else{const s=bo(r);hl(s.x,s.y,s.z)}}}function r_(){const n=document.getElementById("click-effect");n&&(n.style.transition="none",n.style.width="0",n.style.height="0",n.style.opacity="0.8",n.offsetHeight,n.style.transition="all 0.3s ease-out",n.style.width="40px",n.style.height="40px",n.style.opacity="0")}function mc(n){_n&&(ve.rotation.y-=n.movementX*.002,ve.rotation.x-=n.movementY*.002,ve.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,ve.rotation.x)))}let Lr=0,Pr=0,Jr=!1,gc=0,Qn=!1,To=0,Ao=0,Qr=0,es=0,zr=null;function s_(){const n=document.createElement("div");n.id="touch-overlay",n.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999998;
    touch-action: none;
    display: none;
    pointer-events: auto;
  `,document.body.appendChild(n);const e=h=>{ao()&&!Qn&&Ti===null&&(h.preventDefault(),h.stopPropagation())};document.addEventListener("touchstart",e,{passive:!1}),document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",e,{passive:!1}),document.addEventListener("touchcancel",e,{passive:!1}),document.body.style.touchAction="none",document.body.style.overflow="hidden",document.body.style.overscrollBehavior="none";const t=document.getElementById("app");t&&(t.style.touchAction="none",t.style.pointerEvents="none");const i=document.createElement("div");i.id="joystick-container",i.style.cssText=`
    position: fixed;
    bottom: 130px;
    left: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    border: 3px solid rgba(255,255,255,0.5);
    display: none;
    touch-action: none;
    z-index: 999999;
    pointer-events: auto;
  `;const r=document.createElement("div");r.id="joystick-knob",r.style.cssText=`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255,255,255,0.9);
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  `,i.appendChild(r),document.body.appendChild(i);const s=document.createElement("div");s.id="joystick-label",s.style.cssText=`
    position: fixed;
    bottom: 240px;
    left: 35px;
    color: white;
    font-family: monospace;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    z-index: 999999;
    display: none;
    pointer-events: none;
  `,s.textContent="DRAG TO MOVE",document.body.appendChild(s);const a=document.createElement("div");a.id="camera-touch-zone",a.style.cssText=`
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    touch-action: none;
    z-index: 999997;
    pointer-events: auto;
  `,document.body.appendChild(a);const o=document.createElement("div");o.id="block-touch-zone",o.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    touch-action: none;
    z-index: 999997;
    pointer-events: auto;
  `,document.body.appendChild(o);const c=document.createElement("div");c.id="mobile-block-selector",c.style.cssText=`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    background: rgba(0,0,0,0.85);
    padding: 15px;
    border-radius: 15px;
    z-index: 999999;
    pointer-events: auto;
    touch-action: none;
  `,document.body.appendChild(c),["grass","stone","wood","leaves","brick","glass","cobblestone","torch","sand"].forEach(h=>{const d=document.createElement("button");d.className="mobile-block-btn",d.dataset.type=h;const m=(be.BLOCK_TYPES[h.toUpperCase()]||{}).color||6908265;d.style.cssText=`
      width: 50px;
      height: 50px;
      background: #${m.toString(16).padStart(6,"0")};
      border: 3px solid transparent;
      border-radius: 10px;
      cursor: pointer;
      flex-shrink: 0;
      touch-action: none;
      pointer-events: auto;
    `,d.addEventListener("touchstart",_=>{_.preventDefault(),_.stopPropagation(),mt=h,Yt(),cl(h)},{passive:!1}),c.appendChild(d)}),ao()&&(n.style.display="block",i.style.display="block",s.style.display="block",c.style.display="flex",console.log("Mobile mode activated - touch controls enabled")),i.addEventListener("touchstart",o_,{passive:!1}),i.addEventListener("touchmove",a_,{passive:!1}),i.addEventListener("touchend",_c,{passive:!1}),i.addEventListener("touchcancel",_c,{passive:!1}),a.addEventListener("touchstart",c_,{passive:!1}),a.addEventListener("touchmove",l_,{passive:!1}),a.addEventListener("touchend",vc,{passive:!1}),a.addEventListener("touchcancel",vc,{passive:!1}),o.addEventListener("touchstart",h_,{passive:!1}),o.addEventListener("touchend",xc,{passive:!1}),o.addEventListener("touchcancel",xc,{passive:!1})}function ao(){const n="ontouchstart"in window||navigator.maxTouchPoints>0,e=window.innerWidth<=768,t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),i=n&&(e||t);return console.log("[isMobile] Result:",i,{hasTouch:n,isSmallScreen:e,isMobileUserAgent:t,width:window.innerWidth}),i}function o_(n){if(n.preventDefault(),n.stopPropagation(),n.touches.length===0)return;const e=n.changedTouches[0];zr=e.identifier,To=e.clientX,Ao=e.clientY,Qr=e.clientX,es=e.clientY,Qn=!0,wo()}function a_(n){if(Qn){n.preventDefault(),n.stopPropagation();for(let e=0;e<n.changedTouches.length;e++)if(n.changedTouches[e].identifier===zr){const t=n.changedTouches[e];Qr=t.clientX,es=t.clientY,wo(),ul();break}}}function _c(n){if(Qn){for(let e=0;e<n.changedTouches.length;e++)if(n.changedTouches[e].identifier===zr){Qn=!1,zr=null,Ye.forward=!1,Ye.backward=!1,Ye.left=!1,Ye.right=!1,wo();break}}}function wo(){const n=document.getElementById("joystick-container"),e=document.getElementById("joystick-knob");if(!n||!e)return;const t=27;let i=Qr-To,r=es-Ao;const s=Math.sqrt(i*i+r*r);s>t&&(i=i/s*t,r=r/s*t),e.style.transform=`translate(calc(-50% + ${i}px), calc(-50% + ${r}px))`,Qn?(n.style.borderColor="rgba(0,255,100,0.7)",n.style.background="rgba(0,255,100,0.1)"):(n.style.borderColor="rgba(255,255,255,0.4)",n.style.background="rgba(255,255,255,0.2)")}function ul(){if(Ye.forward=!1,Ye.backward=!1,Ye.left=!1,Ye.right=!1,!Qn)return;const n=Qr-To,e=es-Ao,t=8;e<-t&&(Ye.forward=!0),e>t&&(Ye.backward=!0),n<-t&&(Ye.left=!0),n>t&&(Ye.right=!0)}let Ti=null;function c_(n){if(n.preventDefault(),n.stopPropagation(),n.touches.length===0)return;const e=n.changedTouches[0];Ti=e.identifier,Lr=e.clientX,Pr=e.clientY,Jr=!1}function l_(n){if(Ti!==null){n.preventDefault(),n.stopPropagation();for(let e=0;e<n.changedTouches.length;e++)if(n.changedTouches[e].identifier===Ti){const t=n.changedTouches[e];(Math.abs(t.clientX-Lr)>5||Math.abs(t.clientY-Pr)>5)&&(Jr=!0);const i=.004;ve.rotation.y-=(t.clientX-Lr)*i,ve.rotation.x-=(t.clientY-Pr)*i,ve.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,ve.rotation.x)),Lr=t.clientX,Pr=t.clientY;break}}}function vc(n){for(let e=0;e<n.changedTouches.length;e++)if(n.changedTouches[e].identifier===Ti){Ti=null;break}}function h_(n){n.preventDefault(),n.stopPropagation();const e=Date.now();e-gc>500&&(Jr=!1),gc=e}function xc(n){if(Jr)return;const e=new jr;e.setFromCamera(new Ge(0,0),ve);const t=Array.from(sn.values()),i=e.intersectObjects(t);if(i.length>0){const r=i[0],s=bo(r);hl(s.x,s.y,s.z)}}function dl(){const n=ao(),e=document.getElementById("touch-overlay"),t=document.getElementById("joystick-container"),i=document.getElementById("mobile-block-selector"),r=document.querySelector("#joystick-container + div");e&&(e.style.display=n?"block":"none"),t&&(t.style.display=n?"block":"none"),i&&(i.style.display=n?"flex":"none"),r&&(r.style.display=n?"block":"none")}function u_(){ve.aspect=window.innerWidth/window.innerHeight,ve.updateProjectionMatrix(),Ht.setSize(window.innerWidth,window.innerHeight),dl()}function d_(){_n=document.pointerLockElement===Ht.domElement,_n?(document.removeEventListener("click",oo),document.addEventListener("keydown",dc),document.addEventListener("keyup",fc),document.addEventListener("click",pc),document.addEventListener("mousemove",mc)):(document.removeEventListener("keydown",dc),document.removeEventListener("keyup",fc),document.removeEventListener("click",pc),document.removeEventListener("mousemove",mc),document.addEventListener("click",oo))}function f_(n,e){const t=document.getElementById("chat");if(!t)return;const i=document.createElement("div");for(i.innerHTML=`<strong>${n}:</strong> ${e}`,t.appendChild(i),t.scrollTop=t.scrollHeight;t.children.length>50;)t.removeChild(t.firstChild)}function p_(n,e){ct=Cr(n,{transports:["polling"],reconnection:!0,reconnectionAttempts:5,reconnectionDelay:1e3,timeout:1e4,autoConnect:!0,upgrade:!1,rememberUpgrade:!1}),ct.on("connect",()=>{console.log("Connected to server:",n),ct.emit("agent:spawn",e)}),ct.on("connect_error",t=>{console.error("Socket connection error:",t.message)}),ct.on("disconnect",t=>{console.log("Disconnected from server:",t)}),ct.on("reconnect",t=>{console.log("Reconnected after",t,"attempts")}),ct.on("agent:joined",t=>{Br=t.id,console.log("My agent ID:",Br)}),ct.on("world:state",t=>{t.blocks&&Array.isArray(t.blocks)&&t.blocks.forEach(uc),t.agents&&Array.isArray(t.agents)&&t.agents.forEach(Vg)}),ct.on("block:placed",uc),ct.on("block:removed",qg),ct.on("agent:moved",ll),ct.on("agent:left",t=>{t&&t.id&&Wg(t.id)}),ct.on("chat:broadcast",t=>{t&&t.from&&t.message&&f_(t.from,t.message)}),ct.onAny((t,...i)=>{console.log("Received event:",t)})}function fl(){requestAnimationFrame(fl);const n=Sg.getDelta();Dg(n),Ng(),Og(),Kg(n),Jg(n),i_(),n_(),Fg(),ul(),Ht.render(Ze,ve)}window.scene=Ze;window.camera=ve;window.setWeather=Pg;Eg();fl();document.addEventListener("pointerlockchange",d_);document.addEventListener("click",oo);const m_=new URLSearchParams(window.location.search).get("server")||window.location.origin,g_=new URLSearchParams(window.location.search).get("name")||"Player";p_(m_,{name:g_});console.log("Moltcraft Ultimate Client Loaded");
