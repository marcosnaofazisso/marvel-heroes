import requests
try:
    from flask import Flask, jsonify, request
    from flask import request
    import json
except ImportError as ie:
    print("Error importing required packages: {ie}")

limit = "100"
ts = "1649095132"
apikey = "e423b333a7aba87d5f832698af6bc1eb"
hashkey = "9f97209a76d8959d9497419381a93284"
base = "https://gateway.marvel.com:443"
req = "/v1/public/characters?"

URL = base + req + "limit=" + limit + "&ts=" + ts + "&apikey=" + apikey + "&hash=" + hashkey

app = Flask(__name__)


@app.route("/rest", methods=["GET"])
def index():
    resp = requests.get(URL).json()
    pack = {}
    lista = []
    try: 
        for i in range(0, len(resp["data"]["results"])):
            name = resp["data"]["results"][i]["name"]
            description = resp["data"]["results"][i]["description"]
            thumbnail = resp["data"]["results"][i]["thumbnail"]["path"] + ".jpg"
            pack[i] = {"name": name,"description": description, "thumbnail": thumbnail }
        return pack
    except:
        return("ERROR: Thanos won this time :( ")


if __name__ == "__main__":
    app.run(debug=True)
