var updateBtns = document.getElementsByClassName('update-cart')
for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function () {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'Action:', action)

        console.log('USER:', user)
        if (user == 'AnonymousUser') {
            console.log("User not authenticated")
        } else {
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action) {
    console.log('User is authenticated');

    var url = '/update_item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })

        .then((response) => {
            return response.json()
        })

        .then((data) => {
            console.log('data:', data)
            location.reload()
        })

}



// Main page - about section
// Get the title elements
const aboutTitle = document.getElementById('about');
const historyTitle = document.getElementById('history');
const contactTitle = document.getElementById('contact');

// Get the content elements
const aboutContent = document.querySelector('.about');
const historyContent = document.querySelector('.history');
const contactContent = document.querySelector('.contact');

// Set the initial visibility
aboutContent.classList.add('show');
historyContent.classList.add('hide');
contactContent.classList.add('hide');

// Add click event listeners
aboutTitle.addEventListener('click', (e) => {
    e.preventDefault();
    historyTitle.classList.remove('active');
    historyTitle.classList.add('inactive');
    contactTitle.classList.remove('active');
    contactTitle.classList.add('inactive');
    aboutTitle.classList.remove('inactive');
    aboutTitle.classList.add('active');

    aboutContent.classList.remove('hide');
    aboutContent.classList.add('show');
    historyContent.classList.remove('show');
    historyContent.classList.add('hide');
    contactContent.classList.remove('show');
    contactContent.classList.add('hide');

    console.log(1);
});

historyTitle.addEventListener('click', (e) => {
    e.preventDefault();
    historyTitle.classList.remove('inactive');
    historyTitle.classList.add('active');
    contactTitle.classList.remove('active');
    contactTitle.classList.add('inactive');
    aboutTitle.classList.remove('active');
    aboutTitle.classList.add('inactive');

    aboutContent.classList.remove('show');
    aboutContent.classList.add('hide');
    historyContent.classList.remove('hide');
    historyContent.classList.add('show');
    contactContent.classList.remove('show');
    contactContent.classList.add('hide');
    console.log(2);
});

contactTitle.addEventListener('click', (e) => {
    e.preventDefault();
    historyTitle.classList.remove('active');
    historyTitle.classList.add('inactive');
    contactTitle.classList.remove('inactive');
    contactTitle.classList.add('active');
    aboutTitle.classList.remove('active');
    aboutTitle.classList.add('inactive');

    aboutContent.classList.remove('show');
    aboutContent.classList.add('hide');
    historyContent.classList.remove('show');
    historyContent.classList.add('hide');
    contactContent.classList.remove('hide');
    contactContent.classList.add('show');
    console.log(3);
});