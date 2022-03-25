window.onscroll = () => {
  if (window.pageYOffset > 50) {
    document
      .getElementById('top-header')
      .classList.add('top-header--white-background');
  } else {
    document
      .getElementById('top-header')
      .classList.remove('top-header--white-background');
  }
};
