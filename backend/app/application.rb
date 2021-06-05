class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/tests/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]
      
    elsif req.path.match(/players/) && req.get?
      players = Player.all
      return [200, { 'Content-Type' => 'application/json' }, [ {players: players}.to_json ]]

    elsif req.path.match(/games/) && req.get?
      games = Game.all
      return [200, { 'Content-Type' => 'application/json' }, [ {games: games}.to_json ]]
    else
      resp.write "you found me but nothing here"

    end

    resp.finish
  end

end
