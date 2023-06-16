// ============== For require =======================//
const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

// =============== For Printing out ===================//
const text = process.argv[2]
const langCode = franc(text)
if (langCode === 'und') {
    console.log('language too short'.red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is ${language.name}`.green)
}
