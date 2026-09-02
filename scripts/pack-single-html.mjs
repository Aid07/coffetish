import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('site-build')
const assetsDir = path.join(dist, 'assets')
const htmlPath = path.join(dist, 'index.html')

const mime = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function toDataUri(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const type = mime[ext] ?? 'application/octet-stream'
  return `data:${type};base64,${fs.readFileSync(filePath).toString('base64')}`
}

function inlineFiles(content) {
  const files = fs
    .readdirSync(assetsDir)
    .filter((name) => mime[path.extname(name).toLowerCase()] && !name.endsWith('.js') && !name.endsWith('.css'))
    .sort((a, b) => b.length - a.length)

  for (const file of files) {
    const uri = toDataUri(path.join(assetsDir, file))
    for (const token of [`./assets/${file}`, `assets/${file}`, `./${file}`, file]) {
      content = content.split(token).join(uri)
    }
  }
  return content
}

let html = fs.readFileSync(htmlPath, 'utf8')
html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, '')

html = html.replace(/<link([^>]*?)href="([^"]+\.css)"([^>]*)>/g, (_all, _pre, href) => {
  const filePath = path.join(dist, href.replace(/^\.\//, ''))
  return `<style>${inlineFiles(fs.readFileSync(filePath, 'utf8'))}</style>`
})

html = html.replace(/<script([^>]*?)src="([^"]+\.js)"([^>]*)><\/script>/g, (_all, _pre, src) => {
  const filePath = path.join(dist, src.replace(/^\.\//, ''))
  return `<script type="module">${inlineFiles(fs.readFileSync(filePath, 'utf8'))}</script>`
})

const desktop = path.join(process.env.USERPROFILE ?? '.', 'OneDrive', 'Desktop')
const outName = 'ТИШЬ.html'
const outDist = path.join(dist, outName)
const outDesktop = path.join(desktop, outName)
fs.writeFileSync(outDist, html)
fs.writeFileSync(outDesktop, html)
console.log('Saved', outDesktop)
console.log('Size MB', (html.length / 1024 / 1024).toFixed(2))
