var fs = require('fs')
var convertTheme = require('tmtheme-to-json').convertTheme
 
var theme = convertTheme(fs.readFileSync('my.tmTheme', 'utf-8'))
fs.writeFileSync('my.tmTheme.json', JSON.stringify(theme, null, 2))

