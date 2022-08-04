export default ({redirect}) => {
  /* console.log(context) */
  console.log('auth middleware')

  const loggedIn = false;

  if (!loggedIn) {
    return redirect('/')
  }

}
