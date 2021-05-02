# Html Css Js Clock

Use vs emmets to create the basic front end html structure :
.class_name
```
<div class="class_name"></div>
```

.class_name#id_name
```
<div class="class_name" id="id_name"></div>
```

span.class_name
```
<span class="class_name"></span>
```

then add the google font to it from the google's website
```
<link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
```

css code to insert font
```
*{
    margin: 0em;
    padding: 0em;
    box-sizing: border-box;
}
```

```
#app{

  font-family: 'Poiret One', cursive;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

}
```

what is vh and what is the difference between % ?
vh means viewport heigh whereas % it gives the container's height.

with justify content it gives like :
half of the secreen :
take the 100% of the viewport and give me the center
```
#id{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

or half of the half of the screen :
```
#id{
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

full html code :
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet">
  <title>Document</title>
</head>
<body>

  <div id="app">
    <div class="class" id="clock">
      <div class="date"></div>
      <div class="dot"></div>

      <div class="hands">
        <div class="hour-hand"></div>
        <div class="second-hand"></div>
        <div class="minute-hand"></div>
      </div>

      <div class="hours">
        <span class="hours3">3</span>
        <span class="hours6">6</span>
        <span class="hours9">9</span>
        <span class="hours12">12</span>
      </div>

      <div class="dialines"></div>

    </div>
  </div>

 
</body>
</html>
```

relative position : when the position of an object is relatif and it is in a container, it's position will change but relative to it's container, maining that the pivot point will be the containers center.

parent div
sub div : poz - relative to the parent div

and when there is another div under that relative div and you want to center div>div>div you can make that last divs position absolut and use height and width to adjust the it position
```
.dot{
  position: absolute;
  width: .7em;
  height: .7em;
  border-radius: 50%;
  background-color: #969696;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

css selector graiter then >
in our exemple we have used is to define common properties to sub divs that shares the same caracteristics
css
```
.hours>span{
  display: inline-block;
  position: absolute;
  font-size: 2em;
  font-weight: 700;
  z-index: 6;
}
```

html
```
<div class="hours">
        <span class="hours3">3</span>
        <span class="hours6">6</span>
        <span class="hours9">9</span>
        <span class="hours12">12</span>
      </div>
```

a quick reminder on inline, block and inline block elements
inline elements can not have separete width and height and they dont require a new line,

block elements requires new line and can have height property,

and inline-block elements can have both with and height without requiring a new line.













