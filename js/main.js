// document.addEventListener("DOMContentLoaded", function() {
//     var counterElements = document.querySelectorAll(".counter");
//     var duration = 3000; // Время анимации в миллисекундах (2 секунды)
  
//     counterElements.forEach(function(counterElement) {
//       var targetValue = parseInt(counterElement.dataset.target, 10);
//       var start = null;
  
//       function step(timestamp) {
//         if (!start) start = timestamp;
//         var progress = timestamp - start;
//         counterElement.textContent = Math.min(Math.ceil((progress / duration) * targetValue), targetValue);
  
//         if (progress < duration) {
//           requestAnimationFrame(step);
//         }
//       }
  
//       requestAnimationFrame(step);
//     });
//   });






document.addEventListener("DOMContentLoaded", function() {
    var counterElements = document.querySelectorAll(".counter");
    var duration = 3000; // Время анимации в миллисекундах (2 секунды)
  
    // Создание экземпляра Intersection Observer
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
  
          // Как только блок появится в области видимости, прекратить наблюдение
          observer.unobserve(entry.target);
        }
      });
    });
  
    // Получение элемента блока и начало наблюдения за ним
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
          entry.target.style.opacity = ".5"; // Устанавливаем opacity только при выходе из области видимости, если не было уже установлено .5
        }
      });
    }, {
      rootMargin: '-15% 0%' // Устанавливаем отрицательный отступ сверху на 100px
    });
  
    h5Elements.forEach(function(h5Element) {
      observer.observe(h5Element);
    });
  });
  