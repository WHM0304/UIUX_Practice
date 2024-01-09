document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const btn_control = document.querySelector("div.btn_month");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".weekdays");
  let month_num = 0;
  // document.getElementById("demo").innerHTML = date.toDateString();
  const day = date.toDateString().substring(3, 7);
  const change = (document.getElementById("demo").innerHTML = date);

  btn_control.addEventListener("click", (event) => {
    if (prev) {
      const date1 = new Date(2024, month_num);
      document.getElementById("demo").innerHTML = date1;
      month_num = month_num - 1;
    } else if (prev) {
      const date1 = new Date(2024, month_num);
      document.getElementById("demo").innerHTML = date1;
      month_num = month_num + 1;
    }
  });
});
