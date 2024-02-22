const api = "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";
const input = document.querySelector("#messageInput");
const images = document.querySelector(".images");

async function GetImages() {
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({ prompt: input.value, n: 3, size: "256x256" }),
  };

  const res = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  );
  const { data } = await res.json();
  const box1 = data[0].url;
  const box2 = data[1].url;
  const box3 = data[2].url;
  if (data) {
    document.querySelector(".box-1").innerHTML = `<img src="${box1}" alt="">`;
    document.querySelector(".box-2").innerHTML = `<img src="${box2}" alt="">`;
    document.querySelector(".box-3").innerHTML = `<img src="${box3}" alt="">`;
  } else {
    alert("Error in getting the image");
  }
}
