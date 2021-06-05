class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/tests/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    # elsif req.path.match(/players/) && req.get?
    #   players = Player.all
    #   return [200, { 'Content-Type' => 'application/json' }, [ {players: players}.to_json ]]

    elsif req.path.match(/games/) && req.get?
      games = Game.all.map do |game|
        {id: game.id, name: game.name, img: game.img, player: game.player.name}
      end
      return [200, { 'Content-Type' => 'application/json' }, [ {games: games}.to_json ]]

    elsif req.path.match(/games/) && req.post?
      data = JSON.parse req.body.read
      player = Player.find_by(name: data['player'])
      game = Game.create(name: data['name'], img: data['img'], player: player)

      big_game = {id: game.id, name: game.name, img: game.img, player: game.player.name}

      return [200, { 'Content-Type' => 'application/json' }, [ {game: big_game}.to_json ]]

    elsif req.path.match(/games/) && req.delete?
      id = req.path.split('/games/').last
      Game.find(id).delete

      return [200, { 'Content-Type' => 'application/json' }, [ {message: "Game is Deleted :("}.to_json ]]
    else
      resp.write "you found me but nothing here"

    end

    resp.finish
  end

end
