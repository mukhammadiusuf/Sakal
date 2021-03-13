const locationURL = 'document.location.href';
const urlText = 'Barbershop Sakal';
const shareIcon = [
    {
        title: "Whatsapp",
        icon: "fab fa-whatsapp",
        url: `https://api.whatsapp.com/send?text=${urlText} ${locationURL}`,
        color: "#00e676"
    },
    {
        title: "Facebook",
        icon: "fab fa-facebook",
        url: `https://www.facebook.com/sharer.php?u=${locationURL}`,
        color: "#3b5998"
    },
    {
        title: "Telegram",
        icon: "fab fa-telegram",
        url: `https://t.me/share/url?url=${locationURL}&text=${urlText}`,
        color: "#37abe6"
    },
    {
        title: "Gmail",
        icon: "fas fa-envelope",
        url: `https://mail.google.com/mail/?view=cm&su=${urlText}&body=${locationURL}`,
        color: "#dd5144"
    },
    // {
    //     title: "Копироват URL",
    //     icon: `fas fa-link`,
    //     url: "#",
    //     color: "#b1b1b1"
    // }
];

let buttonsContainer = document.querySelector('#share-buttons');

let iteratedIcons = "";

shareIcon.forEach(item => {
    iteratedIcons += `
        <span>
            <a href="${item.url}" target="_blank" style="color: ${item.color}; text-decoration: none;">
                <i class="${item.icon} fa-2x" title="${item.title}"></i>
            </a>
        </span>
    `;

    
})

buttonsContainer.innerHTML = `
    <h3>Подилитесь</h3>${iteratedIcons}
    <span style="color: #b1b1b1; cursor: pointer;">
            <i class="fas fa-link fa-2x" title="Копироват URL"></i>
        <span class="success-tooltype"></span>
    </span>
`;

const menuButton = document.querySelector('.menu-icon');
const leftNavbar = document.querySelector('.left-navbar');
const rightNavbar = document.querySelector('.right-navbar');
const closeButton = document.querySelector('.close-menu');

// Открытие и закрытие меню
menuButton.onclick = () => {
    leftNavbar.classList.add("open-menu");
    rightNavbar.classList.add("open-menu");
}

closeButton.onclick = () => {
    leftNavbar.classList.remove("open-menu");
    rightNavbar.classList.remove("open-menu");
}


let copyLink = document.querySelector('.fa-link');
copyLink.onclick = () => {
    navigator.clipboard.writeText(document.location.href);

    let tooltype = document.querySelector('.success-tooltype');
    
    tooltype.innerText = 'URL скопирован';
    setTimeout(() => tooltype.innerText = '', 1000);
}
