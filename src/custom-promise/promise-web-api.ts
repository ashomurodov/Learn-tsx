console.log(0); // 0
setTimeout(() => console.log(1), 0); // 1
Promise.resolve(2).then(console.log); // 2
setTimeout(() => Promise.resolve(3).then(console.log), 0); // 3
setTimeout(() => setTimeout(() => console.log(4), 0), 0); // 4
setTimeout(() => Promise.resolve(5).then(console.log), 0); // 5
console.log(6); // 6 -

/**
 * Muhammadzohid,Azizbek,Ayyub,Mirafzal,Nilufar,Sardorbek,Abdurahmon,Hafizulloh:  [0,6,2,1,3,5,4]
 * Sardor O, Davronali,Murodilla, Fayzulloh:  [0,2,6,1,3,5,4]
 * Azimjon aka:            [0,2,6,1,3,4,5]
 * Murodil:              [0,2,3,6,1,4,5]
 * Arslonbek: [0,6,2,1,3,5,4]
 *
 *
 *
 */
