require 'sinatra'

get '/' do
    erb :intro
end

get '/:name' do
    erb :intro, :locals => {:name => params[:name]}
end