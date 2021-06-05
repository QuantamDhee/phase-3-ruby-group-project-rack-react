puts "Clearing le data..."
Player.destroy_all
Game.destroy_all

puts "I'm Seeding some players..."
Player.create(name: "Johndhee", img: "https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg")
Player.create(name: "BaldBoi", img: "https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg")
Player.create(name: "Pekora", img: "https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg")
Player.create(name: "Zues", img: "https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg")
Player.create(name: "Fubuki", img: "https://blog.emojipedia.org/content/images/2021/03/hurt-wechat-sticker-emoji-emojipedia.jpg")

puts "Now I'm seeding gamezz..."
Game.create(name: "Black Desert Online", player: Player.all.sample)
Game.create(name: "Maplestory", player: Player.all.sample)
Game.create(name: "World Of Warcraft", player: Player.all.sample)
Game.create(name: "Warzone", player: Player.all.sample)
Game.create(name: "Minecraft", player: Player.all.sample)
Game.create(name: "Path Of Exile", player: Player.all.sample)

puts "Done with all them seeding and sheesh..."



puts "Done Did It..."
