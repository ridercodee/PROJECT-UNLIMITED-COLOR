// Generate random color
let changer;

      const randomColor = function () {
        const hex = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
      };

      const startChangingColor = function () {
        if (!changer) {
          changer = setInterval(changeBgColor, 1000);
        }

        function changeBgColor() {
          document.body.style.backgroundColor = randomColor();
        }
      };

      const stopChangingColor = function () {
        clearInterval(changer);
        changer = null;
      };

      const updateBackgroundColor = function () {
        const red = document.getElementById("red").value;
        document.body.style.backgroundColor = randomColor();
        
      };

      document
        .querySelector("#start")
        .addEventListener("click", startChangingColor);
      document
        .querySelector("#stop")
        .addEventListener("click", stopChangingColor);

      document 
        .getElementById("red")
        .addEventListener("input", updateBackgroundColor);

