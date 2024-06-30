import json

step = 1

if step == 0:
    with open("slack_users.har") as f:
        data = json.load(f)["log"]["entries"]

    contents = []
    for entry in data:
        if not "list?fp=" in entry["request"]["url"]: continue
        contents.append(entry["response"]["content"]["text"])

    with open("users.json", "w") as f:
        json.dump({"data": contents}, f)

#* ---------------------
#* | Beautify the JSON |
#* ---------------------

else:
    with open("users.json") as f:
        data = json.load(f)["data"]

    user_datas = []
    for piece in data:
        user_datas.extend(piece["results"])

    user_ids = [u["id"] for u in user_datas]

    with open("user_data.json", "w") as f:
        json.dump({"data": user_datas}, f)