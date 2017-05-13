footer
Explain
    tsconfig.json
    typings
    package.json


Contact App

Objective

Create a two page contact application
Home page 
    Title
    Action buttons (Add/Delete)
    Data grid showing contact records

Contact form
    Contact details fields
    form validation
    Submit/Edit actions

Be able to select a record on the grid and display it in the form


Requirements

Typescript compiler installed
node installed
npm installed
bower installed

PreInstall

Clone https://github.com/Microsoft/TypeScriptSamples/tree/master/angular1


Copy the HTML and CSS from codepen

http://codepen.io/ymeirovich/pen/jmLjON

Create a copy of app/app.css and rename to app.scss

    In app/app.scss copy the SCSS from codepen
    In app/app.css copy the CSS

Install jQuery from CDN

https://code.jquery.com/

Copy the HTML from codepen to app/index.html

<body class="container">
    <div class="row">
        <app-root class="col-md-12">
            <app-header>
                <div>Angular seed app: v<span app-version></span></div>
            </app-header>
            <app-home>
                <main>
                    <div class=side>
                        <app-side-menu>
                            <ul class="menu">
                                <li><a href="#!/view1">view1</a></li>
                                <li><a href="#!/view2">view2</a></li>
                            </ul>
                        </app-side-menu>
                    </div>
                    <div class="content">
                        <div ng-view></div>
                    </div>
                </main>
            </app-home>
            <app-footer>footer</app-footer>
        </app-root>
    </div>

Lesson 1

Solve right to left problem

app/app.css

body {
    /*direction: rtl;*/
    height: 100%;
}

Lesson 2

Solve container problem

install bootstrap from 

https://v4-alpha.getbootstrap.com/getting-started/download/

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

Install Tether

https://github.com/HubSpot/tether

<script src="//cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>

Lesson 3

Fix the Sidebar

Remove "menu" class
<ul class="menu">

Lesson 4

Create Header & Footer components

Create two new folders in app/components

/header
/footer

Create two new files in each

/header/header.component.html
       /header.component.ts

/footer/footer.component.html
       /footer.component.ts

Copy the component TS template from

https://gist.github.com/bcherny/8f35f5e5ff62b09ce7b3ef9cbf637ee9

and paste it into header and footer components

Change "My" in MyComponentController to
Header
Footer

Copy the footer/header html from index.html to footer/header.html

Notice the components left are <app-header> and <app-footer>

Look at angular.d.ts in typings

Lesson 5

Register the components

Add the components <link> to index.html in the CORRECT order

Add a new file to /components/myapp.components.ts

Add the following to myapp.components.ts

angular.module('myApp.components', [])
.component('appHeader',HeaderComponent)
.component('appFooter',FooterComponent)

add a link to /components/myapp.components.ts to index.html in the CORRECT order

TEST

You may need to modify the tsconfig 

change tsconfig.json to

{
    "compilerOptions": {
        "emitDecoratorMetadata": false,
        "module": "commonjs",
        "target": "ES5",
        "outDir": "./",
        "rootDir": "app"
    }
}

Modify the following in version.ts

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive',
  'myApp.components'
])

TEST

See screenshot
You should be able to navigate between views
You should have the header and footer component loaded

Lesson 6

Create Sidebar component

Create new folder /components/sidebar
Create sidebar.component.html
       sidebar.component.ts

Follow the same procedure for the sidebar as was done for header/footer

Copy component template
Modify component template
Register component
    register with angular
    add file link to index.html

Add to sidebar.component.html

<ul class="">
    <li><a href="#!/view1">view1</a></li>
    <li><a href="#!/view2">view2</a></li>
</ul>

Change template property to

 templateUrl : `./components/sidebar/sidebar.component.html` ,

 TEST

Lesson 7

Build Home page (view1)

Three rows

First row add title

Second row add action button Add Contact

In the 3rd row create a data grid html table

First Name
Last Name
Phone
Email
Edit / Delete buttons

<style>
    main {
        width: 100%;
    }
    
    table {
        border: 1px solid black;
    }
    
    table td,
    table th {
        border: 1px solid black;
    }
</style>

<div class="row">
    <div class="col-md-12">
        <div class="text-center">
            <h1>Contact Home Page</h1>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <p>
            <button class="btn btn-primary">
                <span>Add Contact</span>
            </button>
        </p>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>
                        <button type="button" class="btn btn-info btn-sm">
                                <span class="">Edit</span>  
                        </button>
                        <button type="button" class="btn btn-danger btn-sm">
                            <span class="">Trash</span>  
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

Lesson 8 

Create contacts home page controller

a. Bindings
    - title
    - Add Contact button text
    - ng-repeat for the contacts data grid
b. create json records to immediately bind without http
c. create ng-click for Add Contact button
    - should redirect to the Contacts form (view2)





