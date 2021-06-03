class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/tests/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/competitions/) && req.get?
      competitions = Competition.all
      return [200, { 'Content-Type' => 'application/json' }, [ {competitions: competitions}.to_json ]]

    else
      resp.write "you found me but nothing here"

    end

    resp.finish
  end

end
