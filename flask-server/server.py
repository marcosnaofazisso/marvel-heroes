# import requests
from flask import Flask, render_template
from flask import request
import json

timestamp = "1649095132"
apikey = "e423b333a7aba87d5f832698af6bc1eb"
hashkey = "9f97209a76d8959d9497419381a93284"
base = "https://gateway.marvel.com"
requisicao = "/v1/public/characters?"

URL = base + requisicao + "ts=" + timestamp + "&apikey=" + apikey + "&hash=" + hashkey

app = Flask(__name__)



@app.route("/teste", methods=['GET'])
def index():
    return ("XXXXXXXX")

if __name__ == "__main__":
    app.run(debug=True)






# timestamp = "1649095132"
# apikey = "e423b333a7aba87d5f832698af6bc1eb"
# hashkey = "9f97209a76d8959d9497419381a93284"
# base = "https://gateway.marvel.com"
# requisicao = "/v1/public/characters?"

# URL = base + requisicao + "ts=" + timestamp + "&apikey=" + apikey + "&hash=" + hashkey

# dados = requests.get(URL).json()
# try:
#     todos_nomes = dados["data"]["results"]
# except:
#     exit("Vamos testar isso!")


# nome = dados["data"]["results"][0]["name"]



