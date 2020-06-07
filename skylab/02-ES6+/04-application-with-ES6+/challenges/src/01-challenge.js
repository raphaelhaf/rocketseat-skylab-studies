const delay = async () => new Promise(resolve => setTimeout(resolve, 1000));

/*
function byOneSecond() {
  delay().then(() => {
    console.log('1s');

    delay().then(() => {
      console.log('2s');

      delay().then(() =>
        console.log('3s'));
    });
  });
}
*/

const byOneSecond = async () =>{
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('2s');

}

byOneSecond();