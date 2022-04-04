import requests
try:
    from flask import Flask, jsonify, request
    from flask import request
    import json
except ImportError as ie:
    print("Error importing required packages: {ie}")


ts = "1649095132"
apikey = "e423b333a7aba87d5f832698af6bc1eb"
hashkey = "9f97209a76d8959d9497419381a93284"
base = "https://gateway.marvel.com:443"
req = "/v1/public/characters?"

URL = base + req + "ts=" + ts + "&apikey=" + apikey + "&hash=" + hashkey

app = Flask(__name__)


@app.route("/heroes", methods=["GET"])
def index():
    resp = requests.get(URL).json()
    try: 
        name = resp["data"]["results"][0]["name"]
        description = resp["data"]["results"][0]["description"]
        thumbnail = resp["data"]["results"][0]["thumbnail"]["path"]
        all_heroes = dict()
        for index, value in enumerate(resp["data"]["results"]):
            all_heroes[index] = value
        return(all_heroes)
    except:
        return("ERROR: Thanos won this time :( ")


if __name__ == "__main__":
    app.run(debug=True)
