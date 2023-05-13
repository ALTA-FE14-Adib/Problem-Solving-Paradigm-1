//Problem 4 - Lottery
//You'll create a lottery program that receives number input from users and chances to win this lottery is 1:1000 and
//users have to wait for this lottery for 10 seconds. You have to creat random number from 1 - 1000, if user number and
//random number are equal, you have to send a congratulations message to that user who won this lottery, if it is not
//equal, you have to send an apology message to the user that doesn't win the lottery. 1 <= num <=1000.

interface promiseType {
  data: string | null;
  message: string;
}

function lottery(num: number) {
  return new Promise<promiseType>((resolve, reject) => {
    console.log("undian lotre dimulai");
    console.log("sedang mengundi nomor anda");
    let nomorUndian = Math.floor(Math.random() * 1000) + 1;
    console.log("nomor undian : ", nomorUndian);
    console.log("nomor kamu : ", num);
    setTimeout(() => {
      if (num === nomorUndian) {
        const grandPrize = {
          data: "mobil",
          message: "selamat anda mendapatkan hadiah utama mobil",
        };
        resolve(grandPrize);
      } else {
        reject("maaf anda belum beruntung");
      }
    }, 10000);
  });
}

lottery(1)
  .then((response) => {
    console.log(response.message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("undian lotre telah berakhir...");
  });
