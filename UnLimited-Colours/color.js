// Generate random color
let changer;
      let interval = 1000;

      const randomColor = function () {
        const hex = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
      };

      const changeBgColor = function () {
        document.body.style.backgroundColor = randomColor();
      };

      const startChangingColor = function () {
        if (!changer) {
          changer = setInterval(changeBgColor, interval);
        }
      };

      const stopChangingColor = function () {
        clearInterval(changer);
        changer = null;
      };

      const updateBackgroundColor = function () {
        interval = document.getElementById("red").value;
        if (changer) {
          clearInterval(changer);
          changer = setInterval(changeBgColor, interval);
        }
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
