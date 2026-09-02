import fs from 'node:fs'

const js = fs.readFileSync('site-build/assets/index-7-PjgaJ8.js', 'utf8')
const jpg = [...js.matchAll(/[^"'`\s)]+\.jpg/g)].slice(0, 8).map((m) => m[0])
console.log('JPG', jpg)

const css = fs.readFileSync('site-build/assets/style-DEjBs6rh.css', 'utf8')
const urls = [...css.matchAll(/url\(([^)]+)\)/g)].slice(0, 6).map((m) => m[1])
console.log('CSS', urls)
