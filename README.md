# calendar-app
React/Redux calendar app

## Launch app

###### IMPORTANT!
Launch the [Calendar API](https://github.com/gusbueno/calendar-api) before launch this webapp

#### With Docker
From the terminal command:
* Run `docker build -t calendar .`
* Run `docker run -p 80:8080 -i -t calendar`
* Visit [http://localhost](http://localhost)

#### Manually
From the terminal command:
* Run `npm install` to install all dependencies
* Run `npm start` to launch the **development server with hot-reload**
* Visit [http://localhost:3001](http://localhost:3001)
* Or run `npm run build` to generate the **production bundle**

## Unit tests

Run `npm install` if you didn't do before
Run `npm test` to launch all the unit tests. This command will create a **coverage** folder with the code coverage which is ~80%