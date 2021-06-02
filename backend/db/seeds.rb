puts "Clearing old data..."
Competition.destroy_all
Player.destroy_all
Game.destroy_all

#creating comp seeds
puts "Seeding Comp..."
5.times do
    prize = rand(100...1000)
    dates = Faker::Date.in_date_period
    Competition.create(name: Faker::Name.name, date: dates, prize: prize)
  end

#Creating 5 randoms
puts "Seeding Player..."
    p1 = Player.create(name: "Johndhee")
    p2 = Player.create(name: "Korone")
    p3 = Player.create(name: "Pekora")
    p4 = Player.create(name: "Zues")
    p5 = Player.create(name: "Fubuki")

#creating random game seeds
puts "Seeding Game..."
    # player_id = Player.ids.sample
    competition_id = Competition.ids.sample
    # games = ["BDO", "Maplestory", "World Of Warcraft", "Warzone"]
    Game.create(player: p1, competition_id: competition_id, name: "Black Desert Online")
    Game.create(player: p5, competition_id: competition_id, name: "Maplestory")
    Game.create(player: p4, competition_id: competition_id, name: "World Of Warcraft")
    Game.create(player: p2, competition_id: competition_id, name: "Warzone")
    Game.create(player: p3, competition_id: competition_id, name: "Minecraft")
    Game.create(player: p1, competition_id: competition_id, name: "Path Of Exile")



puts "Done Did It..."
