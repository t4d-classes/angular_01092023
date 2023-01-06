# Welcome to Comprehensive Angular

![Accelebrate Logo](images/accelebrate-logo.png "Accelebrate Logo")

Most of Accelebrate's courses are taught privately online or in-person for
teams of 3 or more, and can be customized to your group’s goals. To receive a
customized proposal and price quote, please visit
[https://www.accelebrate.com/contact/](https://www.accelebrate.com/contact/)
or email [sales@accelebrate.com](sales@accelebrate.com). In addition, we offer
live, online open enrollment training for individuals.


## Configuration and Data for the REST API part of the class

To configure the REST API, two packages will need to installed into the
project created by the Vue CLI generator.

To install those packages, run the following command from within the root
folder of the project:

```bash
npm install -D json-server npm-run-all
```

Next, the `package.json` needs to be updated to easily run the REST API
provides by the [JSON Server](https://github.com/typicode/json-server). Here
is the `scripts` configuration which can be copied and pasted for the REST API.
When asked by the instructor, replace the `scripts` section of the
`package.json` file in the `demo-app` project with the `scripts` section below.

```json
"scripts": {
  "ng": "ng",
  "start": "run-p rest web",
  "rest": "json-server --port 3060 ./db.json",
  "web": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test",
},
```

Here is the `db.json` JSON which can be copied and pasted for the REST API
portion of the class. This content will pasted into a file named `db.json`.
The `db.json` file will be placed in the `demo-app` folder, the same folder
as the `package.json` file. The `db.json` file should **NOT** be placed in
the `src` folder.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {
      "id":1, "make":"Ford", "model":"Fusion Hybrid",
      "year":2019, "color":"blue", "price":45000
    },
    {
      "id": 2, "make": "Tesla", "model": "S",
      "year": 2018, "color": "red", "price": 100000
    }
  ]
}
```

## License

All code in this repository is distributed under the [MIT license](license.txt).

<br><br>
All course content and teaching is provided by: [T4D.IO](https://www.t4d.io)