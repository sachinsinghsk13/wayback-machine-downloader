import { JSDOM } from "jsdom";
async function main() {
    let file = await JSDOM.fromURL('https://dmitripavlutin.com/');
    let scripts = file.window.document.scripts;
    console.log(scripts);
}


main()