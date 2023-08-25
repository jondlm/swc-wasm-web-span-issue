var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequireb3b2;null==parcelRequire&&((parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var t=$parcel$inits[e];delete $parcel$inits[e];var n={id:e,exports:{}};return $parcel$modules[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){$parcel$inits[e]=t},$parcel$global.parcelRequireb3b2=parcelRequire),parcelRequire.register("iMQia",function(module,exports){// This is the snippet of code from that the swc playground uses:
// Reference: https://github.com/swc-project/swc-playground/blob/f3d00a27ec38b7682476587d4e99a0edd5b3c80f/src/swc.ts#L286
/*
export async function loadSwc(version: string): Promise<SwcModule> {
  const packageName = getPackageName(version)
  const entryFileName = semver.gt(version, '1.2.165')
    ? 'wasm-web.js'
    : 'wasm.js'
  const swcModule: SwcModule = await import(
    `https://cdn.jsdelivr.net/npm/${packageName}@${version}/${entryFileName}`
  )
  await swcModule.default()
  return swcModule
}
*/async function run(){let inputElement=document.querySelector("#input"),codeDisplay=document.querySelector("#code-display"),formElement=document.querySelector("#form");console.log("Importing swc ⏳");let swc=await eval('import("https://cdn.jsdelivr.net/npm/@swc/wasm-web@1.3.78/wasm-web.js")');await swc.default(),console.log("Loaded ✅"),formElement.addEventListener("submit",e=>{e.preventDefault(),codeDisplay.innerText=JSON.stringify(swc.parseSync(inputElement.value,{syntax:"typescript",tsx:!1,target:"es2022",isModule:!0}),null,2)}),codeDisplay.innerText="Hit 'parse' at least twice and observe the span numbers increase each time :("}run()}),parcelRequire("iMQia");//# sourceMappingURL=index.e3747499.js.map

//# sourceMappingURL=index.e3747499.js.map
