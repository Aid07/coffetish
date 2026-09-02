import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const dir = path.resolve('public/images/menu')
const files = fs.readdirSync(dir).filter((file) => file.endsWith('.png'))

for (const file of files) {
  const input = path.join(dir, file)
  const output = path.join(dir, file.replace(/\.png$/i, '.jpg'))
  await sharp(input)
    .resize(900, 1200, { fit: 'cover' })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(output)
  fs.unlinkSync(input)
  console.log(file, '->', path.basename(output))
}
