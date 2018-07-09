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

get '/end/:name/:age/:num1/:num2/:num3' do
    erb :end, :locals => {:name => params[:name], :age => params[:age],
        :num1 => params[:num1], :num2 => params[:num2], :num3 => params[:num3]}
end