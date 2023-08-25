// This is the snippet of code from that the swc playground uses:
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
*/

async function run() {
  const inputElement = document.querySelector("#input");
  const codeDisplay = document.querySelector("#code-display");
  const formElement = document.querySelector("#form");

  console.log("Importing swc ⏳");
  const swc = await eval(
    `import("https://cdn.jsdelivr.net/npm/@swc/wasm-web@1.3.78/wasm-web.js")`,
  );
  await swc.default(); // init bindgen
  console.log("Loaded ✅");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    codeDisplay.innerText = JSON.stringify(
      swc.parseSync(inputElement.value, {
        syntax: "typescript",
        tsx: false,
        target: "es2022",
        isModule: true,
      }),
      null,
      2,
    );
  });

  codeDisplay.innerText = `Hit 'parse' at least twice and observe the span numbers increase each time :(`;
}

run();
