const fs = require('fs').promises
const path = require('path')

const showHelp = () => {
  console.log('\n\n')
  // console.log( 'Es necesario que incluya el titulo del post despues del comando:' )
  console.log('The title is required after command:')
  console.log("\t npm run generate-post <insert post's title here>")
  console.log('Example:')
  console.log('\t npm run generate-post Hello world')
  console.log('\n\n')
}

const getTemplate = (title, slug, date) => {
  const template = `---
title: '${title}'
slug: ${slug}
date: ${date}

# optional fields
published: true
generate-card: false
language: es
cover: ./cover.png
imageShare: ./cover.png
tags: ['fake']
---

This is autogenerated content post.
`
  return template
}

const getFormatDate = () => {
  const d = new Date()
  let month = '' + (d.getMonth() + 1)
  const day = '' + d.getDate()
  const year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  const formatDate = [year, month, day].join('-')

  return formatDate
}

const createFolder = async (slug, date) => {
  console.log('Creating folder...')
  const folderName = `${date}-${slug}`
  let folder = path.join(__dirname, '../', 'content', 'posts', folderName)
  try {
    await fs.mkdir(folder)
  } catch (err) {
    console.error(`${folder} already exists\n`)
    console.log(err)
    process.exit(0)
  }
  return folder
}

const createFile = async (folder, title, slug, date) => {
  console.log('Creating file...')
  const content = getTemplate(title, slug, date)

  const filePath = path.join(folder, 'index.md')
  try {
    await fs.writeFile(filePath, content, 'utf-8')
  } catch (err) {
    console.error(`${filePath} already exists\n`)
    console.log(err)
    process.exit(0)
  }
}

const copyImage = async (slug, date) => {
  console.log('Copying assets...')
  const folderName = `${date}-${slug}`
  const basePath = path.join(__dirname, '../', 'content', 'posts')
  let src = path.join(basePath, '00-frontmatter-placeholder', 'cover.png')
  let dest = path.join(basePath, folderName, 'cover.png')
  try {
    await fs.copyFile(src, dest)
  } catch (err) {
    console.error(`${src} doesn't exists`)
    console.error(`or ${src} already exists\n`)
    console.log(err)
    process.exit(0)
  }
}

const createPost = async (title, slug, date) => {
  const folder = await createFolder(slug, date)
  await createFile(folder, title, slug, date)
  await copyImage(slug, date)
}
const start = async args => {
  if (args.length === 0) {
    return showHelp()
  }
  const title = args.join(' ')
  const slug = args
    .join('-')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const date = getFormatDate()
  const folderName = `${date}-${slug}`
  await createPost(title, slug, date)
  console.log('====================================')
  console.log('Title:  ', title)
  console.log('Slug:   ', slug)
  console.log('Date:   ', date)
  console.log('Folder: ', folderName)
  console.log('====================================')
  console.log('Finished!!')
}

var argsv = process.argv.slice(2)
start(argsv)
