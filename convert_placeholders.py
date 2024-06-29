from get_stats import get_num_users, get_all_sessions, get_sessions_daily, get_processed_sessions, get_tz_distribution, get_usernames, get_tutorials_daily
import numpy as np

def replace_variables(filename, variables):
    filename, ext = filename.split(".")
    with open(f"{filename}Placeholder.{ext}", "r") as f:
        content = f.read()
    for key, value in variables.items():
        print(f"Replacing {key} with {value}")
        if isinstance(value, list): value = [str(v) for v in value]
        if isinstance(value, float): value = round(value, 2)
        if ext == "js" and isinstance(value, str): value = f"'{value}'"
        divider = '\', \''
        if ext == "js" and isinstance(value, list):
            try: 
                [int(v) for v in value]
                value = ', '.join(value)
            except:
                value = f"'{divider.join(value)}'"
        content = content.replace("{{ " + key + " }}", str(value) if not isinstance(value, list) else ", ".join(value))
    with open(f"{filename}.{ext}", "w") as f:
        f.write(content)

print("Getting all sessions...")
sessions_total, sessions_finished, sessions_ended_early = get_all_sessions()
print("Getting processed sessions...")
sessions_processed, sessions_approved, sessions_rejected = get_processed_sessions()
print("Getting daily sessions...")
sessions_daily = get_sessions_daily()
print("Getting timezones...")
timezones, timezones_regions = get_tz_distribution()
print("Getting usernames...")
usernames = get_usernames()
print("Getting daily tutorials...")
tutorials_daily = get_tutorials_daily()

replace_variables("index.html", {
    "total_users": get_num_users(),
    "total_sessions": sessions_total,
    "daily_sessions_average": np.mean([session["total"] for session in sessions_daily]),
    "finished_perc": sessions_finished/sessions_total*100,
    "ended_early_perc": sessions_ended_early/sessions_total*100,
    "approved_perc": sessions_approved/sessions_processed*100,
    "rejected_perc": sessions_rejected/sessions_processed*100,
    "timezone_num": len(timezones),
    "timezone_region_num": len(timezones_regions),
    "beginning_with_a_perc": usernames["A"]/get_num_users()*100,
    "daily_new_users_average": np.mean([tutorial["total"] for tutorial in tutorials_daily]),
})

labels_finished_ended_early, data_finished_ended_early = ["Finished", "Ended Early"], [sessions_finished, sessions_ended_early]
labels_approved_rejected, data_approved_rejected = ["Approved", "Rejected"], [sessions_approved, sessions_rejected]
labels_timezone_regions, data_timezone_regions = list(timezones_regions.keys()), list(timezones_regions.values())
labels_timezone_specific, data_timezone_specific = list(timezones.keys()), list(timezones.values())
labels_username_first_letters, data_username_first_letters = list(usernames.keys()), list(usernames.values())
labels_daily_sessions, data_daily_sessions = [session["date"] for session in sessions_daily], [session["total"] for session in sessions_daily]
labels_daily_tutorial, data_daily_tutorial = [tutorial["date"] for tutorial in tutorials_daily], [tutorial["total"] for tutorial in tutorials_daily]

replace_variables("script.js", {
    "labels_finished_ended_early": labels_finished_ended_early,
    "data_finished_ended_early": data_finished_ended_early,
    "labels_approved_rejected": labels_approved_rejected,
    "data_approved_rejected": data_approved_rejected,
    "labels_timezone_regions": labels_timezone_regions,
    "data_timezone_regions": data_timezone_regions,
    "labels_timezones_specific": labels_timezone_specific,
    "data_timezones_specific": data_timezone_specific,
    "labels_username_first_letters": labels_username_first_letters,
    "data_username_first_letters": data_username_first_letters,
    "labels_daily_sessions": labels_daily_sessions,
    "data_daily_sessions": data_daily_sessions,
    "labels_daily_tutorial": labels_daily_tutorial,
    "data_daily_tutorial": data_daily_tutorial
})