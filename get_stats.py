from scraper import search, get_all_sessions
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

if __name__ == "__main__":
    timezones, timezones_regions = get_tz_distribution()
    print(timezones)
    print(timezones_regions)
