# @ Media queries


When working media queries particularly on the media_queriest.html file I've encountered with a problem of overwriting. The solution was to use `!important` key word.


> I have 2 max width properties.


`flex-basis` : property allows to add width between boxes


`margin-bottom` : is how do we add space when `flex-direction` is column meaning **vertical**


````css

/* Width between 700 - 850 px */
@media (max-width:850px) and (min-width:700px){

  article {
    flex-basis: 48% !important;
    margin-bottom: 1rem;
  }
}

/* Width 700px and minus */
@media (max-width:700px){
  .row{
    display: flex;
    flex-direction: column;
  }

  article {
    margin-bottom: 1rem;
  }
}

````
