let words = [];

newForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
let ind = null;
enINp.addEventListener("input", (e) => {
  let timer = 0;
  if (!ind) {
    ind = setInterval(async () => {
      timer++;
      if (timer == 12) {
        const tarjimasi = await getTranslate(enINp.value);
        console.log(tarjimasi);
        uzInp.value = tarjimasi.result;
        clearInterval(ind);
        ind = null;
      }
    }, 100);
  }
});
