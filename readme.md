# BackTop Web Component

  This is a web component,back to top or home page.

# Usage

  1. download this project dist files.

  2. copy dest folder to your project.

  3. import .js and .css files to web page.

  ``` html
  <link rel="stylesheet" href="./style/linearicons-free.min.css">
  <link rel="stylesheet" href="./style/backtop.min.css">
  <script type="text/javascript" src="./js/backtop.min.js"></script>
  ```

  4. add javascript code

  ``` javascript
  <script type="text/javascript">
    BackTop.init(1,500);
  </script>
  ```

# Sample

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>返回顶部组件示例</title>
    <link rel="stylesheet" href="./style/linearicons-free.min.css">
    <link rel="stylesheet" href="./style/backtop.min.css">
    <style type="text/css">
    	body{height: 6000px;}
    </style>
  </head>
  <body>
  </body>
  <script type="text/javascript" src="./js/backtop.min.js"></script>
  <script type="text/javascript">
    BackTop.init(1,500);
  </script>
</html>
```

# API

## BackTop.init(type,time);

* ### type

  >scroll type,default is 0.

  0:uniform speed.

  1:uniform acceleration speed.

  2:uniform deceleration speed.

* ### time
  >scroll times,default is 500ms.

# Other

  Icons : [Linearicons Free v1.0.0][4]

# License

[![CC-BY-SA][2]][1]

[CC-BY-SA 4.0][1] © [SeayXu][3]

[1]:http://creativecommons.org/licenses/by-sa/4.0/
[2]:https://i.creativecommons.org/l/by-sa/4.0/88x31.png
[3]:http://seay.me
[4]:https://linearicons.com/free
