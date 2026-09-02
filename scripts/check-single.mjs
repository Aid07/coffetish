import fs from 'node:fs'
import path from 'node:path'

const html = fs.readFileSync(path.join(process.env.USERPROFILE, 'OneDrive', 'Desktop', 'ТИШЬ.html'), 'utf8')
const leftover = html.match(/src="\.\/assets\/[^"]+"|href="\.\/assets\/[^"]+"|\.jpg(?![\w;])|\.woff2/g)
console.log('leftover', leftover?.slice(0, 20) ?? 'none')
console.log('has module script', html.includes('<script type="module">'))
console.log('has style', html.includes('<style>'))
console.log('data jpeg count', (html.match(/data:image\/jpeg/g) ?? []).length)
