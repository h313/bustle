# Recorded with the doitlive recorder
#doitlive shell: /bin/zsh
#doitlive prompt: default

```ipython
import requests
url = "http://localhost:8080/api"
register = requests.post(f"{url}/auth/register", data={
    "name": "Mr. Kramer",
    "email": "ckramer@charterschool.org",
    "password": "hunter2"
})
register.text
login = requests.post(f"{url}/auth/login", data={
    "email": "ckramer@charterschool.org",
    "password": "this password is incorrect"
})
print(login.status_code, login.text)
login = requests.post(f"{url}/auth/login", data={
    "email": "ckramer@charterschool.org",
    "password": "hunter2"
})
login = login.json()
login
import jwt
jwt.decode(login["token"], verify=False)
jwt.decode(login["refreshToken"], verify=False)
refresh = requests.post(f"{url}/auth/refresh", data={"refreshToken": login["refreshToken"]})
refresh.text
login["token"] = refresh.json()["token"]
add_address = requests.post(f"{url}/api/driver/add_address", data={
    "refreshToken": login["refreshToken"],
    "longitude": 32,
    "latitude": 33,
    "address": "who knows",
})
print(add_address)
new_location = requests.post(f"{url}/api/driver/update_location", data={
    "refreshToken": login["refreshToken"],
    "longitude": 32,
    "latitude": 33,
})
print(new_location)
```