<html>
    <head>
        <script>
        changeColor(value) {
            document.getElementById("demo").innerHTML = "Paragraph changed."
        }
        </script>
    </head>
    <body>

        <h1>A Web Page</h1>
        <p id="demo">A Paragraph</p>
        <button type="button" onclick="changeColor(value)">Try it</button>

    </body>
</html>