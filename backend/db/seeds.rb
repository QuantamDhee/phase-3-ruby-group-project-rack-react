puts "Clearing le data..."
Player.destroy_all
Game.destroy_all

puts "I'm Seeding some players..."
Player.create(name: "Johndhee")
Player.create(name: "BaldBoi")
Player.create(name: "Pekora")
Player.create(name: "Zues")
Player.create(name: "Fubuki")

puts "Now I'm seeding gamezz..."
Game.create(name: "Black Desert Online",img: 'https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg', player: Player.all.sample)
Game.create(name: "Maplestory",img: 'https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg', player: Player.all.sample)
Game.create(name: "World Of Warcraft",img: 'https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg', player: Player.all.sample)
Game.create(name: "Warzone",img: 'https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg', player: Player.all.sample)
Game.create(name: "Minecraft",img: 'https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg', player: Player.all.sample)
Game.create(name: "Path Of Exile",img: 'https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg', player: Player.all.sample)

puts "Done with all them seeding and sheesh..."



puts "Done Did It..."
