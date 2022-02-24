function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (10, 5, 300, 305);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (50, 50, 300, 305);
    } 
  }

