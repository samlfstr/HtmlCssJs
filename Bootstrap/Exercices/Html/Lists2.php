<?php

// DB Table Representation
  $courses = [
    [
      'id' => "1",
      'Last Name' => "Abercom",
      'First Name' => "Kim",
      'Hire Date' => "1995",
    ],
    [
      'id' => "2",
      'Last Name' => "Fakhouri",
      'First Name' => "Fadi",
      'Hire Date' => "1994",
    ],
    [
      'id' => "3",
      'Last Name' => "Harui",
      'First Name' => "Roger",
      'Hire Date' => "1993",
    ]
  ];

  $path = $_SERVER['SCRIPT_NAME'] . "?id=";
?>

<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="stylesheet" href="../EgxCss/bootstrap.min.css">
    <title>Bootstrap</title>
  </head>

  <body>

    <!-- content container -->
    <div class="container">



      <table class="table">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Hire Date</th>
            <th> Show </th>
            <th> Delete </th>
            <th> Update </th>
          </tr>
        </thead>
        <tbody>
          <?php foreach($courses as $cours) : ?>
          <tr>
            <a href="">
              <td><?php echo $cours['Last Name'];?></td>
            </a>
            <a href="">
              <td><?php echo $cours['First Name'];?></td>
            </a>
            <a href="">
              <td><?php echo $cours['Hire Date'];?></td>
            </a>
            <td><a href="<?php echo $path . $cours['id']; ?>" class="btn card">show</a></td>
            <td><a href="#" class="btn card">delete</a></td>
            <td><a href="#" class="btn card">update</a></td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>




    </div>
    <!-- END-OF content container -->

    <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

  </body>

</html>