class App
{
tekenhuis(g, x, y)
    {
        console.log("hello world!");
        let x = 20;
        let y = 20;
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g)

        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(x,y);
        g.lineTo(x+280,y+280);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        console.log(canvas);

    }
    runApplication()
    {
        this.tekenhuis()
    }

}

let app = new App();
app.runApplication();