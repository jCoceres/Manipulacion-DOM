
const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#app')

const formatPrice = price => {

    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD',
    }).format(price)
    return newPrice;
}

// web api
// conectarnos al servidor
window
    .fetch(url)
    .then( respuesta => respuesta.json() )
    .then(({data}) => {
        const allItems = []
        data.forEach ( item => {
            const container = document.createElement('div')
            
            // crear imagen
            const image = document.createElement('img');
            image.src = `https://platzi-avo.vercel.app/${item.image}`;
            image.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
            // crear titulo
            const title = document.createElement('h2');
            title.className = "text-lg";
            title.textContent = item.name;
            // crear precio 
            const price = document.createElement('div');
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price);

            const priceAndTitle = document.createElement("div");
            priceAndTitle.className="text-center md:text-left"
            priceAndTitle.append(title, price);

            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(image, priceAndTitle);

            container.appendChild(card);
            allItems.push(container)
            
        })
        appNode.append(...allItems);
    })

