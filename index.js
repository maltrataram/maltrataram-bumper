require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13')
const client = new Client()
fs = require('fs'),
colors = require('colors'),
center = require('center-align');


require('./server')

 console.log(center(`
     ┓                 ┓            
┏┳┓┏┓┃╋┏┓┏┓╋┏┓┏┓┏┓┏┳┓  ┣┓┓┏┏┳┓┏┓┏┓┏┓
┛┗┗┗┻┗┗┛ ┗┻┗┗┻┛ ┗┻┛┗┗  ┗┛┗┻┛┗┗┣┛┗ ┛ 
                              ┛     
`.red, 110));

client.on('ready', async () => {
    console.log(`conectado e,: ${client.user.tag}!`)

    const channel = await client.channels.fetch(process.env.bumpChannel)

    async function bump() {
        await channel.sendSlash('id-do-canal-para-bumpar', 'bump')
        console.count('Bumped!')
    }

    function loop() {
        // envia o bump de 2-3h para evitar ser detectado
        var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
        setTimeout(function () {
            bump()
            loop()
        }, randomNum)
    }

    bump()
    loop()
})

client.login(process.env.token)
