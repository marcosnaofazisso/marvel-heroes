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

offset = "0"
URL = base + req + "limit=" + limit + "&ts=" + ts + "&apikey=" + \
    apikey + "&hash=" + hashkey + "&offset=" + offset


app = Flask(__name__)


@app.route("/rest0", methods=["GET"])
def index():
    heroes = getHeroes(0)
    return heroes


@app.route("/rest1", methods=["GET"])
def offset_one():
    heroes = getHeroes(1)
    return heroes


@app.route("/rest2", methods=["GET"])
def offset_two():
    heroes = getHeroes(2)
    return heroes


@app.route("/rest3", methods=["GET"])
def offset_three():
    heroes = getHeroes(3)
    return heroes


@app.route("/rest4", methods=["GET"])
def offset_four():
    heroes = getHeroes(4)
    return heroes


@app.route("/rest5", methods=["GET"])
def offset_five():
    heroes = getHeroes(5)
    return heroes


@app.route("/rest6", methods=["GET"])
def offset_six():
    heroes = getHeroes(6)
    return heroes


@app.route("/rest7", methods=["GET"])
def offset_seven():
    heroes = getHeroes(7)
    return heroes


@app.route("/rest8", methods=["GET"])
def offset_eight():
    heroes = getHeroes(8)
    return heroes


@app.route("/rest9", methods=["GET"])
def offset_nine():
    heroes = getHeroes(9)
    return heroes


@app.route("/rest10", methods=["GET"])
def offset_ten():
    heroes = getHeroes(10)
    return heroes


@app.route("/rest11", methods=["GET"])
def offset_eleven():
    heroes = getHeroes(11)
    return heroes


@app.route("/rest12", methods=["GET"])
def offset_twelve():
    heroes = getHeroes(12)
    return heroes


@app.route("/rest13", methods=["GET"])
def offset_thirteen():
    heroes = getHeroes(13)
    return heroes


@app.route("/rest14", methods=["GET"])
def offset_fourteen():
    heroes = getHeroes(14)
    return heroes


@app.route("/rest15", methods=["GET"])
def offset_fifteen():
    heroes = getHeroes(15)
    return heroes


def getHeroes(index):
    offset = index * 100
    URL = base + req + "limit=" + limit + "&ts=" + ts + "&apikey=" + \
        apikey + "&hash=" + hashkey + "&offset=" + str(offset)
    resp = requests.get(URL).json()
    pack = {}
    try:
        for i in range(0, len(resp["data"]["results"])):
            name = resp["data"]["results"][i]["name"]
            description = resp["data"]["results"][i]["description"]
            thumbnail = resp["data"]["results"][i]["thumbnail"]["path"] + ".jpg"
            pack[i] = {"name": name, "description": description,
                       "thumbnail": thumbnail}
        return pack
    except:
        return("ERROR: Thanos won this time :( ")


if __name__ == "__main__":
    app.run(debug=True)
