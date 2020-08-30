# ~~~~~~~~~~~~~~~~~~~~Simple seeding

I got lots of problems with vs code It's clearly not made for some serious coding, it's for beginners or experts but not for lazies.

`One` of the problems that I had was not being able to show the data in each row using for each loop.

It is very convenient to create html tags using for loop. The point I was missing was that when I use one dimentionnal array with same key name I change it in each row.

```php
  $products = [
  'id' => "1", 'name' => "ball",'year' => "2001",
  'id' => "2", 'name' => "phone",'year' => "2002",
  'id' => "3", 'name' => "drink",'year' => "2003",
  ];

```

Like you can see in each row I change the value of the Id key.

And when I loop I get only the last row.

To prevent that you can make the array multi dimentional.

```php
  $products = [
    ['id' => "1", 'name' => "ball",'year' => "2001"],
    ['id' => "2", 'name' => "phone",'year' => "2002"],
    ['id' => "3", 'name' => "drink",'year' => "2003"],
  ];
```

And when you loop through you got what  you want :

```php
<?php foreach($products as $product) : ?>
  <tr>
     <td> <?php echo $product['id'] ?> </td>
     <td> <?php echo $product['name']?> </td>
     <td> <?php echo $product['year'] ?> </td>
   </tr>
<?php endforeach; ?>
```

```
