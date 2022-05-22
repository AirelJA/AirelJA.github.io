function tampilData(){
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var jeniskelamin = document.querySelector("input[name=jeniskelamin]:checked").value;
    var genre = document.getElementsByName("genre");
    var tanggal = document.getElementById("tanggal").value;
    var platform = document.querySelector("input[name=platform]:checked").value;
    var daftarGenre = ''

    for(var genre2 of genre){
        if(genre.checked){
            daftarGenre += ', '+ genre2.value
        }
    }

    daftarGenre = daftarGenre.substring(1)

    alert("Nama : " + nama + "\nTanggal Lahir : " + tanggal +  "\nJenis Kelamin : " + jeniskelamin + "\nGenre : " +  daftarGenre + "\nPlatform" + platform + "\nAlamat : " + alamat
    );
}