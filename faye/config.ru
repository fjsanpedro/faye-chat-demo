require 'faye'

class FayeTokenAuth
  def incoming(message, callback)
    if message['channel'] !~ %r{^/meta/}
      if message['ext']['auth_token'] != ENV['FAYE_TOKEN']
        message['error'] = 'Invalid authentication token'
      end
    end
    callback.call(message)
  end

  def outgoing(message, callback)
    message['ext'] = {} if message['ext'] && message['ext']['auth_token']
    callback.call(message)
  end
end

Faye::WebSocket.load_adapter('thin')
faye_server = Faye::RackAdapter.new(mount: '/faye', timeout: 45)
faye_server.add_extension FayeTokenAuth
run faye_server
