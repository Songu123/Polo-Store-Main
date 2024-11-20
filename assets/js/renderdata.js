loadData();

function loadData() {

  const pageName = window.location.pathname.split('/').pop();

  const allProductContainer = document.querySelector("#all-category");
  const poloProductContainer = document.querySelector("#aopolo-category");
  const aothunProductContainer = document.querySelector("#aothun-category");
  const quanthunProductContainer = document.querySelector("#quanthun-category");
  const quankakiProductContainer = document.querySelector("#quankaki-category");
  const briefProductContainer = document.querySelector("#brief-category");
  const boxerProductContainer = document.querySelector("#boxer-category");
  const aonamProductContainer = document.querySelector("#aonam-category");
  const quannamProductContainer = document.querySelector("#quannam-category");
  const quanlotProductContainer = document.querySelector("#quanlot-category");

  const renderProduct = (product, container) => {
    const price = product.price ? Number(product.price.replace(/\./g, "")) : 0;
    const productHTML = `
        <div class="col-md-3 px-3 my-3">
          <a href="./product_detail.html?id=${product.id}" class="text-decoration-none">
            <div class="card product-card shadow-sm">
            <div class="position-relative overflow-hidden">
              <div class="img-container w-100">
                <img src="${product.img1}" class="h-100 card-img-top" alt="Product Image">
                <img src="${product.img2}" class="position-absolute h-100 card-img-bottom start-0 top-0" alt="Product Image">
                <div class="position-absolute bottom-0 start-0 text-center w-100 bg-dark text-white p-2 quick-view">
                  QUICK VIEW
                </div>
                <button class="loving-product position-absolute top-0 end-0 rounded-circle" tabindex="0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="card-body">
              
    
              <div class="">
                <span class="card-title">${product.name}</span>
                <p class="price fw-bold">${product.price} ₫</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      `;
    container.innerHTML += productHTML;
  };

  // Load data based on the current page
  if (pageName === 'ao-polo-nam.html' && poloProductContainer) {
    poloProductContainer.innerHTML = '';
    const poloProducts = JSON.parse(localStorage.getItem('polo')) || [];
    poloProducts.forEach(product => renderProduct(product, poloProductContainer));
  } else if (pageName === 'ao-thun-nam.html' && aothunProductContainer) {
    aothunProductContainer.innerHTML = '';
    const aothunProducts = JSON.parse(localStorage.getItem('aothun')) || [];
    aothunProducts.forEach(product => renderProduct(product, aothunProductContainer));
  } else if (pageName === 'quan-kaki.html' && quankakiProductContainer) {
    quankakiProductContainer.innerHTML = '';
    const quankakiProducts = JSON.parse(localStorage.getItem('kaki')) || [];
    quankakiProducts.forEach(product => renderProduct(product, quankakiProductContainer));
  } else if (pageName === 'quan-thun.html' && quanthunProductContainer) {
    quanthunProductContainer.innerHTML = '';
    const quanthunProducts = JSON.parse(localStorage.getItem('quanthun')) || [];
    quanthunProducts.forEach(product => renderProduct(product, quanthunProductContainer));
  } else if (pageName === 'brief.html' && briefProductContainer) {
    briefProductContainer.innerHTML = '';
    const quanlotProducts = JSON.parse(localStorage.getItem('brief')) || [];
    quanlotProducts.forEach(product => renderProduct(product, briefProductContainer));
  } else if (pageName === 'boxer.html' && boxerProductContainer) {
    boxerProductContainer.innerHTML = '';
    const quanlotProducts = JSON.parse(localStorage.getItem('boxer')) || [];
    quanlotProducts.forEach(product => renderProduct(product, boxerProductContainer));
  } else if (pageName === 'ao_nam.html' && aonamProductContainer) {
    aonamProductContainer.innerHTML = '';
    const poloProducts = JSON.parse(localStorage.getItem('polo')) || [];
    const aothunProducts = JSON.parse(localStorage.getItem('aothun')) || [];
    const aonamProducts = poloProducts.concat(aothunProducts);
    aonamProducts.forEach(product => renderProduct(product, aonamProductContainer));
  } else if (pageName === 'quan-nam.html' && quannamProductContainer) {
    quannamProductContainer.innerHTML = '';
    const poloProducts = JSON.parse(localStorage.getItem('kaki')) || [];
    const aothunProducts = JSON.parse(localStorage.getItem('quanthun')) || [];
    const aonamProducts = poloProducts.concat(aothunProducts);
    aonamProducts.forEach(product => renderProduct(product, quannamProductContainer));
  } else if (pageName === 'quan-lot.html' && quanlotProductContainer) {
    quanlotProductContainer.innerHTML = '';
    const boxerProducts = JSON.parse(localStorage.getItem('boxer')) || [];
    const briefProducts = JSON.parse(localStorage.getItem('brief')) || [];
    const quanlotProducts = boxerProducts.concat(briefProducts);
    quanlotProducts.forEach(product => renderProduct(product, quanlotProductContainer));
  } else if (pageName === 'shop.html' && allProductContainer) {
    allProductContainer.innerHTML = '';
    const poloProducts = JSON.parse(localStorage.getItem('polo')) || [];
    const aothunProducts = JSON.parse(localStorage.getItem('aothun')) || [];
    const quanthunProducts = JSON.parse(localStorage.getItem('quanthun')) || [];
    const quankakiProducts = JSON.parse(localStorage.getItem('kaki')) || [];
    const quanlotProducts = JSON.parse(localStorage.getItem('brief')) || [];
    const boxerProducts = JSON.parse(localStorage.getItem('boxer')) || [];

    const allProducts = poloProducts.concat(poloProducts, boxerProducts, aothunProducts, quankakiProducts, quanthunProducts, quanlotProducts);

    allProducts.forEach(product => renderProduct(product, allProductContainer));
  }
}

document.addEventListener("DOMContentLoaded", loadData);
