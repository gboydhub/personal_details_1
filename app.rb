require 'sinatra'

get '/' do
    erb :intro
end

get '/get_age/:name' do
    erb :age, :locals => {:name => params[:name]}
end

get '/get_nums/:name/:age' do
    erb :nums, :locals => {:name => params[:name], :age => params[:age]}
end