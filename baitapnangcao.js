/* promise đơn giản */
// const myPromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello Promise");
//     }, 2000);
// });
// myPromise.then(result => {
//     console.log(result);
// })

// Trả promise về reject
// const myPromise = new Promise ((resolve, reject) => {
//     reject("Lỗi rồi bạn ươi");
// });

// myPromise.catch(error => {
//     console.log(error);
// });

// tạo promise chain 
// const myPromise = new Promise((resolve, reject) => {
//     resolve(5);
// });

// myPromise
//     .then(num => {
//         return num * 2;
//     })
//     .then(num => {
//         return num +10;
//     })
//     .then(result => {
//         console.log("Kết quả cuối cùng", result);
//     })
//     .catch(err => {
       
//         console.error("Lỗi rồi !!!", err);
//     });

// delay promise ms 
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Hoàn thành sau ${ms} ms`);
//         }, ms);
//     });
// }
// async function run() {
//     console.log("Bắt đầu...");
//     await delay(3000);
//     console.log("Kết thúc sau 3 giây!");
// }
// run();

// kiểm tra chẵn lẻ dùng Promise
// function checkNumber(n) { 
//     return new Promise((resolve, reject) => {
//         if (n % 2 === 0) {
//             resolve("Số chẵn");
//         } else {
//             reject("Số lẻ")
//         }
//     })
// }

// checkNumber(4)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// checkNumber(5)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
