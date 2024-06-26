import requests
from datetime import datetime, timedelta
from shared import headers, queries, forms, urls

def search(query):
    form = forms["search"]
    form["query"] = query
    response = requests.post(urls["search"], headers=headers, data=form)
    total = response.json()["pagination"]["total_count"]
    print(f"Total found for query `{query}`: {total}")
    return total, response.json()

def get_all_sessions(date=None):
    total = 0
    query = queries["full_hour"]
    if date: 
        start_date = date - timedelta(days=1)
        end_date = date + timedelta(days=1)
        query += queries["on_day"].format(start_date=start_date.strftime("%Y-%m-%d"), end_date=end_date.strftime("%Y-%m-%d"))
    finished, _ = search(query)
    total += finished
    query = queries["end_early"]
    if date: 
        start_date = date - timedelta(days=1)
        end_date = date + timedelta(days=1)
        query += queries["on_day"].format(start_date=start_date.strftime("%Y-%m-%d"), end_date=end_date.strftime("%Y-%m-%d"))
    end_early, _ = search(query)
    total += end_early
    return total, finished, end_early

def get_processed_sessions():
    total = 0
    approved, _ = search(queries["approved"])
    total += approved
    rejected, _ = search(queries["rejected"])
    total += rejected
    return total, approved, rejected

def get_new_users(date):
    search_date = datetime.strptime(date, "%Y-%m-%d")
    start_date = search_date - timedelta(days=1)
    end_date = search_date + timedelta(days=1)
    query = queries["new_users"]+queries["on_day"].format(start_date=start_date.strftime("%Y-%m-%d"), end_date=end_date.strftime("%Y-%m-%d"))
    total, _ = search(query)
    return total

if __name__ == "__main__":
    print(get_new_users("2024-06-26"))