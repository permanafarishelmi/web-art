import Image from 'next/image';

export default function Home() {
  return (
    <>
     <div className="bg-gray-100 p-4">
      <h1 className="text-4xl font-bold italic gradient-text text-center mb-4 tengah">
        Art Portfolio
      </h1>
      <div className="gallery">
        {/* Ganti URL gambar dan deskripsi sesuai kebutuhan */}
        <div className="artwork">
          <Image
            src="/faris_double_exposure.png" // Ganti dengan path yang sesuai di folder public
            alt="Karya Seni 1"
            width={300} // Sesuaikan dengan lebar yang diinginkan
            height={200} // Sesuaikan dengan tinggi yang diinginkan
          />
          <figcaption>
          <p>
            Gambar ini menampilkan siluet kepala manusia dengan latar belakang pantai dan laut yang tenang. Siluet tersebut diisi dengan gambar ombak yang menghempas pantai, menciptakan efek visual yang menarik. Gambar ini mungkin bermakna bahwa manusia memiliki pikiran yang luas dan dinamis seperti lautan, atau bahwa manusia memiliki hubungan yang erat dengan alam.
          </p>
          </figcaption>
        </div>

        <div className="artwork">
          <Image
            src="/mangga.png" // Ganti dengan path yang sesuai di folder public
            alt="Karya Seni 2"
            width={300} // Sesuaikan dengan lebar yang diinginkan
            height={200} // Sesuaikan dengan tinggi yang diinginkan
          />
          <figcaption>
          <p>
            Ini adalah gambar kata “faris” yang ditulis dengan font artistik dan berwarna kuning cerah. Latar belakangnya berwarna putih, membuat tulisan tersebut menjadi fokus utama. Gambar ini menggambarkan text "faris" yang berada melingkupi buah mangga.
          </p>
          </figcaption>
        </div>

        <div className="artwork">
          <Image
            src="/rusa.png" // Ganti dengan path yang sesuai di folder public
            alt="Karya Seni 3"
            width={300} // Sesuaikan dengan lebar yang diinginkan
            height={200} // Sesuaikan dengan tinggi yang diinginkan
          />
          <figcaption>
          <p>
            Gambar ini menunjukkan rusa jantan dengan tanduk yang bersinar terang, seolah-olah tanduk itu menyala. Rusa tersebut dikelilingi oleh kegelapan malam, dan cahaya dari tanduknya menciptakan kontras visual yang kuat. Gambar ini mungkin bermakna bahwa rusa adalah simbol dari keindahan, kebijaksanaan, dan kekuatan, atau bahwa rusa memiliki kemampuan untuk menerangi jalan di tengah kegelapan.
          </p>
          </figcaption>
        </div>
        {/* Tambahkan lebih banyak div .artwork sesuai jumlah karya seni */}
      </div>
    </div>
    </>
  );
}
