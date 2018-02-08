<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script></head>
<body>
<input type="text" id="input_1">
<p id="demo">Display the result here.</p>

<script>
// Insert the Math method here 
$(document).ready(function(){
$("#demo").click(function(){
var number=$("#input_1").val();
$("#demo").Math.sqrt(number);
});
});

</script>

</body>
</html>

