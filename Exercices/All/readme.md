# @ Media queries

![media_queries](https://user-images.githubusercontent.com/28195113/92406218-23db5880-f140-11ea-893a-07d94c2a51c2.gif)

When working media queries particularly on the media_queriest.html file I've encountered with a problem of overwriting. The solution was to use **`!important`** key word.

> I have 2 max width properties.

**`flex-basis`** : property allows to add width between boxes

**`margin-bottom`** : is how do we add space when **`flex-direction`** is column meaning **vertical**

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

# How to fix buttons

![media_queries](https://user-images.githubusercontent.com/28195113/92494172-0e2c6880-f1fe-11ea-8d2e-e94871ea1ced.gif)

> **`Container`** has a relative position.
>
> **`Childs`** have an absolute position.

**In other words :**

**`First`** each boxes position should be relative.

**`Sec.`** each div containing the hyperlink button should be abolute

**`And`** the way that you fixe their position in the middle :

````css
margin-left: 10%;
margin-right: 10%;
````

# Responsive Footer

![footer](https://user-images.githubusercontent.com/28195113/92654118-0d77fd00-f2f8-11ea-9b68-328f5dc2ac82.gif)

I had an issue with hr showing. The way I fixed it in media queries when the screen is less than x :

````css
.footer-con hr {
  display:  inherit !important;
  width: 15rem;
}
````

And in the main code :

```css
.footer-con hr{
  display: none;
}
```
