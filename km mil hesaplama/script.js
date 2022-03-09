function taksimetre(){
    let mesafe,odenecekTutar;
    const tarife=3.5;

    mesafe=Number(document.querySelector("#txtMesafe").value);

    odenecekTutar=mesafe*tarife;

    document.querySelectorAll("h3")[0].innerHTML="Gideceğiniz mesafe için ortalama ücret: "+odenecekTutar+" TL'dir";
}
