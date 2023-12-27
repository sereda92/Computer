document.addEventListener("DOMContentLoaded", function() {
    var counterElements = document.querySelectorAll(".counter");
    var duration = 3000;

    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          counterElements.forEach(function(counterElement) {
            var targetValue = parseInt(counterElement.dataset.target, 10);
            var start = null;
  
            function step(timestamp) {
              if (!start) start = timestamp;
              var progress = timestamp - start;
              counterElement.textContent = Math.min(
                Math.ceil((progress / duration) * targetValue),
                targetValue
              );
  
              if (progress < duration) {
                requestAnimationFrame(step);
              }
            }
  
            requestAnimationFrame(step);
          });

          observer.unobserve(entry.target);
        }
      });
    });

    var counterPage = document.querySelector(".counter__page");
    observer.observe(counterPage);
  });
  
  


  document.addEventListener("DOMContentLoaded", function() {
    var h5Elements = document.querySelectorAll('.schedule_item h5');
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
        } else if (!entry.isIntersecting && entry.target.style.opacity !== "0.5") {
          entry.target.style.opacity = ".5"; 
        }
      });
    }, {
      rootMargin: '-15% 0%'
    });
  
    h5Elements.forEach(function(h5Element) {
      observer.observe(h5Element);
    });
  });
  

  //-------burger----

  const burgerBody = document.getElementById('burger')
  const burgerBtn = document.getElementById('burger-btn')
  const body = document.body

  burgerBtn.addEventListener('click', function(){
    if(burgerBody.classList.contains('burger-active')){
      burgerBody.classList.remove('burger-active')
      body.classList.remove('scroll-hidden')
    }else{
      burgerBody.classList.add('burger-active')
      body.classList.add('scroll-hidden')
    }
  })