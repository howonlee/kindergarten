import json

if __name__ == "__main__":
    with open("data2.js") as f:
        data = json.loads(f.read())
        print json.dumps(data, sort_keys=True, indent=2, separators=(',', ': '))
