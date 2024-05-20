fetch('https://api.themoviedb.org/3/movi/11')
 .then((res) => res.json())
 .then((date) => console.log(date))
 .catch((error) => console.error('Error', error))