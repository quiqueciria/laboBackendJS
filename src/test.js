// TESTS

const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg`;

const rows = data.split("\n");

const headers = rows[0].split(",");

const objects = rows.slice(1).map((row) => {
  const values = row.split(",");
  return headers.reduce((obj, header, i) => {
    obj[header] = values[i];
    return obj;
  }, {});
});

console.log(objects);
