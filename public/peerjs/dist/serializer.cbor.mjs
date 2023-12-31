let e,t,n,r,i,o,s,a,l,c,u,f,d,h,p,y,g;var b,m,w,_,v,A,C,E,k,S,O,I,U,M,R,T,D={},x=D.Buffer;try{e=new TextDecoder}catch(e){}let j=0,F=[],B={},L=F,P=0,V={},N=0,K=0,W=[],z=[],$={useRecords:!1,mapsAsObjects:!0},H=!1,J=2;// no-eval build
try{Function("")}catch(e){// if eval variants are not supported, do not create inline object readers ever
J=1/0}class Y{constructor(e){if(e&&((e.keyMap||e._keyMap)&&!e.useRecords&&(e.useRecords=!1,e.mapsAsObjects=!0),!1===e.useRecords&&void 0===e.mapsAsObjects&&(e.mapsAsObjects=!0),e.getStructures&&(e.getShared=e.getStructures),e.getShared&&!e.structures&&((e.structures=[]).uninitialized=!0// this is what we use to denote an uninitialized structures
),e.keyMap))for(let[t,n]of(this.mapKey=new Map,Object.entries(e.keyMap)))this.mapKey.set(n,t);Object.assign(this,e)}/*
	decodeKey(key) {
		return this.keyMap
			? Object.keys(this.keyMap)[Object.values(this.keyMap).indexOf(key)] || key
			: key
	}
	*/decodeKey(e){return this.keyMap&&this.mapKey.get(e)||e}encodeKey(e){return this.keyMap&&this.keyMap.hasOwnProperty(e)?this.keyMap[e]:e}encodeKeys(e){if(!this._keyMap)return e;let t=new Map;for(let[n,r]of Object.entries(e))t.set(this._keyMap.hasOwnProperty(n)?this._keyMap[n]:n,r);return t}decodeKeys(e){if(!this._keyMap||"Map"!=e.constructor.name)return e;if(!this._mapKey)for(let[e,t]of(this._mapKey=new Map,Object.entries(this._keyMap)))this._mapKey.set(t,e);let t={};return(//map.forEach((v,k) => res[Object.keys(this._keyMap)[Object.values(this._keyMap).indexOf(k)] || k] = v)
e.forEach((e,n)=>t[Q(this._mapKey.has(n)?this._mapKey.get(n):n)]=e),t)}mapDecode(e,t){let n=this.decode(e);return this._keyMap&&"Array"===n.constructor.name?n.map(e=>this.decodeKeys(e)):n}decode(e,s){if(t)return eb(()=>(em(),this?this.decode(e,s):Y.prototype.decode.call($,e,s)));n=s>-1?s:e.length,j=0,P=0,K=0,i=null,L=F,o=null,t=e;// this provides cached access to the data view for a buffer if it is getting reused, which is a recommend
// technique for getting data from a database where it can be copied into an existing buffer instead of creating
// new ones
try{l=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){if(// if it doesn't have a buffer, maybe it is the wrong type of object
t=null,e instanceof Uint8Array)throw n;throw Error("Source must be a Uint8Array or Buffer but was a "+(e&&"object"==typeof e?e.constructor.name:typeof e))}return this instanceof Y?(V=this,a=this.sharedValues&&(this.pack?Array(this.maxPrivatePackedValues||16).concat(this.sharedValues):this.sharedValues),this.structures?r=this.structures:(!r||r.length>0)&&(r=[])):(V=$,(!r||r.length>0)&&(r=[]),a=null),X()}decodeMultiple(e,t){let n,r=0;try{let i=e.length;H=!0;let o=this?this.decode(e,i):e_.decode(e,i);if(t){if(!1===t(o))return;for(;j<i;)if(r=j,!1===t(X()))return}else{for(n=[o];j<i;)r=j,n.push(X());return n}}catch(e){throw e.lastPosition=r,e.values=n,e}finally{H=!1,em()}}}function X(){try{let e=Z();if(o){if(j>=o.postBundlePosition){let e=Error("Unexpected bundle position");throw e.incomplete=!0,e}// bundled strings to skip past
j=o.postBundlePosition,o=null}if(j==n)// finished reading this source, cleanup references
r=null,t=null,s&&(s=null);else if(j>n){// over read
let e=Error("Unexpected end of CBOR data");throw e.incomplete=!0,e}else if(!H)throw Error("Data read, but end of buffer not reached");// else more to read, but we are reading sequentially, so don't clear source yet
return e}catch(e){throw em(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer"))&&(e.incomplete=!0),e}}function Z(){let e=t[j++],s=e>>5;if((e&=31)>23)switch(e){case 24:e=t[j++];break;case 25:if(7==s)return function(){let e=t[j++],n=t[j++],r=(127&e)>>2;if(31===r)return n||3&e?NaN:128&e?-1/0:1/0;if(0===r){// significand with 10 fractional bits and divided by 2^14
let t=((3&e)<<8|n)/16777216;return 128&e?-t:t}return eo[3]=128&e|// sign bit
(r>>1)+56// 4 of 5 of the exponent bits, re-offset-ed
,eo[2]=(7&e)<<5|// last exponent bit and first two mantissa bits
n>>3// next 5 bits of mantissa
,eo[1]=n<<5,eo[0]=0,ei[0]}();e=l.getUint16(j),j+=2;break;case 26:if(7==s){let e=l.getFloat32(j);if(V.useFloat32>2){// this does rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
let n=ew[(127&t[j])<<1|t[j+1]>>7];return j+=4,(n*e+(e>0?.5:-.5)>>0)/n}return j+=4,e}e=l.getUint32(j),j+=4;break;case 27:if(7==s){let e=l.getFloat64(j);return j+=8,e}if(s>1){if(l.getUint32(j)>0)throw Error("JavaScript does not support arrays, maps, or strings with length over 4294967295");e=l.getUint32(j+4)}else e=V.int64AsNumber?4294967296*l.getUint32(j)+l.getUint32(j+4):l.getBigUint64(j);j+=8;break;case 31:// indefinite length
switch(s){case 2:case 3:throw Error("Indefinite length not supported for byte or text strings");case 4:let u=[],f,d=0;for(;(f=Z())!=B;)u[d++]=f;return 4==s?u:3==s?u.join(""):x.concat(u);case 5:let h;if(V.mapsAsObjects){let e={};if(V.keyMap)for(;(h=Z())!=B;)e[Q(V.decodeKey(h))]=Z();else for(;(h=Z())!=B;)e[Q(h)]=Z();return e}{c&&(V.mapsAsObjects=!0,c=!1);let e=new Map;if(V.keyMap)for(;(h=Z())!=B;)e.set(V.decodeKey(h),Z());else for(;(h=Z())!=B;)e.set(h,Z());return e}case 7:return B;default:throw Error("Invalid major type for indefinite length "+s)}default:throw Error("Unknown token "+e)}switch(s){case 0:return e;case 1:return~e;case 2:var p;return p=e,V.copyBuffers?Uint8Array.prototype.slice.call(t,j,j+=p):t.subarray(j,j+=p);case 3:if(K>=j)return i.slice(j-N,(j+=e)-N);if(0==K&&n<140&&e<32){// for small blocks, avoiding the overhead of the extract call is helpful
let n=e<16?er(e):function(e){let n=j,r=Array(e);for(let i=0;i<e;i++){let e=t[j++];if((128&e)>0){j=n;return}r[i]=e}return en.apply(String,r)}(e);if(null!=n)return n}return ee(e);case 4:let y=Array(e);//if (currentDecoder.keyMap) for (let i = 0; i < token; i++) array[i] = currentDecoder.decodeKey(read())	
//else 
for(let t=0;t<e;t++)y[t]=Z();return y;case 5:if(V.mapsAsObjects){let t={};if(V.keyMap)for(let n=0;n<e;n++)t[Q(V.decodeKey(Z()))]=Z();else for(let n=0;n<e;n++)t[Q(Z())]=Z();return t}{c&&(V.mapsAsObjects=!0,c=!1);let t=new Map;if(V.keyMap)for(let n=0;n<e;n++)t.set(V.decodeKey(Z()),Z());else for(let n=0;n<e;n++)t.set(Z(),Z());return t}case 6:if(e>=57337){let t=r[8191&e]// check record structures first
;// At some point we may provide an option for dynamic tag assignment with a range like token >= 8 && (token < 16 || (token > 0x80 && token < 0xc0) || (token > 0x130 && token < 0x4000))
if(t)return t.read||(t.read=G(t)),t.read();if(e<65536){if(57343// temporary first-come first-serve tag // proposed tag: 0x7265 // 're'
==e){// currentExtensions as densely stored array (v8 stores arrays densely under about 3000 elements)
let e=ey(),t=Z(),n=Z();ea(t,n);let r={};if(V.keyMap)for(let t=2;t<e;t++)r[Q(V.decodeKey(n[t-2]))]=Z();else for(let t=2;t<e;t++)r[Q(n[t-2])]=Z();return r}if(57342==e){let e=ey(),t=Z();for(let n=2;n<e;n++)ea(t++,Z());return Z()}if(57337==e)return function(){let e=ey(),t=j+Z();for(let t=2;t<e;t++){// skip past bundles that were already read
let e=ey()// this will increment position, so must add to position afterwards
;j+=e}let n=j;return j=t,(o=[et(ey()),et(ey())]).position0=0,o.position1=0,o.postBundlePosition=j,j=n,Z()}();if(V.getShared&&(eg(),t=r[8191&e]))return t.read||(t.read=G(t)),t.read()}}let g=W[e];if(g){if(g.handlesRead)return g(Z);return g(Z())}{let t=Z();for(let n=0;n<z.length;n++){let r=z[n](e,t);if(void 0!==r)return r}return new es(t,e)}case 7:switch(e){case 20:return!1;case 21:return!0;case 22:return null;case 23:return;// undefined
default:let b=(a||ef())[e];if(void 0!==b)return b;throw Error("Unknown token "+e)}default:if(isNaN(e)){let e=Error("Unexpected end of CBOR data");throw e.incomplete=!0,e}throw Error("Unknown CBOR token "+e)}}let q=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function G(e){return e.slowReads=0,function(){// get the array size from the header
let e=t[j++];if(//let majorType = token >> 5
(e&=31)>23)switch(e){case 24:e=t[j++];break;case 25:e=l.getUint16(j),j+=2;break;case 26:e=l.getUint32(j),j+=4;break;default:throw Error("Expected array header, but got "+t[j-1])}// This initial function is quick to instantiate, but runs slower. After several iterations pay the cost to build the faster function
let n=this.compiledReader// first look to see if we have the fast compiled function
;for(;n;){// we have a fast compiled object literal reader
if(n.propertyCount===e)return n(Z)// with the right length, so we use it
;n=n.next// see if there is another reader with the right length
}if(this.slowReads++>=J){let t=this.length==e?this:this.slice(0,e);return n=V.keyMap?Function("r","return {"+t.map(e=>V.decodeKey(e)).map(e=>q.test(e)?Q(e)+":r()":"["+JSON.stringify(e)+"]:r()").join(",")+"}"):Function("r","return {"+t.map(e=>q.test(e)?Q(e)+":r()":"["+JSON.stringify(e)+"]:r()").join(",")+"}"),this.compiledReader&&(n.next=this.compiledReader// if there is an existing one, we store multiple readers as a linked list because it is usually pretty rare to have multiple readers (of different length) for the same structure
),n.propertyCount=e,this.compiledReader=n,n(Z)}let r={};if(V.keyMap)for(let t=0;t<e;t++)r[Q(V.decodeKey(this[t]))]=Z();else for(let t=0;t<e;t++)r[Q(this[t])]=Z();return r}}function Q(e){return"__proto__"===e?"__proto_":e}let ee=et;function et(n){let r;if(n<16&&(r=er(n)))return r;if(n>64&&e)return e.decode(t.subarray(j,j+=n));let i=j+n,o=[];for(r="";j<i;){let e=t[j++];if((128&e)==0)o.push(e);else if((224&e)==192){// 2 bytes
let n=63&t[j++];o.push((31&e)<<6|n)}else if((240&e)==224){// 3 bytes
let n=63&t[j++],r=63&t[j++];o.push((31&e)<<12|n<<6|r)}else if((248&e)==240){// 4 bytes
let n=63&t[j++],r=63&t[j++],i=63&t[j++],s=(7&e)<<18|n<<12|r<<6|i;s>65535&&(s-=65536,o.push(s>>>10&1023|55296),s=56320|1023&s),o.push(s)}else o.push(e);o.length>=4096&&(r+=en.apply(String,o),o.length=0)}return o.length>0&&(r+=en.apply(String,o)),r}let en=String.fromCharCode;function er(e){if(e<4){if(e<2){if(0===e)return"";{let e=t[j++];if((128&e)>1){j-=1;return}return en(e)}}{let n=t[j++],r=t[j++];if((128&n)>0||(128&r)>0){j-=2;return}if(e<3)return en(n,r);let i=t[j++];if((128&i)>0){j-=3;return}return en(n,r,i)}}{let n=t[j++],r=t[j++],i=t[j++],o=t[j++];if((128&n)>0||(128&r)>0||(128&i)>0||(128&o)>0){j-=4;return}if(e<6){if(4===e)return en(n,r,i,o);{let e=t[j++];if((128&e)>0){j-=5;return}return en(n,r,i,o,e)}}if(e<8){let s=t[j++],a=t[j++];if((128&s)>0||(128&a)>0){j-=6;return}if(e<7)return en(n,r,i,o,s,a);let l=t[j++];if((128&l)>0){j-=7;return}return en(n,r,i,o,s,a,l)}{let s=t[j++],a=t[j++],l=t[j++],c=t[j++];if((128&s)>0||(128&a)>0||(128&l)>0||(128&c)>0){j-=8;return}if(e<10){if(8===e)return en(n,r,i,o,s,a,l,c);{let e=t[j++];if((128&e)>0){j-=9;return}return en(n,r,i,o,s,a,l,c,e)}}if(e<12){let u=t[j++],f=t[j++];if((128&u)>0||(128&f)>0){j-=10;return}if(e<11)return en(n,r,i,o,s,a,l,c,u,f);let d=t[j++];if((128&d)>0){j-=11;return}return en(n,r,i,o,s,a,l,c,u,f,d)}{let u=t[j++],f=t[j++],d=t[j++],h=t[j++];if((128&u)>0||(128&f)>0||(128&d)>0||(128&h)>0){j-=12;return}if(e<14){if(12===e)return en(n,r,i,o,s,a,l,c,u,f,d,h);{let e=t[j++];if((128&e)>0){j-=13;return}return en(n,r,i,o,s,a,l,c,u,f,d,h,e)}}{let p=t[j++],y=t[j++];if((128&p)>0||(128&y)>0){j-=14;return}if(e<15)return en(n,r,i,o,s,a,l,c,u,f,d,h,p,y);let g=t[j++];if((128&g)>0){j-=15;return}return en(n,r,i,o,s,a,l,c,u,f,d,h,p,y,g)}}}}}let ei=new Float32Array(1),eo=new Uint8Array(ei.buffer,0,4);class es{constructor(e,t){this.value=e,this.tag=t}}W[0]=e=>new Date(e),W[1]=e=>new Date(Math.round(1e3*e)),W[2]=e=>{// bigint extension
let t=BigInt(0);for(let n=0,r=e.byteLength;n<r;n++)t=BigInt(e[n])+t<<BigInt(8);return t},W[3]=e=>BigInt(-1)-W[2](e),W[4]=e=>+(e[1]+"e"+e[0]),W[5]=e=>e[1]*Math.exp(e[0]*Math.log(2));// the registration of the record definition extension
let ea=(e,t)=>{let n=r[e-=57344];n&&n.isShared&&((r.restoreStructures||(r.restoreStructures=[]))[e]=n),r[e]=t,t.read=G(t)};W[105]=e=>{let t=e.length,n=e[1];ea(e[0],n);let r={};for(let i=2;i<t;i++)r[Q(n[i-2])]=e[i];return r},W[14]=e=>o?o[0].slice(o.position0,o.position0+=e):new es(e,14),W[15]=e=>o?o[1].slice(o.position1,o.position1+=e):new es(e,15);let el={Error:Error,RegExp:RegExp};W[27]=e=>(el[e[0]]||Error)(e[1],e[2]);let ec=e=>{if(132!=t[j++])throw Error("Packed values structure must be followed by a 4 element array");let n=e()// packed values
;return(a=a?n.concat(a.slice(n.length)):n).prefixes=e(),a.suffixes=e(),e()// read the rump
};function eu(e,t){return"string"==typeof e?e+t:e instanceof Array?e.concat(t):Object.assign({},e,t)}function ef(){if(!a){if(V.getShared)eg();else throw Error("No packed values available")}return a}ec.handlesRead=!0,W[51]=ec,W[6]=e=>{if(!a){if(!V.getShared)return new es(e,6);eg()}if("number"==typeof e)return a[16+(e>=0?2*e:-2*e-1)];throw Error("No support for non-integer packed references yet")},// The following code is an incomplete implementation of http://cbor.schmorp.de/stringref
// the real thing would need to implemennt more logic to populate the stringRefs table and
// maintain a stack of stringRef "namespaces".
//
// currentExtensions[25] = (id) => {
// 	return stringRefs[id]
// }
// currentExtensions[256] = (read) => {
// 	stringRefs = []
// 	try {
// 		return read()
// 	} finally {
// 		stringRefs = null
// 	}
// }
// currentExtensions[256].handlesRead = true
W[28]=e=>{let n;s||((s=new Map).id=0);let r=s.id++,i={target:n=t[j]>>5==4?[]:{}}// a placeholder object
;s.set(r,i);let o=e()// read the next value as the target object to id
;return i.used?Object.assign(n,o):(i.target=o// the placeholder wasn't used, replace with the deserialized one
,o// no cycle, can just use the returned read object
)},W[28].handlesRead=!0,W[29]=e=>{// sharedref http://cbor.schmorp.de/value-sharing (for structured clones)
let t=s.get(e);return t.used=!0,t.target},W[258]=e=>new Set(e),(W[259]=e=>(V.mapsAsObjects&&(V.mapsAsObjects=!1,c=!0),e())).handlesRead=!0,z.push((e,t)=>e>=225&&e<=255?eu(ef().prefixes[e-224],t):e>=28704&&e<=32767?eu(ef().prefixes[e-28672],t):e>=1879052288&&e<=2147483647?eu(ef().prefixes[e-1879048192],t):e>=216&&e<=223?eu(t,ef().suffixes[e-216]):e>=27647&&e<=28671?eu(t,ef().suffixes[e-27639]):e>=1811940352&&e<=1879048191?eu(t,ef().suffixes[e-1811939328]):1399353956// ascii 'Shrd'
    ==e?{packedValues:a,structures:r.slice(0),version:t}:55799==e?t:void 0);let ed=1==new Uint8Array(new Uint16Array([1]).buffer)[0],eh=[Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,"undefined"==typeof BigUint64Array?{name:"BigUint64Array"}:BigUint64Array,Int8Array,Int16Array,Int32Array,"undefined"==typeof BigInt64Array?{name:"BigInt64Array"}:BigInt64Array,Float32Array,Float64Array],ep=[64,68,69,70,71,72,77,78,79,85,86];for(let e=0;e<eh.length;e++)!function(e,t){let n,r="get"+e.name.slice(0,-5);"function"==typeof e?n=e.BYTES_PER_ELEMENT:e=null;for(let i=0;i<2;i++){if(!i&&1==n)continue;let o=2==n?1:4==n?2:3;W[i?t:t-4]=1==n||i==ed?n=>{if(!e)throw Error("Could not find typed array for code "+t);// we have to always slice/copy here to get a new ArrayBuffer that is word/byte aligned
return new e(Uint8Array.prototype.slice.call(n,0).buffer)}:n=>{if(!e)throw Error("Could not find typed array for code "+t);let s=new DataView(n.buffer,n.byteOffset,n.byteLength),a=n.length>>o,l=new e(a),c=s[r];for(let e=0;e<a;e++)l[e]=c.call(s,e<<o,i);return l}}}(eh[e],ep[e]);function ey(){let e=31&t[j++];if(e>23)switch(e){case 24:e=t[j++];break;case 25:e=l.getUint16(j),j+=2;break;case 26:e=l.getUint32(j),j+=4}return e}function eg(){if(V.getShared){let e=eb(()=>(// save the state in case getShared modifies our buffer
    t=null,V.getShared()))||{},n=e.structures||[];V.sharedVersion=e.version,a=V.sharedValues=e.packedValues,!0===r?V.structures=r=n:r.splice.apply(r,[0,n.length].concat(n))}}function eb(e){let a=n,c=j,u=P,f=N,d=K,h=i,p=L,y=s,g=o,b=new Uint8Array(t.slice(0,n))// we copy the data in case it changes while external data is processed
,m=r,w=V,_=H,v=e();return n=a,j=c,P=u,N=f,K=d,i=h,L=p,s=y,o=g,t=b,H=_,r=m,V=w,l=new DataView(t.buffer,t.byteOffset,t.byteLength),v}function em(){t=null,s=null,r=null}let ew=Array(147)// this is a table matching binary exponents to the multiplier to determine significant digit rounding
;for(let e=0;e<256;e++)ew[e]=+("1e"+Math.floor(45.15-.30103*e));let e_=new Y({useRecords:!1});e_.decode,e_.decodeMultiple;try{u=new TextEncoder}catch(e){}let ev="object"==typeof globalThis&&globalThis.Buffer,eA=void 0!==ev,eC=eA?ev.allocUnsafeSlow:Uint8Array,eE=eA?ev:Uint8Array,ek=eA?4294967296:2144337920,eS=0,eO=null,eI=/[\u0080-\uFFFF]/,eU=Symbol("record-id");class eM extends Y{constructor(e){let t,n,r,i,o,s;super(e),this.offset=0,e=e||{};let a=eE.prototype.utf8Write?function(e,t,n){return p.utf8Write(e,t,n)}:!!u&&!!u.encodeInto&&function(e,t){return u.encodeInto(e,p.subarray(t)).written},l=this,c=e.structures||e.saveStructures,b=e.maxSharedStructures;if(null==b&&(b=c?128:0),b>8190)throw Error("Maximum maxSharedStructure is 8190");let m=e.sequential;m&&(b=0),this.structures||(this.structures=[]),this.saveStructures&&(this.saveShared=this.saveStructures);let w,_,v=e.sharedValues;if(v){s=Object.create(null);for(let e=0,t=v.length;e<t;e++)s[v[e]]=e}let A=[],C=0,E=0;this.mapEncode=function(e,t){return this._keyMap&&!this._mapped&&"Array"===e.constructor.name&&(e=e.map(e=>this.encodeKeys(e))),this.encode(e,t)},this.encode=function(a,c){if(p||(p=new eC(8192),y=new DataView(p.buffer,0,8192),eS=0),(g=p.length-10)-eS<2048?(// don't start too close to the end, 
p=new eC(p.length),y=new DataView(p.buffer,0,p.length),g=p.length-10,eS=0):c===e$&&(eS=eS+7&2147483640// Word align to make any future copying of this buffer faster
),t=eS,l.useSelfDescribedHeader&&(y.setUint32(eS,3654940416)// tag two byte, then self-descriptive tag
,eS+=3),o=l.structuredClone?new Map:null,l.bundleStrings&&"string"!=typeof a?(eO=[]).size=1/0// force a new bundle start on first string
:eO=null,n=l.structures){if(n.uninitialized){let e=l.getShared()||{};l.structures=n=e.structures||[],l.sharedVersion=e.version;let t=l.sharedValues=e.packedValues;if(t){s={};for(let e=0,n=t.length;e<n;e++)s[t[e]]=e}}let e=n.length;if(e>b&&!m&&(e=b),!n.transitions){// rebuild our structure transitions
n.transitions=Object.create(null);for(let t=0;t<e;t++){let e=n[t];//console.log('shared struct keys:', keys)
if(!e)continue;let r,i=n.transitions;for(let n=0,o=e.length;n<o;n++){void 0===i[eU]&&(i[eU]=t);let o=e[n];(r=i[o])||(r=i[o]=Object.create(null)),i=r}i[eU]=1048576|t}}m||(n.nextId=e)}if(r&&(r=!1),i=n||[],_=s,e.pack){let t=new Map;if(t.values=[],t.encoder=l,t.maxValues=e.maxPrivatePackedValues||(s?16:1/0),t.objectMap=s||!1,t.samplingPackedValues=w,function e(t,n){switch(typeof t){case"string":if(t.length>3){if(n.objectMap[t]>-1||n.values.length>=n.maxValues)return;let e=n.get(t);if(e)2==++e.count&&n.values.push(t);else if(n.set(t,{count:1}),n.samplingPackedValues){let e=n.samplingPackedValues.get(t);e?e.count++:n.samplingPackedValues.set(t,{count:1})}}break;case"object":if(t){if(t instanceof Array)for(let r=0,i=t.length;r<i;r++)e(t[r],n);else{let i=!n.encoder.useRecords;for(var r in t)t.hasOwnProperty(r)&&(i&&e(r,n),e(t[r],n))}}break;case"function":console.log(t)}}(a,t),t.values.length>0){p[eS++]=216// one-byte tag
,p[eS++]=51// tag 51 for packed shared structures https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
,eD(4);let e=t.values;k(e),eD(0)// prefixes
,eD(0)// suffixes
,_=Object.create(s||null);for(let t=0,n=e.length;t<n;t++)_[e[t]]=t}}h=c&eJ;try{if(h)return;if(k(a),eO&&eP(t,k),l.offset=eS// update the offset so next serialization doesn't write over our buffer, but can continue writing to same buffer sequentially
,o&&o.idsToInsert){(eS+=2*o.idsToInsert.length)>g&&O(eS),l.offset=eS;let e=function(e,t){let n;let r=2*t.length,i=e.length-r;t.sort((e,t)=>e.offset>t.offset?1:-1);for(let n=0;n<t.length;n++){let r=t[n];for(let t of(r.id=n,r.references))e[t++]=n>>8,e[t]=255&n}for(;n=t.pop();){let t=n.offset;e.copyWithin(t+r,t,i);let o=t+(r-=2);e[o++]=216,e[o++]=28// http://cbor.schmorp.de/value-sharing
,i=t}return e}(p.subarray(t,eS),o.idsToInsert);return o=null,e}if(c&e$)return p.start=t,p.end=eS,p;return p.subarray(t,eS)// position can change if we call encode again in saveShared, so we get the buffer now
}finally{if(n){if(E<10&&E++,n.length>b&&(n.length=b),C>1e4)// force a rebuild occasionally after a lot of transitions so it can get cleaned up
n.transitions=null,E=0,C=0,A.length>0&&(A=[]);else if(A.length>0&&!m){for(let e=0,t=A.length;e<t;e++)A[e][eU]=void 0;A=[];//sharedStructures.nextId = maxSharedStructures
}}if(r&&l.saveShared){l.structures.length>b&&(l.structures=l.structures.slice(0,b));// we can't rely on start/end with REUSE_BUFFER_MODE since they will (probably) change when we save
let e=p.subarray(t,eS);if(!1===l.updateSharedData())return l.encode(a)// re-encode if it fails
;return e}c&eH&&(eS=t)}},this.findCommonStringsToPack=()=>(w=new Map,s||(s=Object.create(null)),e=>{let t=e&&e.threshold||4,n=this.pack?e.maxPrivatePackedValues||16:0;for(let[e,i]of(v||(v=this.sharedValues=[]),w))i.count>t&&(s[e]=n++,v.push(e),r=!0);for(;this.saveShared&&!1===this.updateSharedData(););w=null});let k=n=>{eS>g&&(p=O(eS));var r,i=typeof n;if("string"===i){let i;if(_){let t=_[n];if(t>=0){t<16?p[eS++]=t+224// simple values, defined in https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
:(p[eS++]=198// tag 6 defined in https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
,1&t?k(15-t>>1):k(t-16>>1));return;/*						} else if (packedStatus.serializationId != serializationId) {
							packedStatus.serializationId = serializationId
							packedStatus.count = 1
							if (options.sharedPack) {
								let sharedCount = packedStatus.sharedCount = (packedStatus.sharedCount || 0) + 1
								if (shareCount > (options.sharedPack.threshold || 5)) {
									let sharedPosition = packedStatus.position = packedStatus.nextSharedPosition
									hasSharedUpdate = true
									if (sharedPosition < 16)
										target[position++] = sharedPosition + 0xc0

								}
							}
						} // else any in-doc incrementation?*/}if(w&&!e.pack){let e=w.get(n);e?e.count++:w.set(n,{count:1})}}let o=n.length;if(eO&&o>=4&&o<1024){if((eO.size+=o)>61440){let e;let n=(eO[0]?3*eO[0].length+eO[1].length:0)+10;eS+n>g&&(p=O(eS+n)),p[eS++]=217// tag 16-bit
,p[eS++]=223// tag 0xdff9
,p[eS++]=249,// TODO: If we only have one bundle with any string data, only write one string bundle
p[eS++]=eO.position?132:130// array of 4 or 2 elements depending on if we write bundles
,p[eS++]=26// 32-bit unsigned int
,e=eS-t,eS+=4// reserve for writing bundle reference
,eO.position&&eP(t,k)// write the last bundles
,(eO=["",""]// create new ones
).size=0,eO.position=e}let e=eI.test(n);eO[e?0:1]+=n,p[eS++]=e?206:207,k(o);return}i=o<32?1:o<256?2:o<65536?3:5;let s=3*o;if(eS+s>g&&(p=O(eS+s)),o<64||!a){let e,t,s,a=eS+i;for(e=0;e<o;e++)(t=n.charCodeAt(e))<128?p[a++]=t:(t<2048?p[a++]=t>>6|192:((64512&t)==55296&&(64512&(s=n.charCodeAt(e+1)))==56320?(t=65536+((1023&t)<<10)+(1023&s),e++,p[a++]=t>>18|240,p[a++]=t>>12&63|128):p[a++]=t>>12|224,p[a++]=t>>6&63|128),p[a++]=63&t|128);r=a-eS-i}else r=a(n,eS+i,s);r<24?p[eS++]=96|r:r<256?(i<2&&p.copyWithin(eS+2,eS+1,eS+1+r),p[eS++]=120,p[eS++]=r):r<65536?(i<3&&p.copyWithin(eS+3,eS+2,eS+2+r),p[eS++]=121,p[eS++]=r>>8,p[eS++]=255&r):(i<5&&p.copyWithin(eS+5,eS+3,eS+3+r),p[eS++]=122,y.setUint32(eS,r),eS+=4),eS+=r}else if("number"===i){if(this.alwaysUseFloat||n>>>0!==n){if(this.alwaysUseFloat||n>>0!==n){let e;if((e=this.useFloat32)>0&&n<4294967296&&n>=-2147483648){let t;if(p[eS++]=250,y.setFloat32(eS,n),e<4||(t=n*ew[(127&p[eS])<<1|p[eS+1]>>7])>>0===t){eS+=4;return}eS--// move back into position for writing a double
}p[eS++]=251,y.setFloat64(eS,n),eS+=8}else n>=-24?p[eS++]=31-n:n>=-256?(p[eS++]=56,p[eS++]=~n):n>=-65536?(p[eS++]=57,y.setUint16(eS,~n),eS+=2):(p[eS++]=58,y.setUint32(eS,~n),eS+=4)}else // positive uint
n<24?p[eS++]=n:n<256?(p[eS++]=24,p[eS++]=n):n<65536?(p[eS++]=25,p[eS++]=n>>8,p[eS++]=255&n):(p[eS++]=26,y.setUint32(eS,n),eS+=4)}else if("object"===i){if(n){if(o){let e=o.get(n);if(e){if(p[eS++]=216,p[eS++]=29// http://cbor.schmorp.de/value-sharing
,p[eS++]=25// 16-bit uint
,!e.references){let t=o.idsToInsert||(o.idsToInsert=[]);e.references=[],t.push(e)}e.references.push(eS-t),eS+=2// TODO: also support 32-bit
;return}o.set(n,{offset:eS-t})}let e=n.constructor;if(e===Object)S(n,!0);else if(e===Array){(r=n.length)<24?p[eS++]=128|r:eD(r);for(let e=0;e<r;e++)k(n[e])}else if(e===Map){if((this.mapsAsObjects?!1!==this.useTag259ForMaps:this.useTag259ForMaps)&&(// use Tag 259 (https://github.com/shanewholloway/js-cbor-codec/blob/master/docs/CBOR-259-spec--explicit-maps.md) for maps if the user wants it that way
p[eS++]=217,p[eS++]=1,p[eS++]=3),(r=n.size)<24?p[eS++]=160|r:r<256?(p[eS++]=184,p[eS++]=r):r<65536?(p[eS++]=185,p[eS++]=r>>8,p[eS++]=255&r):(p[eS++]=186,y.setUint32(eS,r),eS+=4),l.keyMap)for(let[e,t]of n)k(l.encodeKey(e)),k(t);else for(let[e,t]of n)k(e),k(t)}else{for(let e=0,t=f.length;e<t;e++)if(n instanceof d[e]){let t=f[e],r=t.tag;void 0==r&&(r=t.getTag&&t.getTag.call(this,n)),r<24?p[eS++]=192|r:r<256?(p[eS++]=216,p[eS++]=r):r<65536?(p[eS++]=217,p[eS++]=r>>8,p[eS++]=255&r):r>-1&&(p[eS++]=218,y.setUint32(eS,r),eS+=4),t.encode.call(this,n,k,O);return}if(n[Symbol.iterator]){if(h){let e=Error("Iterable should be serialized as iterator");throw e.iteratorNotHandled=!0,e}for(let e of(p[eS++]=159// indefinite length array
,n))k(e);p[eS++]=255// stop-code
;return}if(n[Symbol.asyncIterator]||ej(n)){let e=Error("Iterable/blob should be serialized as iterator");throw e.iteratorNotHandled=!0,e}if(this.useToJSON&&n.toJSON){let e=n.toJSON();// if for some reason value.toJSON returns itself it'll loop forever
if(e!==n)return k(e)}// no extension found, write as object
S(n,!n.hasOwnProperty)// if it doesn't have hasOwnProperty, don't do hasOwnProperty checks
}}else p[eS++]=246}else if("boolean"===i)p[eS++]=n?245:244;else if("bigint"===i){if(n<BigInt(1)<<BigInt(64)&&n>=0)// use an unsigned int as long as it fits
p[eS++]=27,y.setBigUint64(eS,n);else if(n>-(BigInt(1)<<BigInt(64))&&n<0)// if we can fit an unsigned int, use that
p[eS++]=59,y.setBigUint64(eS,-n-BigInt(1));else // overflow
if(this.largeBigIntToFloat)p[eS++]=251,y.setFloat64(eS,Number(n));else throw RangeError(n+" was too large to fit in CBOR 64-bit integer format, set largeBigIntToFloat to convert to float-64");eS+=8}else if("undefined"===i)p[eS++]=247;else throw Error("Unknown type: "+i)},S=!1===this.useRecords?this.variableMapSize?e=>{// this method is slightly slower, but generates "preferred serialization" (optimally small for smaller objects)
let t=Object.keys(e),n=Object.values(e),r=t.length;if(r<24?p[eS++]=160|r:r<256?(p[eS++]=184,p[eS++]=r):r<65536?(p[eS++]=185,p[eS++]=r>>8,p[eS++]=255&r):(p[eS++]=186,y.setUint32(eS,r),eS+=4),l.keyMap)for(let e=0;e<r;e++)k(l.encodeKey(t[e])),k(n[e]);else for(let e=0;e<r;e++)k(t[e]),k(n[e])}:(e,n)=>{p[eS++]=185// always use map 16, so we can preallocate and set the length afterwards
;let r=eS-t;eS+=2;let i=0;if(l.keyMap)for(let t in e)(n||e.hasOwnProperty(t))&&(k(l.encodeKey(t)),k(e[t]),i++);else for(let t in e)(n||e.hasOwnProperty(t))&&(k(t),k(e[t]),i++);p[r+++t]=i>>8,p[r+t]=255&i}:(e,t)=>{let n,o,s,a=i.transitions||(i.transitions=Object.create(null)),l=0,c=0;if(this.keyMap){c=(o=Object.keys(e).map(e=>this.encodeKey(e))).length;for(let e=0;e<c;e++){let t=o[e];!(s=a[t])&&(s=a[t]=Object.create(null),l++),a=s}}else for(let r in e)(t||e.hasOwnProperty(r))&&(!(s=a[r])&&(1048576&a[eU]&&(n=65535&a[eU]),s=a[r]=Object.create(null),l++),a=s,c++);let u=a[eU];if(void 0!==u)u&=65535,p[eS++]=217,p[eS++]=u>>8|224,p[eS++]=255&u;else if(o||(o=a.__keys__||(a.__keys__=Object.keys(e))),void 0===n?((u=i.nextId++)||(u=0,i.nextId=1),u>=256&&(i.nextId=(u=b)+1)):u=n,i[u]=o,u<b){p[eS++]=217,p[eS++]=u>>8|224,p[eS++]=255&u,a=i.transitions;for(let e=0;e<c;e++)(void 0===a[eU]||1048576&a[eU])&&(a[eU]=u),a=a[o[e]];a[eU]=1048576// indicates it is a extendable terminal
|u,r=!0}else{if(a[eU]=u,y.setUint32(eS,3655335680)// tag two byte, then record definition id
,eS+=3,l&&(C+=E*l),A.length>=256-b&&(A.shift()[eU]=void 0// we are cycling back through, and have to remove old ones
),A.push(a),eD(c+2),k(57344+u),k(o),null===t)return;// special exit for iterator
for(let n in e)(t||e.hasOwnProperty(n))&&k(e[n]);return}if(c<24?p[eS++]=128|c:eD(c),null!==t)for(let n in e)(t||e.hasOwnProperty(n))&&k(e[n]);// special exit for iterator
},O=e=>{let n;if(e>16777216){// special handling for really large buffers
if(e-t>ek)throw Error("Encoded buffer would be larger than maximum buffer size");n=Math.min(ek,4096*Math.round(Math.max((e-t)*(e>67108864?1.25:2),4194304)/4096))}else n=(Math.max(e-t<<2,p.length-1)>>12)+1<<12;let r=new eC(n);return y=new DataView(r.buffer,0,n),p.copy?p.copy(r,0,t,e):r.set(p.slice(t,e)),eS-=t,t=0,g=r.length-10,p=r},I=100,U=1e3;function*M(e,n,r){let i=e.constructor;if(i===Object){let t=!1!==l.useRecords;for(let r in t?S(e,null):eR(Object.keys(e).length,160),e){let i=e[r];t||k(r),i&&"object"==typeof i?n[r]?yield*M(i,n[r]):yield*R(i,n,r):k(i)}}else if(i===Array){let r=e.length;eD(r);for(let i=0;i<r;i++){let r=e[i];r&&("object"==typeof r||eS-t>I)?n.element?yield*M(r,n.element):yield*R(r,n,"element"):k(r)}}else if(e[Symbol.iterator]){for(let r of(p[eS++]=159,e))r&&("object"==typeof r||eS-t>I)?n.element?yield*M(r,n.element):yield*R(r,n,"element"):k(r);p[eS++]=255}else ej(e)?(eR(e.size,64),yield p.subarray(t,eS),yield e,T()):e[Symbol.asyncIterator]?(p[eS++]=159,yield p.subarray(t,eS),yield e,T(),p[eS++]=255):k(e);r&&eS>t?yield p.subarray(t,eS):eS-t>I&&(yield p.subarray(t,eS),T())}function*R(e,n,r){let i=eS-t;try{k(e),eS-t>I&&(yield p.subarray(t,eS),T())}catch(o){if(o.iteratorNotHandled)n[r]={},eS=t+i,yield*M.call(this,e,n[r]);else throw o}}function T(){I=U,l.encode(null,eJ)}function D(e,t,n){return(I=t&&t.chunkThreshold?U=t.chunkThreshold:100,e&&"object"==typeof e)?(l.encode(null,eJ),n(e,l.iterateProperties||(l.iterateProperties={}),!0)):[l.encode(e)]}async function*x(e,t){for(let n of M(e,t,!0)){let e=n.constructor;if(e===eE||e===Uint8Array)yield n;else if(ej(n)){let e,t=n.stream().getReader();for(;!(e=await t.read()).done;)yield e.value}else if(n[Symbol.asyncIterator])for await(let e of n)T(),e?yield*x(e,t.async||(t.async={})):yield l.encode(e);else yield n}}this.encodeAsIterable=function(e,t){return D(e,t,M)},this.encodeAsAsyncIterable=function(e,t){return D(e,t,x)}}useBuffer(e){// this means we are finished using our own buffer and we can write over it safely
p=e,y=new DataView(p.buffer,p.byteOffset,p.byteLength),eS=0}clearSharedData(){this.structures&&(this.structures=[]),this.sharedValues&&(this.sharedValues=void 0)}updateSharedData(){let e=this.sharedVersion||0;this.sharedVersion=e+1;let t=this.structures.slice(0),n=new eT(t,this.sharedValues,this.sharedVersion),r=this.saveShared(n,t=>(t&&t.version||0)==e);// saveShared may fail to write and reload, or may have reloaded to check compatibility and overwrite saved data, either way load the correct shared data
return!1===r?(// get updated structures and try again if the update failed
n=this.getShared()||{},this.structures=n.structures||[],this.sharedValues=n.packedValues,this.sharedVersion=n.version,this.structures.nextId=this.structures.length):t.forEach((e,t)=>this.structures[t]=e),r}}function eR(e,t){e<24?p[eS++]=t|e:e<256?(p[eS++]=24|t,p[eS++]=e):e<65536?(p[eS++]=25|t,p[eS++]=e>>8,p[eS++]=255&e):(p[eS++]=26|t,y.setUint32(eS,e),eS+=4)}class eT{constructor(e,t,n){this.structures=e,this.packedValues=t,this.version=n}}function eD(e){e<24?p[eS++]=128|e:e<256?(p[eS++]=152,p[eS++]=e):e<65536?(p[eS++]=153,p[eS++]=e>>8,p[eS++]=255&e):(p[eS++]=154,y.setUint32(eS,e),eS+=4)}let ex="undefined"==typeof Blob?function(){}:Blob;function ej(e){if(e instanceof ex)return!0;let t=e[Symbol.toStringTag];return"Blob"===t||"File"===t}let eF=1==new Uint8Array(new Uint16Array([1]).buffer)[0];function eB(e,t){return!eF&&t>1&&(e-=4// the big endian equivalents are 4 less
),{tag:e,encode:function(e,t){let n=e.byteLength,r=e.byteOffset||0,i=e.buffer||e;t(eA?ev.from(i,r,n):new Uint8Array(i,r,n))}}}function eL(e,t){let n=e.byteLength;n<24?p[eS++]=64+n:n<256?(p[eS++]=88,p[eS++]=n):n<65536?(p[eS++]=89,p[eS++]=n>>8,p[eS++]=255&n):(p[eS++]=90,y.setUint32(eS,n),eS+=4),eS+n>=p.length&&t(eS+n),// if it is already a typed array (has an ArrayBuffer), use that, but if it is an ArrayBuffer itself,
// must wrap it to set it.
p.set(e.buffer?e:new Uint8Array(e),eS),eS+=n}function eP(e,t){y.setUint32(eO.position+e,eS-eO.position-e+1)// the offset to bundle
;let n=eO;eO=null,t(n[0]),t(n[1])}d=[Date,Set,Error,RegExp,es,ArrayBuffer,Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,"undefined"==typeof BigUint64Array?function(){}:BigUint64Array,Int8Array,Int16Array,Int32Array,"undefined"==typeof BigInt64Array?function(){}:BigInt64Array,Float32Array,Float64Array,eT],//Object.getPrototypeOf(Uint8Array.prototype).constructor /*TypedArray*/
f=[{tag:1,encode(e,t){let n=e.getTime()/1e3;(this.useTimestamp32||0===e.getMilliseconds())&&n>=0&&n<4294967296?(// Timestamp 32
p[eS++]=26,y.setUint32(eS,n),eS+=4):(// Timestamp float64
p[eS++]=251,y.setFloat64(eS,n),eS+=8)}},{tag:258,encode(e,t){t(Array.from(e))}},{tag:27,encode(e,t){t([e.name,e.message])}},{tag:27,encode(e,t){t(["RegExp",e.source,e.flags])}},{getTag:e=>e.tag,encode(e,t){t(e.value)}},{encode(e,t,n){eL(e,n)}},{getTag(e){if(e.constructor===Uint8Array&&(this.tagUint8Array||eA&&!1!==this.tagUint8Array))return 64;// else no tag
},encode(e,t,n){eL(e,n)}},eB(68,1),eB(69,2),eB(70,4),eB(71,8),eB(72,1),eB(77,2),eB(78,4),eB(79,8),eB(85,4),eB(86,8),{encode(e,t){let n=e.packedValues||[],r=e.structures||[];if(n.values.length>0){p[eS++]=216// one-byte tag
,p[eS++]=51// tag 51 for packed shared structures https://www.potaroo.net/ietf/ids/draft-ietf-cbor-packed-03.txt
,eD(4);let e=n.values;t(e),eD(0)// prefixes
,eD(0)// suffixes
,packedObjectMap=Object.create(sharedPackedObjectMap||null);for(let t=0,n=e.length;t<n;t++)packedObjectMap[e[t]]=t}if(r){y.setUint32(eS,3655335424),eS+=3;let n=r.slice(0);n.unshift(57344),n.push(new es(e.version,1399353956)),t(n)}else t(new es(e.version,1399353956))}}];let eV=new eM({useRecords:!1});eV.encode,eV.encodeAsIterable,eV.encodeAsAsyncIterable;let{NEVER:eN,ALWAYS:eK,DECIMAL_ROUND:eW,DECIMAL_FIT:ez}={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4},e$=512,eH=1024,eJ=2048;D.Buffer,(b=k||(k={}))[b./**
	 * Prints no logs.
	 */Disabled=0]="Disabled",b[b./**
	 * Prints only errors.
	 */Errors=1]="Errors",b[b./**
	 * Prints errors and warnings.
	 */Warnings=2]="Warnings",b[b./**
	 * Prints all logs.
	 */All=3]="All";var eY=new class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=k.All&&this._print(k.All,...e)}warn(...e){this._logLevel>=k.Warnings&&this._print(k.Warnings,...e)}error(...e){this._logLevel>=k.Errors&&this._print(k.Errors,...e)}setLogFunction(e){this._print=e}_print(e,...t){let n=["PeerJS: ",...t];for(let e in n)n[e]instanceof Error&&(n[e]="("+n[e].name+") "+n[e].message);e>=k.All?console.log(...n):e>=k.Warnings?console.warn("WARNING",...n):e>=k.Errors&&console.error("ERROR",...n)}constructor(){this._logLevel=k.Disabled}};(m=S||(S={})).Data="data",m.Media="media",(w=O||(O={}))./**
	 * The client's browser does not support some or all WebRTC features that you are trying to use.
	 */BrowserIncompatible="browser-incompatible",w./**
	 * You've already disconnected this peer from the server and can no longer make any new connections on it.
	 */Disconnected="disconnected",w./**
	 * The ID passed into the Peer constructor contains illegal characters.
	 */InvalidID="invalid-id",w./**
	 * The API key passed into the Peer constructor contains illegal characters or is not in the system (cloud server only).
	 */InvalidKey="invalid-key",w./**
	 * Lost or cannot establish a connection to the signalling server.
	 */Network="network",w./**
	 * The peer you're trying to connect to does not exist.
	 */PeerUnavailable="peer-unavailable",w./**
	 * PeerJS is being used securely, but the cloud server does not support SSL. Use a custom PeerServer.
	 */SslUnavailable="ssl-unavailable",w./**
	 * Unable to reach the server.
	 */ServerError="server-error",w./**
	 * An error from the underlying socket.
	 */SocketError="socket-error",w./**
	 * The underlying socket closed unexpectedly.
	 */SocketClosed="socket-closed",w./**
	 * The ID passed into the Peer constructor is already taken.
	 *
	 * :::caution
	 * This error is not fatal if your peer has open peer-to-peer connections.
	 * This can happen if you attempt to {@apilink Peer.reconnect} a peer that has been disconnected from the server,
	 * but its old ID has now been taken.
	 * :::
	 */UnavailableID="unavailable-id",w./**
	 * Native WebRTC errors.
	 */WebRTC="webrtc",(_=I||(I={})).NegotiationFailed="negotiation-failed",_.ConnectionClosed="connection-closed",(v=U||(U={})).NotOpenYet="not-open-yet",v.MessageToBig="message-too-big",(A=M||(M={})).Binary="binary",A.BinaryUTF8="binary-utf8",A.JSON="json",A.None="raw",(C=R||(R={})).Message="message",C.Disconnected="disconnected",C.Error="error",C.Close="close",(E=T||(T={})).Heartbeat="HEARTBEAT",E.Candidate="CANDIDATE",E.Offer="OFFER",E.Answer="ANSWER",E.Open="OPEN",E.Error="ERROR",E.IdTaken="ID-TAKEN",E.InvalidKey="INVALID-KEY",E.Leave="LEAVE",E.Expire="EXPIRE";class eX{constructor(e){this.connection=e}/** Returns a PeerConnection object set up correctly (for data, media). */startConnection(e){let t=this._startPeerConnection();// What do we need to do now?
if(// Set the connection's PC.
this.connection.peerConnection=t,this.connection.type===S.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){let n=this.connection,r={ordered:!!e.reliable},i=t.createDataChannel(n.label,r);n._initializeDataChannel(i),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}/** Start a PC. */_startPeerConnection(){eY.log("Creating RTCPeerConnection.");let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}/** Set up various WebRTC listeners. */_setupListeners(e){let t=this.connection.peer,n=this.connection.connectionId,r=this.connection.type,i=this.connection.provider;eY.log("Listening for ICE candidates."),e.onicecandidate=e=>{e.candidate&&e.candidate.candidate&&(eY.log(`Received ICE candidates for ${t}:`,e.candidate),i.socket.send({type:T.Candidate,payload:{candidate:e.candidate,type:r,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":eY.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(I.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":eY.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(I.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":eY.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{}}this.connection.emit("iceStateChanged",e.iceConnectionState)},eY.log("Listening for data channel"),// Fired between offer and answer, so options should already be saved
// in the options hash.
e.ondatachannel=e=>{eY.log("Received data channel");let r=e.channel,o=i.getConnection(t,n);o._initializeDataChannel(r)},eY.log("Listening for remote stream"),e.ontrack=e=>{eY.log("Received remote stream");let r=e.streams[0],o=i.getConnection(t,n);o.type===S.Media&&this._addStreamToMediaConnection(r,o)}}cleanup(){eY.log("Cleaning up PeerConnection to "+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,//unsubscribe from all PeerConnection's events
e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let t="closed"!==e.signalingState,n=!1,r=this.connection.dataChannel;r&&(n=!!r.readyState&&"closed"!==r.readyState),(t||n)&&e.close()}async _makeOffer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);eY.log("Created offer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),eY.log("Set localDescription:",n,`for:${this.connection.peer}`);let r={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===S.Data){let e=this.connection;r={...r,label:e.label,reliable:e.reliable,serialization:e.serialization}}t.socket.send({type:T.Offer,payload:r,dst:this.connection.peer})}catch(e){// TODO: investigate why _makeOffer is being called from the answer
"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"!=e&&(t.emitError(O.WebRTC,e),eY.log("Failed to setLocalDescription, ",e))}}catch(e){t.emitError(O.WebRTC,e),eY.log("Failed to createOffer, ",e)}}async _makeAnswer(){let e=this.connection.peerConnection,t=this.connection.provider;try{let n=await e.createAnswer();eY.log("Created answer."),this.connection.options.sdpTransform&&"function"==typeof this.connection.options.sdpTransform&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),eY.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:T.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(e){t.emitError(O.WebRTC,e),eY.log("Failed to setLocalDescription, ",e)}}catch(e){t.emitError(O.WebRTC,e),eY.log("Failed to create answer, ",e)}}/** Handle an SDP. */async handleSDP(e,t){t=new RTCSessionDescription(t);let n=this.connection.peerConnection,r=this.connection.provider;eY.log("Setting remote description",t);try{await n.setRemoteDescription(t),eY.log(`Set remoteDescription:${e} for:${this.connection.peer}`),"OFFER"===e&&await this._makeAnswer()}catch(e){r.emitError(O.WebRTC,e),eY.log("Failed to setRemoteDescription, ",e)}}/** Handle a candidate. */async handleCandidate(e){eY.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),eY.log(`Added ICE candidate for:${this.connection.peer}`)}catch(e){this.connection.provider.emitError(O.WebRTC,e),eY.log("Failed to handleCandidate, ",e)}}_addTracksToConnection(e,t){if(eY.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return eY.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){eY.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}var eZ={},eq=Object.prototype.hasOwnProperty,eG="~";/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */function eQ(){}/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */function e2(e,t,n){this.fn=e,this.context=t,this.once=n||!1}/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */function e1(e,t,n,r,i){if("function"!=typeof n)throw TypeError("The listener must be a function");var o=new e2(n,r||e,i),s=eG?eG+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],o]:e._events[s].push(o):(e._events[s]=o,e._eventsCount++),e}/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */function e0(e,t){0==--e._eventsCount?e._events=new eQ:delete e._events[t]}/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */function e6(){this._events=new eQ,this._eventsCount=0}Object.create&&(eQ.prototype=Object.create(null),new eQ().__proto__||(eG=!1)),/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */e6.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)eq.call(e,t)&&n.push(eG?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */e6.prototype.listeners=function(e){var t=eG?eG+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,o=Array(i);r<i;r++)o[r]=n[r].fn;return o},/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */e6.prototype.listenerCount=function(e){var t=eG?eG+e:e,n=this._events[t];return n?n.fn?1:n.length:0},/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */e6.prototype.emit=function(e,t,n,r,i,o){var s=eG?eG+e:e;if(!this._events[s])return!1;var a,l,c=this._events[s],u=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),u){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,i),!0;case 6:return c.fn.call(c.context,t,n,r,i,o),!0}for(l=1,a=Array(u-1);l<u;l++)a[l-1]=arguments[l];c.fn.apply(c.context,a)}else{var f,d=c.length;for(l=0;l<d;l++)switch(c[l].once&&this.removeListener(e,c[l].fn,void 0,!0),u){case 1:c[l].fn.call(c[l].context);break;case 2:c[l].fn.call(c[l].context,t);break;case 3:c[l].fn.call(c[l].context,t,n);break;case 4:c[l].fn.call(c[l].context,t,n,r);break;default:if(!a)for(f=1,a=Array(u-1);f<u;f++)a[f-1]=arguments[f];c[l].fn.apply(c[l].context,a)}}return!0},/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */e6.prototype.on=function(e,t,n){return e1(this,e,t,n,!1)},/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */e6.prototype.once=function(e,t,n){return e1(this,e,t,n,!0)},/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */e6.prototype.removeListener=function(e,t,n,r){var i=eG?eG+e:e;if(!this._events[i])return this;if(!t)return e0(this,i),this;var o=this._events[i];if(o.fn)o.fn!==t||r&&!o.once||n&&o.context!==n||e0(this,i);else{for(var s=0,a=[],l=o.length;s<l;s++)(o[s].fn!==t||r&&!o[s].once||n&&o[s].context!==n)&&a.push(o[s]);//
// Reset the array, or remove it completely if we have no more listeners.
//
a.length?this._events[i]=1===a.length?a[0]:a:e0(this,i)}return this},/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */e6.prototype.removeAllListeners=function(e){var t;return e?(t=eG?eG+e:e,this._events[t]&&e0(this,t)):(this._events=new eQ,this._eventsCount=0),this},//
// Alias methods names because people roll like that.
//
e6.prototype.off=e6.prototype.removeListener,e6.prototype.addListener=e6.prototype.on,//
// Expose the prefix.
//
e6.prefixed=eG,//
// Allow `EventEmitter` to be imported as module namespace.
//
e6.EventEmitter=e6,eZ=e6;class e5 extends eZ.EventEmitter{/**
	 * Emits a typed error message.
	 *
	 * @internal
	 */emitError(e,t){eY.error("Error:",t),// @ts-ignore
this.emit("error",new e4(`${e}`,t))}}class e4 extends Error{/**
	 * @internal
	 */constructor(e,t){"string"==typeof t?super(t):(super(),Object.assign(this,t)),this.type=e}}class e8 extends e5{/**
	 * Whether the media connection is active (e.g. your call has been answered).
	 * You can check this if you want to set a maximum wait time for a one-sided call.
	 */get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}let e3=()=>Math.random().toString(36).slice(2);class e7 extends e8{static #e=(()=>{this.ID_PREFIX="dc_"})();static #t=(()=>{this.MAX_BUFFERED_AMOUNT=8388608})();get type(){return S.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||e7.ID_PREFIX+e3(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new eX(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}/** Called by the Negotiator when the DataChannel is ready. */_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{eY.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=e=>{eY.log(`DC#${this.connectionId} dc onmessage:`,e.data);// this._handleDataMessage(e);
},this.dataChannel.onclose=()=>{eY.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}/**
	 * Exposed functionality for users.
	 *//** Allows user to close connection. */close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}/** Allows user to send data. */send(e,t=!1){if(!this.open){this.emitError(U.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){let t=e.payload;switch(e.type){case T.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case T.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:eY.warn("Unrecognized message type:",e.type,"from peer:",this.peer)}}}class e9 extends e7{constructor(e,t,n){super(e,t,{...n,reliable:!0}),this._CHUNK_SIZE=32768,this._splitStream=new TransformStream({transform:(e,t)=>{for(let n=0;n<e.length;n+=this._CHUNK_SIZE)t.enqueue(e.subarray(n,n+this._CHUNK_SIZE))}}),this._rawSendStream=new WritableStream({write:async(e,t)=>{let n=new Promise(e=>this.dataChannel.addEventListener("bufferedamountlow",e,{once:!0}));// if we can send the chunk now, send it
// if not, we wait until at least half of the sending buffer is free again
await (this.dataChannel.bufferedAmount<=e7.MAX_BUFFERED_AMOUNT-e.byteLength||n);// TODO: what can go wrong here?
try{this.dataChannel.send(e)}catch(e){eY.error(`DC#:${this.connectionId} Error when sending:`,e),t.error(e),this.close()}}}),this.writer=this._splitStream.writable.getWriter(),this._rawReadStream=new ReadableStream({start:e=>{this.once("open",()=>{this.dataChannel.addEventListener("message",t=>{e.enqueue(t.data)})})}}),this._splitStream.readable.pipeTo(this._rawSendStream)}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.bufferedAmountLowThreshold=e7.MAX_BUFFERED_AMOUNT/2}}let te=Symbol.for(null),tt=async function*(e){let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)return;yield n}}finally{t.releaseLock()}};class tn extends e9{constructor(e,t,n){super(e,t,{...n,reliable:!0}),this.serialization="Cbor",this._encoder=new eM,this._decoder=new Y,this._decoderStream=new TransformStream({transform:(e,t)=>{let n,r=new Uint8Array(e);this._inc&&(r=function(e,t){let n=new Uint8Array(e.byteLength+t.byteLength);return n.set(e,0),n.set(t,e.byteLength),new Uint8Array(n.buffer)}(this._inc,r),this._inc=null);try{n=this._decoder.decodeMultiple(r)}catch(e){if(e.incomplete)this._inc=r.subarray(e.lastPosition),n=e.values;else throw e}finally{for(let e of n||[])null===e&&(e=te),t.enqueue(e)}}}),this._rawReadStream.pipeTo(this._decoderStream.writable),(async()=>{for await(let e of tt(this._decoderStream.readable)){if(e.__peerData?.type==="close"){this.close();return}this.emit("data",e)}})()}_send(e){return this.writer.write(this._encoder.encode(e))}}export{tn as Cbor};//# sourceMappingURL=serializer.cbor.mjs.map

//# sourceMappingURL=serializer.cbor.mjs.map
