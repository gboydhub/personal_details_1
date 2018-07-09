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
    erb :end, :locals => {:name => params[:name], :age => params[:age].to_i,
        :num1 => params[:num1].to_i, :num2 => params[:num2].to_i, :num3 => params[:num3].to_i}
end