import requests, json

headers = {
    "cookie": "lc=1719161596; d-s=1719161596; b=.c34fe3ba53261ace85041828467835db; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Jun+23+2024+18%3A53%3A18+GMT%2B0200+(Central+European+Summer+Time)&version=202402.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=4455ea9f-bd37-47cc-8fc3-c84565501815&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=1%3A1%2C3%3A0%2C2%3A0%2C4%3A0&AwaitingReconsent=false; shown_ssb_redirect_page=1; shown_download_ssb_modal=1; show_download_ssb_banner=1; no_download_ssb_banner=1; tz=120; d=xoxd-ncNcCEJQ7XmqQ8hRPqgCh27hvrF%2BOX%2BWpB%2F5kEIKETkGGGb7kY7wUQjGrjrX0QmHE8sIY%2B62PTJhQIf8X7z9JuLYw8dRiV6NrlD3oGHdu8vbqOySzSegsxpyGBQTSsjESuuD3PRKtGu%2FmWhzbqri9pXila4aZykYjCd5F4fwtzWk3J2GWb3xqQ%3D%3D; x=c34fe3ba53261ace85041828467835db.1719296995; web_cache_last_updatedfa8c8510c0445037a08cd4eb73188cf6=1719297025843",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "Dnt": "1",
    "Origin": "https://app.slack.com",
    "Priority": "u=1, i",
    "Sec-Ch-Ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"macOS\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site"
}

query = "@{username} from:@hakkuun \"this session is now approved\""
query = "from:@hakkuun has::tada:" # total
query = "from:@hakkuun has::exit:" # early

url = "https://hackclub.slack.com/api/search.modules.messages?_x_id=d8ec69fb-{timestamp}&_x_csid=dHJSCHDIugw&slack_route=T0266FRGM&_x_version_ts=1719141154&_x_frontend_build_type=current&_x_desktop_ia=4&_x_gantry=true&fp=80&_x_num_retries=0"

form_data = {
    "token": "xoxc-2210535565-7302010785543-7318630154066-8570a045ab0afbe92c1337ebe3b8a19f196dbfb0c8336df4d3d33ff751d1aba1",
    "module": "messages",
    "query": "",
    "page": 1,
    "client_req_id": "0be2beae-f138-4536-8360-4a185b4887a4",
    "search_session_id": "8094649a-6c70-41d5-903e-5e126b57250c",
    "extracts": 1,
    "highlight": 1,
    "max_extract_len": 200,
    "extra_message_data": 1,
    "no_user_profile": 1,
    "count": 20,
    "file_title_only": False,
    "query_rewrite_disabled": False,
    "include_files_shares": 1,
    "search_context": "desktop_messages_tab",
    "search_exclude_bots": False,
    "search_only_my_channels": False,
    "spell_correction": "FUZZY_MATCH",
    "search_only_team": "", 
    "facets_result_count": 5,
    "query_refinement_suggestions_version": 1,
    "recent_channels": "C06SBHMQU8G",
    "sort": "timestamp",
    "sort_dir": "desc",
    "max_filter_suggestions": 10,
    "request_context": {"active_cid": "SearchEmpty","recent_filter_in":[],"recent_filter_from":["U078FB76K5F"]},
    "search_tab_filter": "messages",
    "search_tab_sort": "timestamp",
    "_x_reason": "search-new-query",
    "_x_mode": "online",
    "_x_sonic": True,
    "_x_app_name": "client"
}

def save_json(data, filename="data"):
    with open(f"{filename}.json", "w") as f: json.dump(data, f, indent=4)

def search():
    form_data["query"] = query
    response = requests.post(url, headers=headers, data=form_data)
    print("Total found:", response.json()["pagination"]["total_count"])
    return response.json()

if __name__ == "__main__":
    save_json(search())