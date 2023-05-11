//Problem 3 - Let's Have Some Snack
//You want to get some snacks like boba and seblak, and in you pocket, you only have Rp. 20.000, here is
//the price list of snacks:
//- Boba: Rp. 5000, estimated time to get boba: 5 second
//- Seblak: Rp.8000, estimated time to get seblak: 9 second
//You have been asked to create programs to solve this problem using callback function

function jajanBoba(uang: number, callback: (message: string) => void): void {
  setTimeout(() => {
    const hargaBoba = 5000;
    if (uang >= hargaBoba) {
      const sisaUang = uang - hargaBoba;
      callback(
        `kamu jajan boba dengan harga RP. ${hargaBoba}\nsisa uang kamu RP.${sisaUang}`
      );
      if (sisaUang >= 8000) {
        jajanSeblak(sisaUang);
      } else {
        callback(
          `maaf uang kamu tidak cukup untuk membeli seblak\nsisa uang kamu sebesar Rp.${sisaUang}`
        );
      }
    } else {
      callback(
        `maaf uang kamu belum cukup untuk membeli barang boba\nsisa uang kamu sebesar RP.${uang}`
      );
    }
  }, 1000);
}

function jajanSeblak(uang: number): void {
  setTimeout(() => {
    const hargaSeblak = 8000;
    if (uang >= hargaSeblak) {
      const sisaUang = uang - hargaSeblak;
      console.log(
        `kamu jajan seblak dengan harga RP.${hargaSeblak}\nsisa uang kamu sebesar RP.${sisaUang}`
      );
    } else {
      console.log(
        `maaf uang kamu belum cukup untuk membeli barang seblak\nsisa uang kamu sebesar RP.${uang}`
      );
    }
  }, 2000);
}

jajanBoba(10000, (message) => {
  console.log(message);
});
// jajanBoba(10000, jajanSeblak);
