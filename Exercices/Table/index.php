<?php
  
  $products = [
    ['id' => "1", 'name' => "ball",'year' => "2001"],
    ['id' => "2", 'name' => "phone",'year' => "2002"],
    ['id' => "3", 'name' => "drink",'year' => "2003"],
  ];



  var_dump($products);


?>

<!doctype html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../Css/main.css">
    <title>Seeding</title>
  </head>

  <body>

    <div class="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
        <?php foreach($products as $product) : ?>
          <tr>
            <td> <?php echo $product['id'] ?> </td>
            <td> <?php echo $product['name']?> </td>
            <td> <?php echo $product['year'] ?> </td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>



  </body>

</html>