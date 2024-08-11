alert("haiii")
alert("aku mau kasih kamu hadiah nih")
alert("liat yaa")
alert("1")
alert("2")
alert("3")
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
