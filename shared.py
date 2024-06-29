import dotenv, os, json

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
    "new_users": "from:@hakkuun \"welcome to your first\"",
    "on_day": " before:{end_date} after:{start_date}"
}

urls = {
    "search": "https://hackclub.slack.com/api/search.modules.messages"
}

forms = {
    "search": {
        "token": os.getenv("token"),
        "module": "messages",
    }
}


def save_json(data, filename="data"):
    with open(f"{filename}.json", "w") as f: json.dump(data, f, indent=4)