if ('IntersectionObserver' in window) {
  const script = document.createElement('script');
  script.src = '/js/quicklink.js';
  script.onload = function() {
    quicklink({
      ignores: [
          /.jpg/,
          /.pdf/,
          /.xml/
      ]
    });
  };
  document.head.appendChild(script);
}
