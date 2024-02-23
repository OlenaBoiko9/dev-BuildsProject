const installGenplan = () => {
    const address = document.querySelector('#address')
    const floor = document.querySelector('#floor')
    const flat = document.querySelector('#flat')
    const builds = document.querySelectorAll('.build-path')
  
  
    builds.forEach(build => {
        build.addEventListener('mouseover', () => {
            const buildAddress = build.getAttribute('data-address')
            const buildFloor = build.getAttribute('data-floor-quantity')
            const buildFlat = build.getAttribute('data-flat-quantity')
  
            console.log(buildFloor);
            address.innerHTML = buildAddress;
            floor.innerHTML = buildFloor;
            flat.innerHTML = buildFlat;
        })
    })
  }
  
  document.querySelector('.genplan') ? installGenplan() : null
  


const burger = document.querySelector('.btn-burger')
const nav = document.querySelector('.header-nav')

console.log(nav);

const toggleMenu =()=> {
    burger.classList.toggle('open');
    nav.classList.toggle('show');
}
burger.addEventListener('click', toggleMenu);