from scraper import search, get_all_sessions, get_new_users
import json
from datetime import datetime, timedelta

with open("user_data.json", "r") as f:
    users = json.load(f)["data"]

def get_num_users():
    return len(users)

def get_sessions_daily():
    sessions_daily = []
    datetimes = [datetime(2024, 6, 17) + timedelta(days=i) for i in range((datetime.now()-datetime(2024, 6, 17)).days)]
    for date in datetimes:
        total, _, _ = get_all_sessions(date)
        sessions_daily.append({"date": date.strftime("%Y-%m-%d"), "total": total})
    return sessions_daily

def get_tz_distribution():
    timezones = {}
    timezones_regions = {}
    for user in users:
        if user["tz"] in timezones:
            timezones[user["tz"]] += 1
        else:
            timezones[user["tz"]] = 1

        region = user["tz"].split("/")[0]
        if region in timezones_regions:
            timezones_regions[region] += 1
        else:
            timezones_regions[region] = 1
    return timezones, timezones_regions

def get_usernames():
    usernames = [u["name"] if u["profile"]["display_name"] == "" else u["profile"]["display_name"] for u in users]
    letters = {}
    for username in usernames:
        if username[0] in letters:
            letters[username[0]] += 1
        else:
            letters[username[0]] = 1
    return letters

def get_tutorials_daily():
    tutorials_daily = []
    datetimes = [datetime(2024, 6, 17) + timedelta(days=i) for i in range((datetime.now()-datetime(2024, 6, 17)).days)]
    for date in datetimes:
        total = get_new_users(date)
        tutorials_daily.append({"date": date.strftime("%Y-%m-%d"), "total": total})
    return tutorials_daily

if __name__ == "__main__":
    timezones, timezones_regions = get_tz_distribution()
    print(get_tz_distribution())
