import requests, json, os, dotenv
from datetime import datetime, timedelta

dotenv.load_dotenv()

headers = {
    "cookie": os.getenv("cookie"),
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
}

queries = {
    "full_hour": "in:#arcade from:@hakkuun has::tada:",
    "end_early": "in:#arcade from:@hakkuun has::exit:",
    "approved": "in:#arcade from:@hakkuun \"approved\"",
    "rejected": "in:#arcade from:@hakkuun \"rejected\"",
    "new_users": "in:#arcade from:@hakkuun the \"arcade tutorial\" before:{end_date} after:{start_date}"
}

url = "https://hackclub.slack.com/api/search.modules.messages"

form_data = {
    "token": os.getenv("token"),
    "module": "messages",
}

def save_json(data, filename="data"):
    with open(f"{filename}.json", "w") as f: json.dump(data, f, indent=4)

def search(query):
    form_data["query"] = query
    response = requests.post(url, headers=headers, data=form_data)
    total = response.json()["pagination"]["total_count"]
    print(f"Total found for query `{query}`: {total}")
    return total, response.json()

def get_all_sessions():
    total = 0
    update_total, _ = search(queries["full_hour"])
    total += update_total
    update_total, _ = search(queries["end_early"])
    total += update_total
    return total

def get_new_users(date):
    search_date = datetime.strptime(date, "%Y-%m-%d")
    start_date = search_date - timedelta(days=1)
    end_date = search_date + timedelta(days=1)
    query = queries["new_users"].format(start_date=start_date.strftime("%Y-%m-%d"), end_date=end_date.strftime("%Y-%m-%d"))
    total, _ = search(query)
    return total

def get_processed_sessions():
    total = 0
    update_total, _ = search(queries["approved"])
    total += update_total
    update_total, _ = search(queries["rejected"])
    total += update_total
    return total

if __name__ == "__main__":
    print(get_new_users("2024-06-26"))