def replace_variables(filename, variables):
    with open(f"{filename}Placeholder", "r") as f:
        content = f.read()
    for key, value in variables.items():
        content = content.replace("{{ " + key + " }}", value if not isinstance(value, list) else ", ".join(value))
    with open(filename, "w") as f:
        f.write(content)